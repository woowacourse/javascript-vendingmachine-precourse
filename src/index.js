import VendingMachineController from './controllers/VendingMachineController.js';

class VendingMachine {
  constructor() {
    this.$vendingMachineController = new VendingMachineController();
  }
}

new VendingMachine();
