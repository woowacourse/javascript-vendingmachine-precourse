import ChargeForm from '../../chargeForm/index.js';
import { addChargedCoins } from '../../../library/storage/chargedCoins.js';
import { ID_FORM, DICT_PROS_BUTOTN, DICT_PROS_INPUT } from './const.js';

class MachineChargeForm extends ChargeForm {
  constructor() {
    super(ID_FORM);

    this.initInput(DICT_PROS_INPUT);
    this.initButton(DICT_PROS_BUTOTN);
  }

  onButtonClick() {
    const input = this.input.value;

    addChargedCoins(Number(input));
  }
}

export default MachineChargeForm;
