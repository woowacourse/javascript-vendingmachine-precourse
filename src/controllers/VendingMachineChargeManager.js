import { $, default as DOM } from '../views/DOMUtils.js';
import { default as V } from '../utils/validators.js';
import convertChargeIntoCoin from './utils/convertChargeIntoCoin.js';

export default class VendingMachineChargeManager {
  constructor() {
    this.render();
    this.manage();
  }

  render() {
    DOM.showVendingMachineCharge();
    DOM.showVendingMachineCoins();
  }

  manage() {
    $('#vending-machine-charge-button').addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidCharge(DOM.getCharge().vendingMachine)) return;

      convertChargeIntoCoin(DOM.getCharge().vendingMachine);

      this.render();
    });
  }
}
