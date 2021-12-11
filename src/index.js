import { STORAGE_KEY } from './constants.js';
import * as storage from './utils/storage.js';
import initializeContentComponent from './utils/initializeContentComponent.js';
import renderAppTemplate from './dom/renderAppTemplate.js';
import attachMenuTabEvent from './event/attachMenuTabEvent.js';
import VendingMachine from './VendingMachine.js';

renderAppTemplate();
const vendingMachine = new VendingMachine();
vendingMachine.initialize();
attachMenuTabEvent(vendingMachine);

const menu = storage.find(STORAGE_KEY.menu);
if (menu) {
  initializeContentComponent(menu, vendingMachine);
}
