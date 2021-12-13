import Item from './Item.js';
import tc from '../core/utils/tc.js';

export default class Items {
  constructor(items, _ = tc(items, 'object')) {
    this.items = new Map();

    items.forEach(({ id, name, price, quantity }) =>
      this.items.set(id, new Item(name, price, quantity))
    );
  }

  find(id, _ = tc(id, 'number')) {
    const item = this.items.get(id);

    if (!item) {
      throw 'no such item';
    }

    return item;
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
    this.items.set(id, new Item(name, price, quantity));
  }

  purchase(id, _ = tc(id, 'number')) {
    const item = this.find(id);

    item.purchase();

    return this;
  }
}
