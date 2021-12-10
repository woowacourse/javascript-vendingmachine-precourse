import VendingMachineCharge from './VendingMachineCharge.js';

export default class SetVendingMachineCharge {
  constructor(render) {
    this.render = render;
    this.vendingMachineCharge = new VendingMachineCharge(this.render);

    this.setVendingMachine();
  }

  setVendingMachine = () => {
    console.log(this.vendingMachineCharge.isValidInputs());
  };
}
