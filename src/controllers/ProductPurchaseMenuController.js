import ProductPurchaseMenuView from '../views/ProductPurchaseMenuView.js';
import ProductPurchaseMenuModel from '../models/ProductPurchaseMenuModel.js';
import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import VendingMachineManageMenuModel from '../models/VendingMachineManageMenuModel.js';
import ProductPurchaseMenuValidator from '../validators/productPurchaseMenu.js';
import { $ } from '../utils/dom.js';

import Selector from '../constants/selector.js';

class ProductPurchaseMenuController {
  constructor(currentMenu) {
    this.$productPurchaseMenuModel = new ProductPurchaseMenuModel();
    this.$productPurchaseMenuView = new ProductPurchaseMenuView();
    this.$productAddMenuModel = new ProductAddMenuModel();
    this.$vendingMachineManageMenuModel = new VendingMachineManageMenuModel();

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
    this.$productPurchaseMenuView.renderReturnCoinTableWithData(
      this.$productPurchaseMenuModel.getReturn500CoinQuantity(),
      this.$productPurchaseMenuModel.getReturn100CoinQuantity(),
      this.$productPurchaseMenuModel.getReturn50CoinQuantity(),
      this.$productPurchaseMenuModel.getReturn10CoinQuantity(),
    );
  }

  onClickTabContent(event) {
    const { id, className } = event.target;

    if (id === Selector.chargeButtonId) {
      this.onClickChargeButton();
      return;
    }

    if (id === Selector.coinReturnButtonId) {
      this.onClickReturnCoinButton();
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

  onClickReturnCoinButton() {
    let purchaseCharge = this.$productPurchaseMenuModel.getPurchaseChargeAmount();
    let returnAmount = 0;

    while (purchaseCharge >= 500 && this.$vendingMachineManageMenuModel.getAmount500() > 0) {
      purchaseCharge -= 500;
      returnAmount += 500;

      this.$vendingMachineManageMenuModel.setAmount500(
        this.$vendingMachineManageMenuModel.getAmount500() - 1,
      );
      this.$productPurchaseMenuModel.setReturn500CoinQuantity(
        this.$productPurchaseMenuModel.getReturn500CoinQuantity() + 1,
      );
    }

    while (purchaseCharge >= 100 && this.$vendingMachineManageMenuModel.getAmount100() > 0) {
      purchaseCharge -= 100;
      returnAmount += 100;

      this.$vendingMachineManageMenuModel.setAmount100(
        this.$vendingMachineManageMenuModel.getAmount100() - 1,
      );
      this.$productPurchaseMenuModel.setReturn100CoinQuantity(
        this.$productPurchaseMenuModel.getReturn100CoinQuantity() + 1,
      );
    }

    while (purchaseCharge >= 50 && this.$vendingMachineManageMenuModel.getAmount50() > 0) {
      purchaseCharge -= 50;
      returnAmount += 50;

      this.$vendingMachineManageMenuModel.setAmount50(
        this.$vendingMachineManageMenuModel.getAmount50() - 1,
      );
      this.$productPurchaseMenuModel.setReturn50CoinQuantity(
        this.$productPurchaseMenuModel.getReturn50CoinQuantity() + 1,
      );
    }

    while (purchaseCharge >= 10 && this.$vendingMachineManageMenuModel.getAmount10() > 0) {
      purchaseCharge -= 10;
      returnAmount += 10;

      this.$vendingMachineManageMenuModel.setAmount10(
        this.$vendingMachineManageMenuModel.getAmount10() - 1,
      );
      this.$productPurchaseMenuModel.setReturn10CoinQuantity(
        this.$productPurchaseMenuModel.getReturn10CoinQuantity() + 1,
      );
    }

    this.$productPurchaseMenuView.renderPurchaseChargeAmount(purchaseCharge);
    this.$productPurchaseMenuModel.setPurchaseChargeAmount(purchaseCharge);
    this.$vendingMachineManageMenuModel.setChargeAmount(
      this.$vendingMachineManageMenuModel.getChargeAmount() - returnAmount,
    );
    this.$productPurchaseMenuView.renderReturnCoinTableWithData(
      this.$productPurchaseMenuModel.getReturn500CoinQuantity(),
      this.$productPurchaseMenuModel.getReturn100CoinQuantity(),
      this.$productPurchaseMenuModel.getReturn50CoinQuantity(),
      this.$productPurchaseMenuModel.getReturn10CoinQuantity(),
    );
  }

  onClickPurchaseButton(event) {
    const tableDatas = event.target.closest('tr').getElementsByTagName('td');

    const purchaseName = tableDatas[0].dataset.productName;
    const purchasePrice = tableDatas[1].dataset.productPrice;
    const purchaseQuantity = tableDatas[2].dataset.productQuantity;

    const subtractPrice =
      this.$productPurchaseMenuModel.getPurchaseChargeAmount() - Number(purchasePrice);

    if (!ProductPurchaseMenuValidator.validateSubtractPricePlus(subtractPrice)) return;

    this.$productPurchaseMenuModel.setPurchaseChargeAmount(subtractPrice);
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(subtractPrice);

    const productItems = this.$productAddMenuModel.getProductItems();

    const selectItemIndex = productItems.findIndex(
      item =>
        item.productName === purchaseName &&
        item.productQuantity === purchaseQuantity &&
        item.productPrice === purchasePrice,
    );

    productItems[selectItemIndex].productQuantity = String(
      productItems[selectItemIndex].productQuantity - 1,
    );

    if (Number(productItems[selectItemIndex].productQuantity) <= 0) {
      productItems.splice(selectItemIndex, 1);
    }

    this.$productAddMenuModel.setProductItems(productItems);

    this.$productPurchaseMenuView.renderProductTableBodyWithData(productItems);
  }
}

export default ProductPurchaseMenuController;
