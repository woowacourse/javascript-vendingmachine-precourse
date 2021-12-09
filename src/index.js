import { createVendingMachineHeader, createTabButtons } from './view/common.js';

class VendingMachine {
  constructor() {
    createVendingMachineHeader();
    createTabButtons();
  }
}

new VendingMachine();
