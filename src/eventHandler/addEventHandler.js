import addProductHandler from './addProductHandler.js';
import addTabHandler from './addTabHandler.js';

export default function addEventHandler(vendingMachine) {
  addTabHandler();
  addProductHandler(vendingMachine);
}
