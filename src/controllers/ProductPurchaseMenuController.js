import ProductPurchaseMenuView from '../views/ProductPurchaseMenuView.js';
import ProductPurchaseMenuModel from '../models/ProductPurchaseMenuModel.js';

import Selector from '../constants/selector.js';
import { $ } from '../utils/dom.js';

class ProductPurchaseMenuController {
  constructor(currentMenu) {
    this.$productPurchaseMenuModel = new ProductPurchaseMenuModel();
    this.$productPurchaseMenuView = new ProductPurchaseMenuView();

    this.initAddEventListeners();
    if (currentMenu === Selector.productPurchaseMenuId) this.changeMenu();
  }

  initAddEventListeners() {
    $(`#${Selector.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  changeMenu() {
    this.$productPurchaseMenuView.render();
    this.$productPurchaseMenuView.renderProductTableBodyWithData(
      this.$productPurchaseMenuModel.getProductItems(),
    );
    // this.$productPurchaseMenuView.renderPurchaseChargeAmount(
    // 	this.$productPurchaseMenuModel
    // )
  }

  onClickTabContent(event) {
    const { id } = event.target;

    if (id === Selector.chargeButtonId) this.onClickChargeButton();
  }

  onClickChargeButton() {
    const charge = $(`#${Selector.chargeInputId}`).value;
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(charge);
    this.$productPurchaseMenuView.resetPurchaseChargeInput();
  }
}

export default ProductPurchaseMenuController;
