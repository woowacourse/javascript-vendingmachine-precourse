export default class VendingMachineItems {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    const itemIndex = this.#getItemIndexByName(name);
    if (itemIndex === -1) {
      this.items.push([name, price, quantity]);
    } else {
      this.items[itemIndex] = [name, price, quantity];
    }
  }

  #getItemIndexByName(name) {
    return this.items.findIndex((item) => item[0] === name);
  }

  getItemsList() {
    return this.items;
  }

  getPrice(name) {
    const itemIndex = this.#getItemIndexByName(name);
    return itemIndex !== -1 ? this.items[itemIndex][1] : -1;
  }

  getQuantity(name) {
    const itemIndex = this.#getItemIndexByName(name);
    return itemIndex !== -1 ? this.items[itemIndex][2] : -1;
  }

  purchaseItem(name) {
    const itemIndex = this.#getItemIndexByName(name);
    if (itemIndex !== -1 && this.items[itemIndex][2] > 0) {
      this.items[itemIndex][2] -= 1;
    }
  }
}
