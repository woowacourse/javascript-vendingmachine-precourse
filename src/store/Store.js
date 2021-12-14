import { INIT_DATA } from '../configs/constants.js';

export default class Store {
  constructor(name) {
    this.name = name;
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem(this.name)) || INIT_DATA;
  }

  setLocalStorage(state) {
    localStorage.setItem(this.name, JSON.stringify(state));
  }

  find(query, callback) {
    const { items } = this.getLocalStorage();

    callback(items.filter((item) => query(item)));
  }

  insertItem({ name, price, quantity }) {
    const state = this.getLocalStorage();
    const id = Date.now();

    state.items.push({ id, name, price, quantity });
    this.setLocalStorage(state);

    return { success: true, id };
  }

  updateItem(id, updatedItem) {
    const state = this.getLocalStorage();
    const result = state.items.findIndex((item) => item.id === id);

    if (result === -1) {
      return { success: false };
    }

    state.items[result] = { ...state.items[result], ...updatedItem };
    this.setLocalStorage(state);

    return { success: true };
  }

  removeitem(id) {
    const state = this.getLocalStorage();
    const result = state.items.findIndex((item) => item.id === id);

    if (result === -1) {
      return { success: false };
    }

    state.items.splice(result, 1);
    this.setLocalStorage(state);

    return { success: true };
  }

  updateCoins(coins) {
    const state = this.getLocalStorage();

    state.coins = coins;
    this.setLocalStorage(state);

    return { success: true };
  }

  updateCharge(amount) {
    const state = this.getLocalStorage();

    state.chargedAmount = amount;
    this.setLocalStorage(state);

    return { success: true };
  }
}
