class Observable {
  #observers = [];

  observe(callback) {
    this.#observers.push(callback);
  }

  notify() {
    this.#observers.forEach((callback) => {
      callback();
    });
  }
}

export default Observable;
