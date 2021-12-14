import { COINS_PRICE } from '../constants/index.js';
import CoinStorage from '../models/storage/coinStorage.js';
import ProductStorage from '../models/storage/productStorage.js';
import UserAgent from '../models/userAgent.js';
import {
  BUTTON_PRODUCT_PURCHASE_NOT_ENOUGH_CHARGE,
  handleError,
} from '../utils/errorHandler.js';
import LocalStorage, { KEYS } from '../utils/localStorage.js';

class VendingMachineStore {
  static #instance;

  productStorage;

  coinStorage;

  user;

  constructor() {
    const prevProductItems = LocalStorage.load(KEYS.PRODUCT_ITEMS);
    const prevCountRecord = LocalStorage.load(KEYS.COIN_COUNT_RECORD);
    const prevUserAmount = LocalStorage.load(KEYS.USER_AMOUNT);
    const prevUserReturnedRecord = LocalStorage.load(
      KEYS.USER_RETURNED_COIN_COUNT_RECORD
    );

    this.productStorage = new ProductStorage(prevProductItems);
    this.coinStorage = new CoinStorage(prevCountRecord);
    this.user = new UserAgent(prevUserAmount, prevUserReturnedRecord);
  }

  static get instance() {
    if (!VendingMachineStore.#instance) {
      VendingMachineStore.#instance = new VendingMachineStore();
    }
    return VendingMachineStore.#instance;
  }

  #effectOnProductStorage() {
    LocalStorage.save(KEYS.PRODUCT_ITEMS, this.productStorage.items);
    this.productStorage.notify();
  }

  #effectOnCoinStorage() {
    LocalStorage.save(KEYS.COIN_COUNT_RECORD, this.coinStorage.countRecord);
    this.coinStorage.notify();
  }

  #effectOnUser() {
    LocalStorage.save(KEYS.USER_AMOUNT, this.user.amount);
    LocalStorage.save(
      KEYS.USER_RETURNED_COIN_COUNT_RECORD,
      this.user.returnedCoinStorage.countRecord
    );
    this.user.notify();
  }

  notifyAll() {
    this.productStorage.notify();
    this.coinStorage.notify();
    this.user.notify();
  }

  addProduct(product) {
    const { name, price, count } = product;
    const prevIdx = this.productStorage.findIdxByName(name);

    if (prevIdx !== -1) {
      const prevProduct = this.productStorage.getItem(prevIdx);
      this.productStorage.setItem(prevIdx, {
        ...prevProduct,
        price,
        count: prevProduct.count + count,
      });
    } else {
      this.productStorage.appendItem({ ...product });
    }

    this.#effectOnProductStorage();
  }

  chargeChanges(amount) {
    let remaining = amount;
    while (remaining > 0) {
      // eslint-disable-next-line no-loop-func
      const candidates = COINS_PRICE.filter((price) => price <= remaining);
      // eslint-disable-next-line no-undef
      const pickedCoinPrice = MissionUtils.Random.pickNumberInList(candidates);
      this.coinStorage.addCoin(pickedCoinPrice);
      remaining -= pickedCoinPrice;
    }

    this.#effectOnCoinStorage();
  }

  chargeUser(amount) {
    this.user.charge(amount);
    this.#effectOnUser();
  }

  buyProduct(productIdx) {
    if (!this.productStorage.hasEnoughItem(productIdx)) {
      throw new Error(
        'ProductStorage Error: invariant is broken (item.count > 0)'
      );
    }

    const product = this.productStorage.getItem(productIdx);

    if (!this.user.canSpend(product.price)) {
      handleError(BUTTON_PRODUCT_PURCHASE_NOT_ENOUGH_CHARGE);
      return;
    }

    this.productStorage.useItem(productIdx);
    this.user.spend(product.price);

    this.#effectOnProductStorage();
    this.#effectOnUser();
  }

  #getUseCountByGreedy(remaining, price) {
    const storageCount = this.coinStorage.getCoin(price).count;
    const maxCoinCount = parseInt(remaining / price, 10);
    return Math.min(storageCount, maxCoinCount);
  }

  returnChanges() {
    let remaining = this.user.amount;

    COINS_PRICE.forEach((price) => {
      if (price > remaining) {
        return;
      }

      const useCount = this.#getUseCountByGreedy(remaining, price);
      this.coinStorage.useCoin(price, useCount);
      this.user.returnedCoinStorage.addCoin(price, useCount);
      remaining -= price * useCount;
    });

    const returnAmount = this.user.amount - remaining;
    this.user.spend(returnAmount);

    this.#effectOnCoinStorage();
    this.#effectOnUser();
  }
}

export default VendingMachineStore;
