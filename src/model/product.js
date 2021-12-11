export default class ProductManager {
  constructor() {
    this.products = [];
  }

  createProduct(name, price, quantity) {
    return {
      name: name,
      price: price,
      quantity: quantity,
    };
  }

  addProduct(name, price, quantity) {
    const product = this.createProduct(name, price, quantity);
    this.products.push(product);
  }
}
