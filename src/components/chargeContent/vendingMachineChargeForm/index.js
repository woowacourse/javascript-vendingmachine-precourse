import ChargeForm from '../../chargeForm/index.js';
import { addChargedCoins } from '../../../library/storage/chargedCoins.js';
import { ID_FORM, DICT_PROPS_BUTTON, DICT_PROPS_INPUT } from './const.js';

class VendingMachineChargeForm extends ChargeForm {
  constructor() {
    super(ID_FORM);

    this.initInput(DICT_PROPS_INPUT);
    this.initButton(DICT_PROPS_BUTTON);
  }

  onButtonClick() {
    const input = this.input.value;

    addChargedCoins(Number(input));
  }
}

export default VendingMachineChargeForm;
