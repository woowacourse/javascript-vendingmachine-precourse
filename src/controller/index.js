import { SELECTOR } from '../model/constants.js';
import Vending from './vending.js';
import ProductAdd from './productAdd.js';
import Purchase from './purchase.js';
import { $ } from './utils.js';

export default class Controller {
  constructor(view) {
    this.view = view;
    this.productAdd = new ProductAdd(this.view);
    this.vending = new Vending(this.view);
    this.purchase = new Purchase(this.view);
  }

  addEventListeners() {
    $(SELECTOR.addMenu).addEventListener('click', () => this.callAddMenu());
    $(SELECTOR.vendingMenu).addEventListener('click', () => this.callVendingMenu());
    $(SELECTOR.purchaseMenu).addEventListener('click', () => this.callPurchaseMenu());
  }

  callAddMenu() {
    this.view.showAddMenu();
    this.productAdd.init();
  }

  callVendingMenu() {
    this.view.showVendingMenu();
    this.vending.init();
  }

  callPurchaseMenu() {
    this.view.showPurchaseMenu();
    this.purchase.init();
  }
}
