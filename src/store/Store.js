import tc from '../core/utils/tc.js';
import Item from '../models/Item.js';
import INIT_DATA from './initData.js';

export default class Store {
  constructor(name, _ = tc(name, 'string')) {
    this.name = name;
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem(this.name)) || INIT_DATA;
  }

  setLocalStorage(state, _ = tc(state, 'object')) {
    localStorage.setItem(this.name, JSON.stringify(state));
  }

  find(
    query,
    callback,
    _0 = tc(query, 'function'),
    _1 = tc(callback, 'function')
  ) {
    const { items } = this.getLocalStorage();

    callback(items.filter((item) => query(item)));
  }

  insert({ name, price, quantity }) {
    const state = this.getLocalStorage();
    const id = Date.now();

    state.items.push({ id, name, price, quantity });
    this.setLocalStorage(state);

    return { success: true, id };
  }

  update(id, updatedItem, _0 = tc(id, 'number'), _1 = tc(updatedItem, Item)) {
    const state = this.getLocalStorage();
    const result = state.items.findIndex((item) => item.id === id);

    if (result === -1) {
      return { success: false };
    }

    state.items[result] = { ...updatedItem, id };
    this.setLocalStorage(state);
  }

  updateCoins(coins, _ = tc(coins, 'object')) {
    const state = this.getLocalStorage();

    state.coins = coins;
    this.setLocalStorage(state);
  }

  updateCharge(amount, _ = tc(amount, 'number')) {
    const state = this.getLocalStorage();

    state.chargedAmount = amount;
    this.setLocalStorage(state);
  }
}
