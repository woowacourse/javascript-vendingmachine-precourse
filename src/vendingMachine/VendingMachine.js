import initView from '../view/initView.js';
import Product from './Product.js';

export default class VendingMachine {
  constructor() {
    initView();
    this.products = [];
  }

  addProduct(product) {
    this.products.push(new Product(product));
  }
}
