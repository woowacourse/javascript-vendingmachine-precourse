import Product from "./product.js";

class VendingMachine {
  constructor() {
    this.products = [];
  }

  addProduct(name, price, quantity) {
    const newProduct = new Product(name, price, quantity);
    this.products.push(newProduct);

    return newProduct;
  }
}

export const vendingMachine = new VendingMachine();
