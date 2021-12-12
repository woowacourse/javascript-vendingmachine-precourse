import {
  COIN_LIST,
  ERROR_DUPLICATE_NAME,
  ERROR_EMPTY_NAME,
  ERROR_INVALID_CHARGE,
  ERROR_INVALID_PRICE,
  ERROR_INVALID_QUANTITY,
  VAL_PRICE_ROUND_STANDARD,
} from './MachineOperation.constants.js';
import { getAllCoins, getAllProducts } from '../Utils.js';

export default class MachineOperations {
  constructor() {
    this.errorMessage = '';
  }

  registerProduct(name, price, quantity) {
    if (this.validateProductInput(name, price, quantity)) {
      const productObjects = getAllProducts() || {};
      productObjects[name] = { price, quantity };
      window.localStorage.setItem('products', JSON.stringify(productObjects));
      return true;
    }

    alert(this.errorMessage);
    return false;
  }

  static registerCoin(amount) {
    if (this.validateChargeInput(amount)) {
      const coinObj = this.divideToCoins(amount);
      const mergedCoins = this.mergeCoinObj(coinObj);
      window.localStorage.setItem('coins', JSON.stringify(mergedCoins));
      return true;
    }

    alert(this.errorMessage);
    return false;
  }

  validateProductInput(name, price, quantity) {
    return (
      this.validateNameInput(name) &&
      this.validatePriceInput(price) &&
      this.validateQuantityInput(quantity)
    );
  }

  validateNameInput(name) {
    const products = getAllProducts() || {};
    if (name in products) {
      this.errorMessage = ERROR_DUPLICATE_NAME;
      return false;
    }
    if (name.replace(/\s/g, '').length === 0) {
      this.errorMessage = ERROR_EMPTY_NAME;
      return false;
    }
    return true;
  }

  validatePriceInput(price) {
    if (price % VAL_PRICE_ROUND_STANDARD !== 0 || price <= 0) {
      this.errorMessage = ERROR_INVALID_PRICE;
      return false;
    }
    return true;
  }

  validateQuantityInput(quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      this.errorMessage = ERROR_INVALID_QUANTITY;
      return false;
    }
    return true;
  }

  static validateChargeInput(charge) {
    if (charge % VAL_PRICE_ROUND_STANDARD !== 0 || charge <= 0) {
      this.errorMessage = ERROR_INVALID_CHARGE;
      return false;
    }
    return true;
  }

  static divideToCoins(amount) {
    let left = amount;
    const coinObj = {};

    while (left !== 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(COIN_LIST); // eslint-disable-line
      if (randomCoin <= left) {
        coinObj[randomCoin] = coinObj[randomCoin] + 1 || 1;
        left -= randomCoin;
      }
    }

    return coinObj;
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
}
