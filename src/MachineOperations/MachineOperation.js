import {
  ERROR_INVALID_PURCHASE_PRICE,
  ERROR_INVALID_PURCHASE_PRODUCT,
  ERROR_INVALID_PURCHASE_QUANTITY,
} from './MachineOperation.constants.js';
import { divideToCoins, getAllCoins, getCoins, mergeObj } from '../Utils.js';
import { isValidMoney } from '../validation.js';
import { getFromStorage, setInStorage } from '../store.js';

export default class MachineOperations {
  constructor() {
    this.errorMessage = '';
  }

  static registerCoin(amount) {
    if (isValidMoney(amount)) {
      const currentCoinObj = getFromStorage('coins') || {};
      const newCoinObj = divideToCoins(amount);
      const mergedCoins = mergeObj(currentCoinObj, newCoinObj);
      setInStorage('coins', mergedCoins);
      return true;
    }

    return false;
  }

  static registerInsert(value) {
    if (isValidMoney(value)) {
      const current = getFromStorage('insert');
      setInStorage('insert', current * 1 + value);
      return true;
    }

    return false;
  }

  static purchaseProduct(dataset) {
    const products = getFromStorage('products');
    const insert = getFromStorage('insert') * 1;
    if (this.isValidPurchase(products, insert, dataset)) {
      this.proceedPurchase(products, insert, dataset);
      return true;
    }

    return false;
  }

  static proceedPurchase(products, insert, dataset) {
    setInStorage('insert', insert - products[dataset.productName].price);
    const newProducts = { ...products };
    if (newProducts[dataset.productName].quantity === 1) {
      delete newProducts[dataset.productName];
    } else {
      newProducts[dataset.productName].quantity -= 1;
    }
    setInStorage('products', newProducts);
  }

  static isValidPurchase(products, insert, dataset) {
    if (!(dataset.productName in products)) {
      this.errorMessage = ERROR_INVALID_PURCHASE_PRODUCT;
      return false;
    }
    if (dataset.productQuantity <= 0) {
      this.errorMessage = ERROR_INVALID_PURCHASE_QUANTITY;
      return false;
    }
    if (insert < dataset.productPrice) {
      this.errorMessage = ERROR_INVALID_PURCHASE_PRICE;
      return false;
    }

    return true;
  }

  static mergeCoinObj(coinObj) {
    const currentCoin = getAllCoins() || {};

    const newCoin = Object.keys(coinObj).reduce((obj, key) => {
      const newObj = { ...obj };
      if (newObj[key]) newObj[key] += coinObj[key];
      else newObj[key] = coinObj[key];
      return newObj;
    }, currentCoin);

    return newCoin;
  }

  static getChargeSum() {
    const coinObj = getAllCoins() || {};
    const chargeSum = Object.keys(coinObj).reduce(
      (sum, coin) => sum + coin * coinObj[coin],
      0,
    );

    return chargeSum;
  }

  static returnCoins() {
    const insert = window.localStorage.getItem('insert');
    const coins = getAllCoins();

    if (insert > 10) {
      const { returnCoins, left, newCoins } = getCoins(insert, coins);
      if (left !== 0) window.localStorage.setItem('insert', left);
      else window.localStorage.removeItem('insert');
      if (!this.noChange(newCoins)) {
        window.localStorage.setItem('coins', JSON.stringify(newCoins));
      } else window.localStorage.removeItem('coins');
      return returnCoins;
    }

    return {};
  }

  static noChange(obj) {
    return Object.values(obj).reduce((acc, val) => acc + val, 0) === 0;
  }
}
