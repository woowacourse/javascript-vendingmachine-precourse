import { SELECTOR } from '../model/constants.js';
import ProductAdd from './productAdd.js';
import { $ } from './utils.js';

export default class Controller {
  constructor(view) {
    this.view = view;
    this.addEventListeners(this.view);
    this.productAdd = new ProductAdd(this.view);
  }

  addEventListeners(view) {
    $(SELECTOR.addMenu).addEventListener('click', () => this.callAddMenu(view));
    $(SELECTOR.vendingMenu).addEventListener('click', () => this.allVendingMenu(view));
    $(SELECTOR.purchaseMenu).addEventListener('click', () => this.callPurchaseMenu(view));
  }

  callAddMenu(view) {
    view.showAddMenu();
  }

  callVendingMenu(view) {
    view.showVendingMenu();
  }

  callPurchaseMenu(view) {
    view.showPurchaseMenu();
  }
}
