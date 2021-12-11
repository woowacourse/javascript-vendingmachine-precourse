export default class Product {
  constructor({ name, price, quantity }) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getProductInformation() {
    const { name, price, quantity } = this;
    return { name, price, quantity };
  }

  hasEnoughQuantity(requiredQuantity) {
    return this.quantity >= requiredQuantity;
  }

  sellProduct() {
    this.quantity -= 1;
  }
}
