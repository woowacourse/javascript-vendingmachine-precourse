export default class Product {
  constructor(name, price, quantity, id) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.id = 'stockNo' + id;
  }
}
