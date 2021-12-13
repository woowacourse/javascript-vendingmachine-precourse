import { setDataOnStorage } from '../utils/storage.js';
import { STRING } from '../constants/constants.js';

export default class AppModel {
  constructor() {
    this.products = [];
  }

  setProducts(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products = [...this.products, { ...product }];

    setDataOnStorage(STRING.PRODUCTS, this.products);
  }
}
