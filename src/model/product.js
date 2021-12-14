export default class ProductManager {
  constructor(products) {
    this.products = products;
  }

  create(name, price, quantity) {
    return {
      name: name,
      price: price,
      quantity: quantity,
    };
  }

  add(name, price, quantity) {
    const product = this.create(name, price, quantity);
    this.products.push(product);
  }

  delete(index) {
    this.products.splice(index, 1);
  }

  removeQuantity(index) {
    if (this.products[index].quantity === 0) {
      this.delete(index);
    }

    this.products[index].quantity -= 1;
  }

  purchase(name) {
    for (let i in this.products) {
      if (this.products[i].name === name) {
        this.removeQuantity(i);

        return this.products[i].price;
      }
    }
  }
}
