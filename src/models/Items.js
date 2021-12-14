import Item from './Item.js';
import { EXCEPTIONS } from '../configs/constants.js';

export default class Items {
  constructor(items) {
    this.items = new Map();

    items.forEach(({ id, name, price, quantity }) =>
      this.items.set(id, new Item(name, price, quantity))
    );
  }

  findById(id) {
    const item = this.items.get(id);

    if (!item) {
      throw EXCEPTIONS.NO_SUCH_ITEM;
    }

    return item;
  }

  findByName(name) {
    return [...this.items.entries()].filter((item) => item[1].name === name);
  }

  insert(id, name, price, quantity) {
    this.items.set(id, new Item(name, price, quantity));
  }

  purchase(id) {
    const item = this.findById(id);

    item.purchase();

    return this;
  }
}
