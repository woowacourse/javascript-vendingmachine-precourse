import { SELECTOR } from '../model/constants.js';
import Model from '../model/index.js';
import VendingTab from './vendingTab.js';
import AddTab from './addTab.js';
import PurchaseTab from './purchaseTab.js';
import { $ } from './utils.js';

export default class Controller {
  constructor(view) {
    this.view = view;
    this.model = new Model();
    this.addTab = new AddTab(this.view, this.model);
    this.vendingTab = new VendingTab(this.view, this.model);
    this.purchaseTab = new PurchaseTab(this.view, this.model);
  }

  addEventListeners() {
    $(SELECTOR.addMenu).addEventListener('click', () => this.callAddTab());
    $(SELECTOR.vendingMenu).addEventListener('click', () => this.callVendingTab());
    $(SELECTOR.purchaseMenu).addEventListener('click', () => this.callPurchaseTab());
  }

  callAddTab() {
    this.view.showAddTab();
    this.addTab.init();
  }

  callVendingTab() {
    this.view.showVendingTab();
    this.vendingTab.init();
  }

  callPurchaseTab() {
    this.view.showPurchaseTab();
    this.purchaseTab.init();
  }
}
