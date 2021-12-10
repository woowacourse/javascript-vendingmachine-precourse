import { COINS_PRICE } from '../constants/index.js';
import CoinStorage from '../models/storage/coinStorage.js';
import ProductStorage from '../models/storage/productStorage.js';
import UserAgent from '../models/userAgent.js';
import {
  BUTTON_PRODUCT_PURCHASE_NOT_ENOUGH_CHARGE,
  handleError,
} from '../utils/errorHandler.js';

class VendingMachineStore {
  static #instance;

  productStorage;

  coinStorage;

  user;

  constructor() {
    this.productStorage = new ProductStorage();
    this.coinStorage = new CoinStorage();
    this.user = new UserAgent();
  }

  static get instance() {
    if (!VendingMachineStore.#instance) {
      VendingMachineStore.#instance = new VendingMachineStore();
    }
    return VendingMachineStore.#instance;
  }

  addProduct(product) {
    const { name, price, count } = product;
    const prevIdx = this.productStorage.findIdxByName(name);

    if (prevIdx !== -1) {
      const prevProduct = this.productStorage.getItem(prevIdx);
      this.productStorage.setItem({
        ...prevProduct,
        price,
        count: prevProduct.count + count,
      });
    } else {
      this.productStorage.appendItem({ ...product });
    }
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
  }

  chargeUser(amount) {
    this.user.charge(amount);
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
      this.user.addReturnedCoinCount(price, useCount);
      remaining -= price * useCount;
    });

    const returnAmount = this.user.amount - remaining;
    this.user.spend(returnAmount);
  }
}

export default VendingMachineStore;
