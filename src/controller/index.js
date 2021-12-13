import { SELECTOR } from '../model/constants.js';
import Vending from './vending.js';
import ProductAdd from './productAdd.js';
import { $ } from './utils.js';

export default class Controller {
  constructor(view) {
    this.view = view;
    this.addEventListeners(this.view);
    this.productAdd = new ProductAdd(this.view);
    this.vending = new Vending(this.view);
  }

  addEventListeners(view) {
    $(SELECTOR.addMenu).addEventListener('click', () => this.callAddMenu(view));
    $(SELECTOR.vendingMenu).addEventListener('click', () => this.callVendingMenu(view));
    $(SELECTOR.purchaseMenu).addEventListener('click', () => this.callPurchaseMenu(view));
  }

  callAddMenu(view) {
    view.showAddMenu();
    this.productAdd.init();
  }

  callVendingMenu(view) {
    view.showVendingMenu();
    this.vending.init();
  }

  callPurchaseMenu(view) {
    view.showPurchaseMenu();
  }
}
