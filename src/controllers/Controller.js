import View from '../views/View.js';
import { $, default as DOM } from '../utils/DOMUtils.js';
import { default as DB } from '../model/database.js';
import ProductAddManager from './managers/ProductAddManager.js';
import VendingMachineChargeManager from './managers/VendingMachineChargeManager.js';
import ProductPurchaseManager from './managers/ProductPurchaseManager.js';
import { SELECTOR } from '../constants/selectors.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.checkLocalStorage();
    this.generateManagers();
    this.tabMenuManager();
  }

  checkLocalStorage() {
    DB.init('inventory');
    DB.init('vendingMachineCoins', { coin500: 0, coin100: 0, coin50: 0, coin10: 0 });
    DB.init('chargeToPurchaseProduct', 0);
  }

  generateManagers() {
    new ProductAddManager();
    new VendingMachineChargeManager();
    new ProductPurchaseManager();
  }

  tabMenuManager() {
    Array.from($(SELECTOR.TAB_MENU).children).forEach(menu => this.addClickEvent(menu));
  }

  addClickEvent(menu) {
    menu.addEventListener('click', this.handleMenuClick);
  }

  handleMenuClick(e) {
    e.preventDefault();

    DOM.showComponent(e.target.id);
  }
}
