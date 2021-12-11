import ProductPurchaseMenuView from '../views/ProductPurchaseMenuView.js';
import ProductPurchaseMenuModel from '../models/ProductPurchaseMenuModel.js';

class ProductPurchaseMenuController {
  constructor() {
    this.$productPurchaseMenuModel = new ProductPurchaseMenuModel();
    this.$productPurchaseMenuView = new ProductPurchaseMenuView();

    this.initAddEventListeners();
  }

  initAddEventListeners() {}
}

export default ProductPurchaseMenuController;
