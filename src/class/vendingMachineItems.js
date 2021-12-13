export default class VendingMachineItems {
  constructor() {
    this.items = {};
  }

  addItem(name, price, quantity) {
    this.items[name] = [price, quantity];
  }

  getItemsList() {
    return Object.keys(this.items).map((name) => this.getItemObject(name));
  }

  getItemObject(name) {
    return { name, price: this.items[name][0], quantity: this.items[name][1] };
  }

  getPrice(name) {
    return this.items[name][0];
  }

  getQuantity(name) {
    return this.items[name][1];
  }

  purchaseItem(name) {
    if (name in this.items && this.items[name][1] > 0) this.items[name][1] -= 1;
  }
}
