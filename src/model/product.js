export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = parseInt(price);
    this.quantity = parseInt(quantity);
  }
}
