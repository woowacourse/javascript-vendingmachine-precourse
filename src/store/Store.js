export default class Store {
  constructor(name) {
    const { localStorage } = window;

    this.getLocalStorage = () => {
      const initialState = `{"items":[], "coins":{"500":0, "100":0, "50":0, "10":0}, "chargedAmount":0}`;

      return JSON.parse(localStorage.getItem(name) || initialState);
    };

    this.setLocalStorage = (state) => {
      localStorage.setItem(name, JSON.stringify(state));
    };
  }

  find(query, callback) {
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

  update(updatedItem) {
    const state = this.getLocalStorage();
    const result = state.items.findIndex((item) => item.id === updatedItem.id);

    if (result === -1) {
      return { success: false };
    }

    state.items[result] = updatedItem;
    this.setLocalStorage(state);
  }

  updateCoins(coins) {
    const state = this.getLocalStorage();

    state.coins = coins;
    this.setLocalStorage(state);
  }

  updateCharge(amount) {
    const state = this.getLocalStorage();

    state.chargedAmount = amount;
    this.setLocalStorage(state);
  }
}
