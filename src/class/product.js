import { vendingMachine } from '../index.js';

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
    return vendingMachine.products.find((product) => product.name === name);
  }

  static deleteProduct(product) {
    if (product.quantity === 0) {
      vendingMachine.updateProductsModel('삭제', product);
      vendingMachine.updateProductsModel('저장', product);
      vendingMachine.updateProductsView('삭제', product);
      vendingMachine.updatePurchaseView('삭제', product);
    }
  }

  static sellProduct(product) {
    product.quantity -= 1;
  }
}
