import addProductHandler from './addProductHandler.js';
import addTabHandler from './addTabHandler.js';
import chargeHandler from './chargeHandler.js';

export default function addEventHandler(vendingMachine) {
  addTabHandler();
  addProductHandler(vendingMachine);
  chargeHandler(vendingMachine);
}
