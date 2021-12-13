import Item from './Item.js';
import tc from '../core/utils/tc.js';

export default class Items {
  constructor(items, _ = tc(items, 'object')) {
    this.items = items.map(
      ({ id, name, price, quantity }) => new Item(id, name, price, quantity)
    );
  }

  find(id, _ = tc(id, 'number')) {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      return null;
    }

    return this.items[index];
  }

  insert(
    id,
    name,
    price,
    quantity,
    _0 = tc(id, 'number'),
    _1 = tc(name, 'string'),
    _2 = tc(price, 'number'),
    _3 = tc(quantity, 'number')
  ) {
    this.items.push(new Item(id, name, price, quantity));
  }

  purchase(id, _ = tc(id, 'number')) {
    const item = this.find(id);

    if (!item) {
      throw 'no such item';
    }

    item.purchase();

    return this;
  }
}
