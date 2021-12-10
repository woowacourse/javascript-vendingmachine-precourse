import ProductPurchaseTabView from './views/ProductPurchaseTabView.js';
import { getProducts } from './utils/localStorage.js';

export default class ProductPurchaseTab {
  constructor() {
    this.view = new ProductPurchaseTabView();
  }

  initialize() {
    this.products = getProducts();
    this.view.render(this.products);
  }
}
