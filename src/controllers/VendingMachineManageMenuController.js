import VendingMachineManageMenuView from '../views/VendingMachineManageMenuView.js';
import VendingMachineManageMenuModel from '../models/VendingMachineManageMenuModel.js';
import VendingMachineManageMenuValidator from '../validators/vendingMachineManageMenu.js';
import { $ } from '../utils/dom.js';

import SELECTOR from '../constants/selector.js';

class VendingMachineManageMenuController {
  constructor(currentMenu) {
    this.$vendingMachineManageMenuView = new VendingMachineManageMenuView();
    this.$vendingMachineManageMenuModel = new VendingMachineManageMenuModel();

    this.initAddEventListeners();
    if (currentMenu === SELECTOR.vendingMachineManageMenuId) this.changeMenu();
  }

  initAddEventListeners() {
    $(`#${SELECTOR.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  changeMenu() {
    this.$vendingMachineManageMenuView.render();
    this.$vendingMachineManageMenuView.renderCoinQuantityTableBodyWithData(
      this.$vendingMachineManageMenuModel.getAmount500(),
      this.$vendingMachineManageMenuModel.getAmount100(),
      this.$vendingMachineManageMenuModel.getAmount50(),
      this.$vendingMachineManageMenuModel.getAmount10(),
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
    if (
      !VendingMachineManageMenuValidator.validateChargeInputExist(chargeAmount) ||
      !VendingMachineManageMenuValidator.validateChargeInputOverZero(chargeAmount) ||
      !VendingMachineManageMenuValidator.validateChargeInputDivideByTen(chargeAmount)
    )
      return;

    let remainChargeAmount = chargeAmount;

    while (remainChargeAmount > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
      if (randomCoin <= remainChargeAmount) {
        remainChargeAmount -= randomCoin;
        this.addCoinAmount(randomCoin);
      }
    }

    this.$vendingMachineManageMenuView.renderCoinQuantityTableBodyWithData(
      this.$vendingMachineManageMenuModel.getAmount500(),
      this.$vendingMachineManageMenuModel.getAmount100(),
      this.$vendingMachineManageMenuModel.getAmount50(),
      this.$vendingMachineManageMenuModel.getAmount10(),
    );

    this.$vendingMachineManageMenuModel.setChargeAmount(
      this.$vendingMachineManageMenuModel.getChargeAmount() + Number(chargeAmount),
    );
    this.$vendingMachineManageMenuView.renderCoinChargeAmountWithData(
      this.$vendingMachineManageMenuModel.getChargeAmount(),
    );
    this.$vendingMachineManageMenuView.resetChargeAmountInput();
  }

  addCoinAmount(coin) {
    if (coin === 500) this.add500CoinAmount();
    else if (coin === 100) this.add100CoinAmount();
    else if (coin === 50) this.add50CoinAmount();
    else if (coin === 10) this.add10CoinAmount();
  }

  add500CoinAmount() {
    const current500Amount = this.$vendingMachineManageMenuModel.getAmount500();
    this.$vendingMachineManageMenuModel.setAmount500(current500Amount + 1);
  }

  add100CoinAmount() {
    const current100Amount = this.$vendingMachineManageMenuModel.getAmount100();
    this.$vendingMachineManageMenuModel.setAmount100(current100Amount + 1);
  }

  add50CoinAmount() {
    const current50Amount = this.$vendingMachineManageMenuModel.getAmount50();
    this.$vendingMachineManageMenuModel.setAmount50(current50Amount + 1);
  }

  add10CoinAmount() {
    const current10Amount = this.$vendingMachineManageMenuModel.getAmount10();
    this.$vendingMachineManageMenuModel.setAmount10(current10Amount + 1);
  }
}

export default VendingMachineManageMenuController;
