import { vendingMachine } from '../index.js';
import { ACTION_DELETE, ACTION_SAVE } from '../constants/action.js';

export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  static createProduct(productInput) {
    return new Product(
      productInput.productNameInput,
      productInput.productPriceInput,
      productInput.productQuantityInput
    );
  }

  static searchProduct(name) {
    return vendingMachine.products.find(product => product.name === name);
  }

  static deleteProduct(product) {
    if (product.quantity === 0) {
      vendingMachine.updateProductsModel(ACTION_DELETE, product);
      vendingMachine.updateProductsModel(ACTION_SAVE, product);
      vendingMachine.updateProductsView(ACTION_DELETE, product);
    }
  }

  static sellProduct(product) {
    product.quantity -= 1;
  }
}
