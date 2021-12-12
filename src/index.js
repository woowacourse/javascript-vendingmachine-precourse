import VendingMachine from './vendingMachine/VendingMachine.js';
import addTabHandler from './eventHandler/addTabHandler.js';
import renderAppHeader from './view/renderAppHeader.js';
import renderCurrentTab from './view/renderCurrentTab.js';

function initVendingMachine() {
  renderAppHeader();
  const vendingMachine = new VendingMachine();
  renderCurrentTab(vendingMachine);
  addTabHandler(vendingMachine);
}

initVendingMachine();
