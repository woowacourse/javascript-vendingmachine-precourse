import { cloneObject } from '../utils/data-tools.js';

export default class Product {
  constructor(productData) {
    this._items = cloneObject(productData); // 사이드 이펙트를 방지한다.
  }

  _getNameToIndex(name) {
    return this._items.findIndex((value) => value.name === name);
  }

  _newItem({ name, price, quantity }) {
    this._items.push({ name, price, quantity });
  }

  _updateItem(index, { price, quantity }) {
    this._items[index].price = price;
    this._items[index].quantity += quantity;
  }

  add({ name, price, quantity }) {
    const index = this._getNameToIndex(name);

    if (index === -1) this._newItem({ name, price, quantity });
    else if (index > -1) this._updateItem(index, { price, quantity });

    return this;
  }

  purchase(index) {
    if (this._items[index].quantity === 1) {
      this._items.splice(index, 1);
    } else if (this._items[index].quantity > 1) {
      this._items[index].quantity -= 1;
    }

    return this;
  }

  itemInfo(index) {
    if (!this._items[index]) return false;
    return this._items[index];
  }

  get result() {
    return [...this._items];
  }
}
