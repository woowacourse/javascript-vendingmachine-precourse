import { setDataOnStorage, loadDataFromStorage } from '../utils/storage.js';
import { STRING } from '../constants/constants.js';
import { defaultProducts, defaultAddTabInput } from './data.js';

export default class AppModel {
  constructor() {
    this.products = this.loadProducts() || defaultProducts();
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
}
