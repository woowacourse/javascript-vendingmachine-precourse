export default class Product {
  constructor({ name, price, quantity }) {
    this.name = name.trim();
    this.price = price;
    this.quantity = quantity;
  }
}
