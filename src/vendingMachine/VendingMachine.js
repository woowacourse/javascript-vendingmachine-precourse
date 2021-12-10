import Validator from '../validator/Validator.js';
import initView from '../view/initView.js';
import Product from './Product.js';

export default class VendingMachine {
  constructor() {
    initView();
    this.products = [];
  }

  addProduct(product) {
    if (Validator.isValidAddInput(product)) {
      this.products.push(new Product(product));
    }
  }
}
