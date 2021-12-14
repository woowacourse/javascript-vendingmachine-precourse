import { MACHINE } from '../constants/machine.js';
import { STORAGE_KEY } from '../constants/storageKey.js';
import { setLocalStorage } from './store.js';
import { alertPurchaseErrorMessage, canPurchase } from '../utils/validator.js';

function VendingMachine() {
  this.products = [];
  this.charge = 0;
  this.coin = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };
  this.insertMoney = 0;

  this.addProduct = (product) => {
    this.products.push(product);
    setLocalStorage(STORAGE_KEY.PRODUCT, this.products);
  };

  this.addProductQuantity = (name, quantity) => {
    const product = this.products.find((product) => product.name === name);

    if (!product) {
      return;
    }

    product.quantity += Number(quantity);
    setLocalStorage(STORAGE_KEY.PRODUCT, this.products);

    return product.quantity;
  };

  this.addCharge = (charge) => {
    this.charge += charge;
    setLocalStorage(STORAGE_KEY.CHARGE, this.charge);
  };

  this.addCoin = (charge) => {
    let amount = charge;

    while (amount >= 0) {
      const coin = MissionUtils.Random.pickNumberInList(MACHINE.COIN);

      if (coin <= amount) {
        this.coin[coin] += 1;
        amount -= coin;
      }

      if (!amount) {
        break;
      }
    }
    setLocalStorage(STORAGE_KEY.COIN, this.coin);
  };

  this.addInsertMoney = (money) => {
    this.insertMoney += money;
    setLocalStorage(STORAGE_KEY.INSERT, this.insertMoney);
  };

  this.purchaseProduct = (name) => {
    const product = this.products.find((product) => product.name === name);

    if (!canPurchase(product.price, this.insertMoney, product.quantity)) {
      alertPurchaseErrorMessage(
        product.price,
        this.insertMoney,
        product.quantity
      );

      return;
    }

    product.quantity -= 1;
    this.insertMoney -= product.price;
    setLocalStorage(STORAGE_KEY.PRODUCT, this.products);
    setLocalStorage(STORAGE_KEY.INSERT, this.insertMoney);
  };

  this.getReturnCoinCount = (coin) => {
    const minCount = Math.min(
      this.coin[coin],
      parseInt(this.insertMoney / coin)
    );

    this.coin[coin] -= minCount;
    this.insertMoney -= minCount * coin;
    this.charge -= minCount * coin;

    return minCount;
  };

  this.returnCoin = () => {
    const returnCoin = MACHINE.COIN.map((coin) =>
      this.getReturnCoinCount(coin)
    );

    setLocalStorage(STORAGE_KEY.CHARGE, this.charge);
    setLocalStorage(STORAGE_KEY.COIN, this.coin);
    setLocalStorage(STORAGE_KEY.INSERT, this.insertMoney);

    return returnCoin;
  };
}

export const vendingMachine = new VendingMachine();
