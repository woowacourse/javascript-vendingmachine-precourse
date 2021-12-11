import ProductPurchaseMenuView from '../views/ProductPurchaseMenuView.js';
import ProductPurchaseMenuModel from '../models/ProductPurchaseMenuModel.js';

import Selector from '../constants/selector.js';

class ProductPurchaseMenuController {
  constructor(currentMenu) {
    this.$productPurchaseMenuModel = new ProductPurchaseMenuModel();
    this.$productPurchaseMenuView = new ProductPurchaseMenuView();

    this.initAddEventListeners();
    if (currentMenu === Selector.productPurchaseMenuId) this.changeMenu();
  }

  initAddEventListeners() {}

  changeMenu() {
    this.$productPurchaseMenuView.render();
    this.$productPurchaseMenuView.renderProductTableBodyWithData(
      this.$productPurchaseMenuModel.getProductItems(),
    );
  }
}

export default ProductPurchaseMenuController;
