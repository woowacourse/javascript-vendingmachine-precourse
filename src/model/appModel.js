import { setDataOnStorage, loadDataFromStorage } from '../utils/storage.js';
import { STRING } from '../constants/constants.js';
import NUMBER from '../constants/number.js';
import { defaultProducts, defaultAddTabInput } from './data.js';

export default class AppModel {
  constructor() {
    this.products = this.loadProducts() || defaultProducts();
    this.chargeAmount = this.loadChargeAmount() || NUMBER.ZERO;
    this.addTabInput = defaultAddTabInput();
  }

  loadProducts() {
    return loadDataFromStorage(STRING.PRODUCTS);
  }

  setProducts(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products = [...this.products, { ...product }];

    setDataOnStorage(STRING.PRODUCTS, this.products);
  }

  setAddTabInput(key, value) {
    this.addTabInput[key] = value;
  }

  // setChargeAmount(amount) {
  //   this.chargeAmount = this.chargeAmount > 0 ? this.addedChargeAmount(amount) : amount;

  //   setDataOnStorage(STRING.CHARGE_AMOUNT, this.chargeAmount);
  // }

  addedChargeAmount(amount) {
    return this.chargeAmount + amount;
  }

  loadChargeAmount() {
    return loadDataFromStorage(STRING.CHARGE_AMOUNT);
  }
}
