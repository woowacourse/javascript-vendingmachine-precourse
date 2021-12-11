import Storage from './Storage.js';
import ProductAddTab from './controllers/ProductAddTab.js';
import ProductPurchaseTab from './controllers/ProductPurchaseTab.js';
import VendingMachineManageTab from './controllers/VendingMachineManageTab.js';
import VendingMachineView from './views/VendingMachineView.js';

export default class VendingMachine {
  constructor() {
    this.view = new VendingMachineView();
    this.storage = new Storage();
  }

  initialize() {
    this.view.render();
    this.initTab();
    this.setMenuClickEvent();
  }

  initTab() {
    this.productAddTab = new ProductAddTab(this.storage);
    this.vendingMachineManageTab = new VendingMachineManageTab(this.storage);
    this.productPurchaseTab = new ProductPurchaseTab(this.storage);
  }

  setMenuClickEvent() {
    this.view.productAddMenuButton.addEventListener('click', () => { this.productAddTab.initialize(); });
    this.view.vendingMachineManageMenuButton.addEventListener('click', () => { this.vendingMachineManageTab.initialize(); });
    this.view.productPurchaseMenuButton.addEventListener('click', () => { this.productPurchaseTab.initialize(); });
  }
}
