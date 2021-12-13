import {
  COIN_LIST,
  ERROR_DUPLICATE_NAME,
  ERROR_EMPTY_NAME,
  ERROR_INVALID_CHARGE,
  ERROR_INVALID_INSERT,
  ERROR_INVALID_PRICE,
  ERROR_INVALID_PURCHASE_PRICE,
  ERROR_INVALID_PURCHASE_PRODUCT,
  ERROR_INVALID_PURCHASE_QUANTITY,
  ERROR_INVALID_QUANTITY,
  VAL_PRICE_ROUND_STANDARD,
} from './MachineOperation.constants.js';
import { getAllCoins, getAllProducts, getCoins } from '../Utils.js';

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

  static registerInsert(value) {
    if (this.validateInsertInput(value)) {
      const current = window.localStorage.getItem('insert');
      window.localStorage.setItem('insert', current * 1 + value);
      return true;
    }

    alert(this.errorMessage);
    return false;
  }

  static purchaseProduct(dataset) {
    const products = getAllProducts();
    const insert = window.localStorage.getItem('insert') * 1;
    if (this.isValidPurchase(products, insert, dataset)) {
      this.proceedPurchase(products, insert, dataset);
      return true;
    }

    alert(this.errorMessage);
    return false;
  }

  static proceedPurchase(products, insert, dataset) {
    window.localStorage.setItem(
      'insert',
      insert - products[dataset.productName].price,
    );
    const newProducts = { ...products };
    if (newProducts[dataset.productName].quantity === 1) {
      delete newProducts[dataset.productName];
    } else {
      newProducts[dataset.productName].quantity -= 1;
    }
    window.localStorage.setItem('products', JSON.stringify(newProducts));
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

  static validateInsertInput(insert) {
    if (insert % VAL_PRICE_ROUND_STANDARD !== 0 || insert <= 0) {
      this.errorMessage = ERROR_INVALID_INSERT;
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
