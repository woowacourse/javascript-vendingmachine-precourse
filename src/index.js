import renderAppTemplate from './renderAppTemplate.js';
import VendingMachine from './VendingMachine.js';
import attachMenuTabEvent from './attachMenuTabEvent.js';

renderAppTemplate();
const vendingMachine = new VendingMachine();
attachMenuTabEvent(vendingMachine);
