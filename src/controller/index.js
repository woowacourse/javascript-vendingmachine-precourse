import { SELECTOR } from '../model/constants.js';
import { $ } from './utils.js';

export default class Controller {
  constructor(view) {
    this.view = view;
    this.addAllEventListener();
  }

  addAllEventListener() {
    $(SELECTOR.addMenu).addEventListener('click', () => this.view.drawAddMenu(this.view));
    $(SELECTOR.vendingMenu).addEventListener('click', () => this.view.drawVendingMenu(this.view));
    $(SELECTOR.purchaseMenu).addEventListener('click', () => this.view.drawPurchaseMenu(this.view));
  }
}
