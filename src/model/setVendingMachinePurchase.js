import { DOM } from '../utils/constant.js';
import VendingMachineCharge from './VendingMachineCharge.js';

export default class VendingMachinePurchase {
  constructor(render) {
    this.render = render;
    this.vendingMachineCharge = new VendingMachineCharge(this.render, DOM.$CHARGE_INPUT);

    this.setVendingMachineCharge();
  }

  setVendingMachineCharge = () => {
    this.vendingMachineCharge.isValidInput();
  };
}
