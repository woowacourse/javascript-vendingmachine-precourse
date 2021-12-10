import View from '../views/View.js';
import { $, default as DOM } from '../views/DOMUtils.js';
import { default as DB } from '../model/database.js';
import ProductAddManager from './ProductAddManager.js';
import VendingMachineChargeManager from './VendingMachineChargeManager.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.checkLocalStorage();
    this.generateManagers();
    this.tabMenuManager();
  }

  checkLocalStorage() {
    DB.init('inventory');
    DB.init('vendingMachineCharge', { coin500: 0, coin100: 0, coin50: 0, coin10: 0 });
  }

  generateManagers() {
    new ProductAddManager();
    new VendingMachineChargeManager();
  }

  tabMenuManager() {
    Array.from($('#tab-menu').children).forEach(menu => this.addClickEvent(menu));
  }

  addClickEvent(menu) {
    menu.addEventListener('click', this.handleMenuClick);
  }

  handleMenuClick(e) {
    e.preventDefault();

    DOM.showComponent(e.target.id);
  }
}
