import ProductAddTabView from './views/ProductAddTabView.js';

export default class ProductAddTab {
  constructor() {
    this.view = new ProductAddTabView();
  }

  initialize() {
    this.view.render();
  }
}
