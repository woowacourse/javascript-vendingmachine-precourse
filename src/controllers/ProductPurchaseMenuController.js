import ProductPurchaseMenuView from '../views/ProductPurchaseMenuView.js';
import ProductPurchaseMenuModel from '../models/ProductPurchaseMenuModel.js';
import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import VendingMachineManageMenuModel from '../models/VendingMachineManageMenuModel.js';
import VendingMachineManageMenuValidator from '../validators/vendingMachineManageMenu.js';
import ProductPurchaseMenuValidator from '../validators/productPurchaseMenu.js';
import { $ } from '../utils/dom.js';

import SELECTOR from '../constants/selector.js';
import { COIN_500, COIN_100, COIN_50, COIN_10, COIN_LIST } from '../constants/common.js';

class ProductPurchaseMenuController {
  constructor(currentMenu) {
    this.$productPurchaseMenuModel = new ProductPurchaseMenuModel();
    this.$productPurchaseMenuView = new ProductPurchaseMenuView();
    this.$productAddMenuModel = new ProductAddMenuModel();
    this.$vendingMachineManageMenuModel = new VendingMachineManageMenuModel();

    this.initAddEventListeners();
    if (currentMenu === SELECTOR.productPurchaseMenuId) this.renderMenuWithData();
  }

  initAddEventListeners() {
    $(`#${SELECTOR.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  renderMenuWithData() {
    this.$productPurchaseMenuView.render();
    this.$productPurchaseMenuView.renderProductTableBodyWithData(
      this.$productAddMenuModel.getProductItems(),
    );
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(
      this.$productPurchaseMenuModel.getPurchaseChargeAmount(),
    );
    this.$productPurchaseMenuView.renderReturnCoinTableWithData(
      this.$productPurchaseMenuModel.getReturnCoinQuantity(COIN_500),
      this.$productPurchaseMenuModel.getReturnCoinQuantity(COIN_100),
      this.$productPurchaseMenuModel.getReturnCoinQuantity(COIN_50),
      this.$productPurchaseMenuModel.getReturnCoinQuantity(COIN_10),
    );
  }

  onClickTabContent(event) {
    const { id, className } = event.target;

    if (id === SELECTOR.chargeButtonId) {
      this.onClickChargeButton();
      return;
    }

    if (id === SELECTOR.coinReturnButtonId) {
      this.onClickReturnCoinButton();
      return;
    }

    if (className === SELECTOR.purchaseButtonClass) this.onClickPurchaseButton(event);
  }

  onClickChargeButton() {
    const charge = $(`#${SELECTOR.chargeInputId}`).value;
    if (!this.validatePurchaseCharge(charge)) return;

    this.addPurchaseCharge(charge);
  }

  validatePurchaseCharge(charge) {
    if (!ProductPurchaseMenuValidator.validateChargeExist(charge)) return false;
    if (!ProductPurchaseMenuValidator.validateChargePlusInteger(charge)) return false;
    if (!ProductPurchaseMenuValidator.validateChargeCanDivide10(charge)) return false;
    return true;
  }

  addPurchaseCharge(charge) {
    const addedCharge = this.$productPurchaseMenuModel.getAddedPurchaseCharge(Number(charge));
    this.$productPurchaseMenuModel.setPurchaseChargeAmount(addedCharge);
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(addedCharge);
    this.$productPurchaseMenuView.resetPurchaseChargeInput();
  }

  onClickReturnCoinButton() {
    const purchaseChargeAmount = this.$productPurchaseMenuModel.getPurchaseChargeAmount();
    if (!this.validatePossibleReturnCoin(purchaseChargeAmount)) return;

    const [newPurchaseChargeAmount, newReturnAmount] = this.returnCoins();
    this.renderAndSaveWithNewAmountData(newPurchaseChargeAmount, newReturnAmount);
  }

  returnCoins() {
    let purchaseChargeAmount = this.$productPurchaseMenuModel.getPurchaseChargeAmount();
    let returnAmount = 0;

    COIN_LIST.forEach(coin => {
      [purchaseChargeAmount, returnAmount] = this.returnCoinWithAmountData(
        coin,
        purchaseChargeAmount,
        returnAmount,
      );
    });

    return [purchaseChargeAmount, returnAmount];
  }

  returnCoinWithAmountData(coin, purchaseChargeAmount, returnAmount) {
    let changePurchaseCharge = purchaseChargeAmount;
    let changeReturnAmount = returnAmount;

    while (
      changePurchaseCharge >= coin &&
      this.$vendingMachineManageMenuModel.getCoinQuantity(coin) > 0
    ) {
      changePurchaseCharge -= coin;
      changeReturnAmount += coin;
      this.$vendingMachineManageMenuModel.setMinusOneCoinQuantity(coin);
      this.$productPurchaseMenuModel.setPlusOneReturnCoinQuantity(coin);
    }

    return [changePurchaseCharge, changeReturnAmount];
  }

  validatePossibleReturnCoin(purchaseCharge) {
    if (!ProductPurchaseMenuValidator.validatePossibleReturn(purchaseCharge)) return false;
    if (
      !VendingMachineManageMenuValidator.validateChargeOverZero(
        this.$vendingMachineManageMenuModel.getChargeAmount(),
      )
    )
      return false;

    return true;
  }

  renderAndSaveWithNewAmountData(purchaseChargeAmount, returnAmount) {
    this.$productPurchaseMenuModel.setPurchaseChargeAmount(purchaseChargeAmount);
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(purchaseChargeAmount);
    this.$vendingMachineManageMenuModel.setChargeAmount(
      this.$vendingMachineManageMenuModel.getChargeAmount() - returnAmount,
    );
    this.$productPurchaseMenuView.renderReturnCoinTableWithData(
      this.$productPurchaseMenuModel.getReturnCoinQuantity(COIN_500),
      this.$productPurchaseMenuModel.getReturnCoinQuantity(COIN_100),
      this.$productPurchaseMenuModel.getReturnCoinQuantity(COIN_50),
      this.$productPurchaseMenuModel.getReturnCoinQuantity(COIN_10),
    );
  }

  onClickPurchaseButton(event) {
    const tableDatas = event.target.closest('tr').getElementsByTagName('td');
    const selectName = tableDatas[0].dataset.productName;
    const selectPrice = tableDatas[1].dataset.productPrice;
    const selectQuantity = tableDatas[2].dataset.productQuantity;

    if (!this.subtractPriceFromChargeAmount(selectPrice)) return;

    const selectItemIndex = this.findSelectProductItemIndex(
      selectName,
      selectPrice,
      selectQuantity,
    );
    this.minusOneProductQuantity(selectItemIndex);
  }

  subtractPriceFromChargeAmount(selectPrice) {
    const subtractPrice =
      this.$productPurchaseMenuModel.getPurchaseChargeAmount() - Number(selectPrice);
    console.log(subtractPrice);
    if (!ProductPurchaseMenuValidator.validateSubtractPricePlus(subtractPrice)) return false;

    this.$productPurchaseMenuModel.setPurchaseChargeAmount(subtractPrice);
    this.$productPurchaseMenuView.renderPurchaseChargeAmount(subtractPrice);
    return true;
  }

  findSelectProductItemIndex(name, price, quantity) {
    const productItems = this.$productAddMenuModel.getProductItems();
    return productItems.findIndex(
      item =>
        item.productName === name &&
        item.productPrice === price &&
        item.productQuantity === quantity,
    );
  }

  minusOneProductQuantity(selectItemIndex) {
    const productItems = this.$productAddMenuModel.getProductItems();
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
