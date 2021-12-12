import ProductPurchaseMenuView from '../views/ProductPurchaseMenuView.js';
import ProductPurchaseMenuModel from '../models/ProductPurchaseMenuModel.js';
import ProductPurchaseMenuValidator from '../validators/productPurchaseMenu.js';
import { $ } from '../utils/dom.js';

import Selector from '../constants/selector.js';

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
  }

  onClickTabContent(event) {
    const { id } = event.target;

    if (id === Selector.chargeButtonId) this.onClickChargeButton();
  }

  onClickChargeButton() {
    const charge = $(`#${Selector.chargeInputId}`).value;
    if (
      !ProductPurchaseMenuValidator.validateChargeExist(charge) ||
      !ProductPurchaseMenuValidator.validateChargePlusInteger(charge) ||
      !ProductPurchaseMenuValidator.validateChargeCanDivide10(charge)
    )
      return;

    this.$productPurchaseMenuView.renderPurchaseChargeAmount(charge);
    this.$productPurchaseMenuView.resetPurchaseChargeInput();
  }
}

export default ProductPurchaseMenuController;
