import { DOM } from '../utils/constant.js';
import VendingMachineCharge from './VendingMachineCharge.js';

export default class SetVendingMachinePurchase {
  constructor(render, vendingMachine) {
    this.render = render;
    this.vendingMachine = vendingMachine;
    this.vendingMachineCharge = new VendingMachineCharge(this.render, DOM.$CHARGE_INPUT);
    this.$chargeInput = document.querySelector(DOM.$CHARGE_INPUT);

    this.setVendingMachineCharge();
  }

  getChargeinput = () => this.vendingMachine.setChargeInput(Number(this.$chargeInput.value));

  setVendingMachineCharge = () => {
    if (!this.vendingMachineCharge.isValidInput()) {
      return;
    }

    this.getChargeinput();
    this.vendingMachine.renderChargeInput();
  };
}
