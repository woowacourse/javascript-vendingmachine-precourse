export default class Product {
  constructor({ name, price, quantity }) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getInformation() {
    const { name, price, quantity } = this;
    return { name, price, quantity };
  }

  changePrice(price) {
    this.price = price;
  }

  addQuantity(quantity) {
    this.quantity += quantity;
  }

  sellProduct() {
    this.quantity -= 1;
  }
}
