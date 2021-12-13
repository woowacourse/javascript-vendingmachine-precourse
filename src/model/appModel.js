import { setDataOnStorage, loadDataFromStorage } from '../utils/storage.js';
import { STRING } from '../constants/constants.js';

export default class AppModel {
  constructor() {
    this.products = this.loadProducts() || [];
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
}
