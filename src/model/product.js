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

  deleteProduct(index) {
    this.products.splice(index, 1);
  }

  removeQuantity(index) {
    if (this.products[index].quantity === 0) {
      this.deleteProduct(index);
    }

    this.products[index].quantity -= 1;
  }

  purchaseProduct(name) {
    for (let i in this.products) {
      if (this.products[i].name === name) {
        this.removeQuantity(i);

        return this.products[i].price;
      }
    }
  }
}
