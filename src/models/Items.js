import Item from './Item.js';

export default class Items {
  constructor(store, items) {
    this.store = store;
    this.items = items.map(
      ({ id, name, price, quantity }) => new Item(id, name, price, quantity)
    );
  }

  // TODO: 예외 처리
  insert(name, price, quantity) {
    const result = this.store.insert({ name, price, quantity });
    this.items.push(new Item(result.id, name, price, quantity));

    return this;
  }

  purchase(id) {
    const result = this.items.findIndex((item) => item.id === id);

    if (result === -1) {
      alert('no such item');

      throw 'no such item';
    }

    this.items[result].purchase();
    this.store.update(this.items[result]);

    return this;
  }
}
