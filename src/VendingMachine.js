import ProductAddTab from './ProductAddTab.js';
import ProductPurchaseTab from './ProductPurchaseTab.js';
import VendingMachineManageTab from './VendingMachineManageTab.js';
import VendingMachineView from './views/VendingMachineView.js';

export default class VendingMachine {
  constructor() {
    this.view = new VendingMachineView();
  }

  initialize() {
    this.view.render();
    this.initTab();
    this.setMenuClickEvent();
  }

  initTab() {
    this.productAddTab = new ProductAddTab();
    this.vendingMachineManageTab = new VendingMachineManageTab();
    this.productPurchaseTab = new ProductPurchaseTab();
  }

  setMenuClickEvent() {
    this.view.productAddMenuButton.addEventListener('click', () => { this.productAddTab.initialize(); });
    this.view.vendingMachineManageMenuButton.addEventListener('click', () => { this.vendingMachineManageTab.initialize(); });
    this.view.productPurchaseMenuButton.addEventListener('click', () => { this.productPurchaseTab.initialize(); });
  }
}
