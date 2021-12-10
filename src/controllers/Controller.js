import View from '../views/View.js';
import { $, default as DOM } from '../views/DOMUtils.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.tabMenuManager();
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
