import View from '../views/View.js';
import { $ } from '../views/DOMUtils.js';
import ProductPurchaseMenu from './ProductPurchaseMenu.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.addEventListeners();
  }

  addEventListeners() {
    $('#product-purchase-menu').addEventListener('click', () => new ProductPurchaseMenu(this.view));
  }
}
