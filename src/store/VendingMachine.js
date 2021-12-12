/* eslint-disable no-constructor-return */
import Product from '../model/Product.js';

let instance = null;

export default class VendingMachine {
  constructor() {
    if (instance !== null) {
      return instance;
    }
    this.productList = [];

    instance = this;
  }

  addProduct(name, price, quantity) {
    const index = this.findProductIndex(name);

    if (index === -1) {
      this.createProduct(name, price, quantity);
    } else {
      this.modifyProduct(index, name, price, quantity);
    }
  }

  findProductIndex(name) {
    return this.productList.findIndex((product) => product.getName() === name);
  }

  createProduct(name, price, quantity) {
    this.productList.push(new Product(name, price, quantity));
  }

  modifyProduct(index, name, price, quantity) {
    const product = this.productList[index];

    product.setPrice(price);
    product.setQuantity(product.getQuantity() + quantity);
  }

  getProductList() {
    return this.productList;
  }
}
