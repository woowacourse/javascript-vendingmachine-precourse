import VendingMachineSharedModel from '../models/vending-machine-shared-model.js';

class Observer {
  constructor(id) {
    this.id = id;
    this.model = new VendingMachineSharedModel();
  }

  getId() {
    return this.id;
  }

  registerObserver() {
    this.model.registerObserver(this);
  }

  unregisterObserver() {
    this.model.unregisterObserver(this);
  }

  notify() {}
}

export default Observer;
