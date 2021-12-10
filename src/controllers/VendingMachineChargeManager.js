import { $, default as DOM } from '../views/DOMUtils.js';
import { default as V } from '../utils/validators.js';
import generateCoins from '../utils/generateCoins.js';

export default class VendingMachineChargeManager {
  constructor() {
    this.render();
    this.manage();
  }

  render() {}

  manage() {
    $('#vending-machine-charge-button').addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidCharge(DOM.getCharge())) return;

      generateCoins(DOM.getCharge());
    });
  }
}
