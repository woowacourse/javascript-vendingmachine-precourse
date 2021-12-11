import { STORAGE_KEY } from './constants.js';
import * as storage from './storage.js';

export default class Product {
  constructor() {
    this.items = {};
  }

  add(item) {
    if (this.items[item.name]) {
      this.items[item.name] = { price: item.price, quantity: this.items[item.name].quantity + item.quantity };
      return;
    }

    this.items[item.name] = { price: item.price, quantity: item.quantity };
  }

  getProductItems() {
    return this.items;
  }

  out(name) {
    this.items[name].quantity--;

    if (this.items[name].quantity === 0) {
      delete this.items[name];
    }
  }

  getProductPrice(name) {
    return this.items[name].price;
  }

  save() {
    storage.save(STORAGE_KEY.product, this.items);
  }

  initialize() {
    if (storage.find(STORAGE_KEY.product)) {
      this.items = storage.find(STORAGE_KEY.product);
    }
  }
}
