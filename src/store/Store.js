export default class Store {
  constructor(name) {
    const { localStorage } = window;

    this.getLocalStorage = () => {
      const initialState = `{"items":[], "change":{"500":0, "100":0, "50":0, "10":0}}`;

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

  insert(item) {
    const state = this.getLocalStorage();

    state.items.push(item);
    this.setLocalStorage(state);
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

  updateChange(change) {
    const state = this.getLocalStorage();

    state.change = change;

    this.setLocalStorage(state);
  }
}
