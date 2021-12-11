import { DOM } from '../utils/constant.js';
import VendingMachineCharge from './VendingMachineCharge.js';

export default class SetVendingMachineCharge {
  constructor(render, coins) {
    this.render = render;
    this.coins = coins;
    this.vendingMachineCharge = new VendingMachineCharge(this.render, DOM.$VENDING_MACHINE_CHARGE_INPUT);
    this.vendingMachineChargeAmount = 0;
    this.coin10 = 0;
    this.coin50 = 0;
    this.coin100 = 0;
    this.coin500 = 0;

    this.setVendingMachine();
  }

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
  };
}
