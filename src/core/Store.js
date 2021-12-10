let currentObserver = null;

export const storeObserver = (selector, cb) => {
  currentObserver = cb;
  selector();
  currentObserver = null;
};

export default class Store {
  constructor(state) {
    this.state = state;
    this.reducer = {};
    this.observers = new Set();
  }

  dispatch({ type, data = null, error = null }) {
    this.reducer[type]({ data, error });
  }

  getState() {
    if (currentObserver) {
      this.observers.add(currentObserver);
    }
    return this.state;
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.observers.forEach(observer => observer());
  }
}
