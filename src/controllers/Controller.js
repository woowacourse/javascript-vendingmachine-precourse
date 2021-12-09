import View from '../views/View.js';
import { $ } from '../views/DOMUtils.js';
import ProductAddMenu from './ProductAddMenu.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.addEventListeners();
  }

  addEventListeners() {
    $('#product-add-menu').addEventListener('click', () => new ProductAddMenu(this.view));
  }
}
