import { DOM, TEMPLATE } from '../utils/constant.js';
import ValidationInputCoin from '../model/ValidationInputCoin.js';

export default class SetVendingMachinePurchase {
  constructor(render, vendingMachine) {
    this.render = render;
    this.vendingMachine = vendingMachine;
    this.validationInputCoin = new ValidationInputCoin(this.render, DOM.$CHARGE_INPUT);
    this.$chargeInput = document.querySelector(DOM.$CHARGE_INPUT);
  }

  initializeInput = () => {
    const $chargeInput = document.querySelector(DOM.$CHARGE_INPUT);
    $chargeInput.value = '';
    $chargeInput.focus();
  };

  renderChargeInput = () => {
    this.render.chargeInputTemplate(TEMPLATE.CHARGE_INPUT(this.getTotalChargeAmount()));
  };

  getTotalChargeAmount = () => this.vendingMachine.getChargeAmount();

  setChargeInput = () => {
    this.vendingMachine.setChargeAmount(Number(this.$chargeInput.value));
  };

  setVendingMachineCharge = () => {
    if (!this.validationInputCoin.isValidInput()) {
      return;
    }

    this.setChargeInput();
    this.renderChargeInput();
    this.initializeInput();
  };
}
