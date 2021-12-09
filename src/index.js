import VendingMachine from './vendingMachine/VendingMachine.js';
import addEventHandler from './eventHandler/addEventHandler.js';

function initVendingMachine() {
  const vendingMachine = new VendingMachine();
  addEventHandler(vendingMachine);
}

initVendingMachine();
