import VendingMachineCharge from './VendingMachineCharge.js';

export default class SetVendingMachineCharge {
  constructor(render) {
    this.render = render;
    this.vendingMachineCharge = new VendingMachineCharge(this.render);
    this.vendingMachineChargeAmount = 0;

    this.setVendingMachine();
  }

  renderVendingMachineChargeAmount = () => {
    this.render.vendingMachineChargeAmountTemplate(this.vendingMachineChargeAmount);
  };

  getVendingMachineChargeInput = () => {
    this.vendingMachineChargeAmount = this.vendingMachineCharge.getInput();
  };

  setVendingMachine = () => {
    if (!this.vendingMachineCharge.isValidInput()) {
      return;
    }
    this.getVendingMachineChargeInput();
    this.renderVendingMachineChargeAmount();
  };
}
