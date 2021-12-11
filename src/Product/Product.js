export default class Product {
  static instance;
  constructor() {
    if (this.instance) return this.instance;
    this.currentProducts = [];
    this.instance = this;
  }

  addProduct(name, price, quantity) {
    const product = {
      name,
      price,
      quantity,
    };
    this.currentProducts.push(product);
  }
}
