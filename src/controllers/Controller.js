import View from '../views/View.js';
import { $, default as DOM } from '../views/DOMUtils.js';
import ProductAddManager from './ProductAddManager.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.generateManagers();
    this.tabMenuManager();
  }

  generateManagers() {
    new ProductAddManager();
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
