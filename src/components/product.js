export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getInformation() {
    return [this.name, this.price, this.quantity];
  }
}
