import { $, default as DOM } from '../views/DOMUtils.js';
import { default as V } from '../utils/validators.js';
import convertChargeIntoCoin from '../utils/convertChargeIntoCoin.js';

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

      convertChargeIntoCoin(DOM.getCharge());
    });
  }
}
