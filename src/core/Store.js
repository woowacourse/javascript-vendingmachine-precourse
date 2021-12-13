let currentObserver = null;

export const storeObserver = (selector, cb) => {
  currentObserver = cb;
  selector();
  currentObserver = null;
};

export default class Store {
  constructor(state, storage) {
    this.storage = storage;
    this.state = storage.get() ?? state;
    this.reducer = {};
    this.observers = new Set();
    this.setUpReducer();
  }

  setUpReducer() {}

  dispatch({ type, data = null }) {
    return this.reducer[type](data);
  }

  getState() {
    if (currentObserver) {
      this.observers.add(currentObserver);
    }
    return this.state;
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.storage.set(this.state);
    this.observers.forEach(observer => observer());
  }
}
