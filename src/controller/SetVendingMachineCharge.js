import { DOM, NUMBER } from '../utils/constant.js';
import VendingMachineCharge from '../model/VendingMachineCharge.js';

export default class SetVendingMachineCharge {
  constructor(render, coins) {
    this.render = render;
    this.coins = coins;
    this.vendingMachineCharge = new VendingMachineCharge(this.render, DOM.$VENDING_MACHINE_CHARGE_INPUT);
    this.vendingMachineChargeAmount = NUMBER.ZERO;
    this.coin10 = NUMBER.ZERO;
    this.coin50 = NUMBER.ZERO;
    this.coin100 = NUMBER.ZERO;
    this.coin500 = NUMBER.ZERO;

    this.setVendingMachine();
  }

  initializeInput = () => {
    const $vendingMachineChargeInput = document.querySelector(DOM.$VENDING_MACHINE_CHARGE_INPUT);
    $vendingMachineChargeInput.value = '';
    $vendingMachineChargeInput.focus();
  };

  renderVendingMachineChargeAmount = () => {
    this.render.vendingMachineChargeAmountTemplate(this.vendingMachineChargeAmount);
  };

  renderVendingMachineChargeTable = () => {
    this.render.vendingMachineChargeTableTemplate(this.coin10, this.coin50, this.coin100, this.coin500);
  };

  getVendingMachineChargeInput = () => {
    this.vendingMachineChargeAmount = this.vendingMachineCharge.getInput();
    this.coins.setCoinAmount(this.vendingMachineChargeAmount);
    this.vendingMachineChargeAmount = this.coins.getCoinAmount();
  };

  getRandomCoins = () => {
    [this.coin10, this.coin50, this.coin100, this.coin500] = this.coins.getCoins();
  };

  setVendingMachine = () => {
    if (!this.vendingMachineCharge.isValidInput()) {
      return;
    }

    this.getVendingMachineChargeInput();
    this.renderVendingMachineChargeAmount();
    this.getRandomCoins();
    this.renderVendingMachineChargeTable();
    this.initializeInput();
  };
}
