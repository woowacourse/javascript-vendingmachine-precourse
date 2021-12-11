import { DOM, TEMPLATE } from '../utils/constant.js';
import VendingMachineCharge from './VendingMachineCharge.js';

export default class SetVendingMachinePurchase {
  constructor(render, vendingMachine) {
    this.render = render;
    this.vendingMachine = vendingMachine;
    this.vendingMachineCharge = new VendingMachineCharge(this.render, DOM.$CHARGE_INPUT);
    this.$chargeInput = document.querySelector(DOM.$CHARGE_INPUT);

    this.setVendingMachineCharge();
  }

  renderChargeInput = () => {
    this.render.chargeInputTemplate(TEMPLATE.CHARGE_INPUT(this.getTotalChargeAmount()));
  };

  getTotalChargeAmount = () => this.vendingMachine.getChargeAmount();

  setChargeInput = () => {
    this.vendingMachine.setChargeAmount(Number(this.$chargeInput.value));
  };

  setVendingMachineCharge = () => {
    if (!this.vendingMachineCharge.isValidInput()) {
      return;
    }

    this.setChargeInput();
    this.renderChargeInput();
  };
}
