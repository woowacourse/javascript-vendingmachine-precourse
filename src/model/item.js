export default class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  get array() {
    return [this.name, this.price, this.quantity];
  }
}
