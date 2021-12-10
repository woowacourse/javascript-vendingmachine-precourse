import GetRandomCoins from './GetRandomCoins.js';
import VendingMachineCharge from './VendingMachineCharge.js';

export default class SetVendingMachineCharge {
  constructor(render) {
    this.render = render;
    this.vendingMachineCharge = new VendingMachineCharge(this.render);
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
  };

  getRandomCoins = () => {
    const getRandomCoins = new GetRandomCoins(this.vendingMachineChargeAmount);
    [this.coin10, this.coin50, this.coin100, this.coin500] = Object.values(getRandomCoins.hash());
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
