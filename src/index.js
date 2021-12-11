import { STORAGE_KEY } from './constants.js';
import renderAppTemplate from './renderAppTemplate.js';
import VendingMachine from './VendingMachine.js';
import attachMenuTabEvent from './attachMenuTabEvent.js';
import initializeContentComponent from './initializeContentComponent.js';
import * as storage from './storage.js';

renderAppTemplate();
const vendingMachine = new VendingMachine();
vendingMachine.initialize();
attachMenuTabEvent(vendingMachine);

const menu = storage.find(STORAGE_KEY.menu);
if (menu) {
  initializeContentComponent(menu, vendingMachine);
}
