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
    this.observers = [...this.observers, observer];
  }

  unregisterObserver({ id }) {
    const observers = this.observers.filter((_observer) => {
      return _observer.getId() !== id;
    });
    this.observers = [...observers];
  }
}

export default Observable;
