import ProductPurchaseTabView from './views/ProductPurchaseTabView.js';
import { getCharge, getProducts } from './utils/localStorage.js';

export default class ProductPurchaseTab {
  constructor() {
    this.view = new ProductPurchaseTabView();
  }

  initialize() {
    this.charge = getCharge();
    this.products = getProducts();
    this.view.render(this.charge, this.products);
  }
}
