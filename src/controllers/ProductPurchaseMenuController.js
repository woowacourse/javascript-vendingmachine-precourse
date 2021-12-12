import ProductPurchaseMenuView from '../views/ProductPurchaseMenuView.js';
import ProductPurchaseMenuModel from '../models/ProductPurchaseMenuModel.js';
import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import ProductPurchaseMenuValidator from '../validators/productPurchaseMenu.js';
import { $ } from '../utils/dom.js';

import Selector from '../constants/selector.js';

class ProductPurchaseMenuController {
  constructor(currentMenu) {
    this.$productPurchaseMenuModel = new ProductPurchaseMenuModel();
    this.$productPurchaseMenuView = new ProductPurchaseMenuView();
    this.$productAddMenuModel = new ProductAddMenuModel();

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
      this.$productAddMenuModel.getProductItems(),
    );
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(
      this.$productPurchaseMenuModel.getPurchaseChargeAmount(),
    );
  }

  onClickTabContent(event) {
    const { id, className } = event.target;

    if (id === Selector.chargeButtonId) {
      this.onClickChargeButton();
      return;
    }

    if (className === Selector.purchaseButtonClass) {
      this.onClickPurchaseButton(event);
    }
  }

  onClickChargeButton() {
    const charge = $(`#${Selector.chargeInputId}`).value;
    if (
      !ProductPurchaseMenuValidator.validateChargeExist(charge) ||
      !ProductPurchaseMenuValidator.validateChargePlusInteger(charge) ||
      !ProductPurchaseMenuValidator.validateChargeCanDivide10(charge)
    )
      return;

    const sumCharge = this.$productPurchaseMenuModel.getPurchaseChargeAmount() + Number(charge);
    this.$productPurchaseMenuModel.setPurchaseChargeAmount(sumCharge);
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(sumCharge);
    this.$productPurchaseMenuView.resetPurchaseChargeInput();
  }

  onClickPurchaseButton(event) {
    const tableDatas = event.target.closest('tr').getElementsByTagName('td');

    const purchaseName = tableDatas[0].dataset.productName;
    const purchasePrice = tableDatas[1].dataset.productPrice;
    const purchaseQuantity = tableDatas[2].dataset.productQuantity;

    const subtractPrice =
      this.$productPurchaseMenuModel.getPurchaseChargeAmount() - Number(purchasePrice);

    this.$productPurchaseMenuModel.setPurchaseChargeAmount(subtractPrice);
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(subtractPrice);
  }
}

export default ProductPurchaseMenuController;
