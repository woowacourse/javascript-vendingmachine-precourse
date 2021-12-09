import ProductPurchaseTabView from './views/ProductPurchaseTabView.js';

export default class ProductPurchaseTab {
  constructor() {
    this.view = new ProductPurchaseTabView();
  }

  initialize() {
    this.view.render();
  }
}
