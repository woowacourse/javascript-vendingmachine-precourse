class Observable {
  constructor() {
    this.observers = [];
  }

  notifyAll() {
    this.observers.forEach((observer) => {
      if (observer === undefined) {
        return;
      }
      observer.notify();
    });
  }

  registerObserver(observer) {
    this.observers.filter((_observer) => {
      return _observer.getId() !== observer.getId();
    });
    this.observers = [...this.observers, observer];
  }

  unregisterObserver({ id }) {
    this.observers = this.observers.filter((_observer) => {
      return _observer.getId() !== id;
    });
  }
}

export default Observable;
