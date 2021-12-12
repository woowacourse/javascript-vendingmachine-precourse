import VendingMachineManageMenuView from '../views/VendingMachineManageMenuView.js';
import VendingMachineManageMenuModel from '../models/VendingMachineManageMenuModel.js';
import VendingMachineManageMenuValidator from '../validators/vendingMachineManageMenu.js';
import { $ } from '../utils/dom.js';
import { pickRandomCoin } from '../utils/index.js';

import SELECTOR from '../constants/selector.js';
import { COIN_500, COIN_100, COIN_50, COIN_10 } from '../constants/common.js';

class VendingMachineManageMenuController {
  constructor(currentMenu) {
    this.$vendingMachineManageMenuView = new VendingMachineManageMenuView();
    this.$vendingMachineManageMenuModel = new VendingMachineManageMenuModel();

    this.initAddEventListeners();
    if (currentMenu === SELECTOR.vendingMachineManageMenuId) this.renderMenuWithData();
  }

  initAddEventListeners() {
    $(`#${SELECTOR.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  renderMenuWithData() {
    this.$vendingMachineManageMenuView.render();
    this.$vendingMachineManageMenuView.renderCoinQuantityTableBodyWithData(
      this.$vendingMachineManageMenuModel.getCoinQuantity(COIN_500),
      this.$vendingMachineManageMenuModel.getCoinQuantity(COIN_100),
      this.$vendingMachineManageMenuModel.getCoinQuantity(COIN_50),
      this.$vendingMachineManageMenuModel.getCoinQuantity(COIN_10),
    );
    this.$vendingMachineManageMenuView.renderCoinChargeAmountWithData(
      this.$vendingMachineManageMenuModel.getChargeAmount(),
    );
  }

  onClickTabContent(event) {
    const { id } = event.target;

    if (id === SELECTOR.vendingMachineChargeButtonId) this.onClickVendingMachineChargeButton();
  }

  onClickVendingMachineChargeButton() {
    const chargeAmount = $(`#${SELECTOR.vendingMachineChargeInputId}`).value;
    if (!this.validateChargeAmount(chargeAmount)) return;

    this.calculateRandomCoinQuantity(chargeAmount);
    this.changeVendingMachineChargeAmount(chargeAmount);
    this.$vendingMachineManageMenuView.resetChargeAmountInput();
    this.renderMenuWithData();
  }

  validateChargeAmount(chargeAmount) {
    if (!VendingMachineManageMenuValidator.validateChargeInputExist(chargeAmount)) return false;
    if (!VendingMachineManageMenuValidator.validateChargeInputOverZero(chargeAmount)) return false;
    if (!VendingMachineManageMenuValidator.validateChargeInputDivideByTen(chargeAmount))
      return false;

    return true;
  }

  calculateRandomCoinQuantity(chargeAmount) {
    let remainChargeAmount = chargeAmount;

    while (remainChargeAmount > 0) {
      const randomCoin = pickRandomCoin();
      if (randomCoin <= remainChargeAmount) {
        remainChargeAmount -= randomCoin;
        this.$vendingMachineManageMenuModel.setPlusOneCoinQuantity(randomCoin);
      }
    }
  }

  changeVendingMachineChargeAmount(chargeAmount) {
    this.$vendingMachineManageMenuModel.setChargeAmount(
      this.$vendingMachineManageMenuModel.getChargeAmount() + Number(chargeAmount),
    );
  }
}

export default VendingMachineManageMenuController;
