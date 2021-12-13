import ChargeForm from '../../chargeForm/index.js';
import { addChargedCoinsOfVendingMachine } from '../../../library/storage/vendingMachineCoins.js';
import { ID_FORM, DICT_PROPS_BUTTON, DICT_PROPS_INPUT } from './const.js';
import { ERROR_INVALID_CHARGE_COIN } from '../../chargeForm/const.js';
import isValidCoinToCharge from '../../../machine/utils/charge/isValidCoinToCharge.js';

class VendingMachineChargeForm extends ChargeForm {
  constructor() {
    super(ID_FORM);

    this.initInput(DICT_PROPS_INPUT);
    this.initButton(DICT_PROPS_BUTTON);
  }

  onButtonClick() {
    const coin = Number(this.input.value);
    if (!isValidCoinToCharge(coin)) {
      alert(ERROR_INVALID_CHARGE_COIN);
      return;
    }
    addChargedCoinsOfVendingMachine(coin);
  }
}

export default VendingMachineChargeForm;
