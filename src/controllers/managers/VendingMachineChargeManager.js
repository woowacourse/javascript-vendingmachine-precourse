import { $, default as DOM } from '../../utils/DOMUtils.js';
import { default as V } from '../../utils/validators.js';
import convertChargeIntoCoin from '../utils/convertChargeIntoCoin.js';
import { SELECTOR } from '../../constants/selectors.js';

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
    $(SELECTOR.COIN_CHARGE_BUTTON).addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidCharge(DOM.getCharge().vendingMachine)) return;

      convertChargeIntoCoin(DOM.getCharge().vendingMachine);

      this.render();
    });
  }
}
