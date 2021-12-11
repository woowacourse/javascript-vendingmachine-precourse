import Item from './Item.js';

export default class Items {
  constructor(items) {
    this.items = items.map(
      ({ id, name, price, quantity }) => new Item(id, name, price, quantity)
    );
  }

  find(id) {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      return null;
    }

    return this.items[index];
  }

  insert(id, name, price, quantity) {
    this.items.push(new Item(id, name, price, quantity));
  }

  purchase(id) {
    const item = this.find(id);

    if (!item) {
      throw 'no such item';
    }

    item.purchase();

    return this;
  }
}
