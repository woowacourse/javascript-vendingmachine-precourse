export default class Store {
  constructor(name) {
    const { localStorage } = window;

    this.getLocalStorage = () => {
      const initialState = `{"items":[], "change":{"10":0, "50":0, "100":0, "500":0}}`;

      return JSON.parse(localStorage.getItem(name) || initialState);
    };

    this.setLocalStorage = (state) => {
      localStorage.setItem(name, JSON.stringify(state));
    };

    this.merge = (state, newState) => {
      return { ...state, ...newState };
    };
  }

  insert(key, item, callback) {
    const state = this.getLocalStorage();

    if (!Array.isArray(state[key])) {
      throw 'non array state';
    }

    state[key].push(item);
    this.setLocalStorage(state);

    if (callback) {
      callback();
    }
  }
}
