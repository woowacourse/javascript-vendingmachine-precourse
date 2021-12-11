import { addChargedCoin } from '../../../library/storage/chargedCoin.js';
import Form from '../../form/index.js';
import createInput from '../../utils/createInput.js';
import {
  DICT_ID_CHARGE_FORM,
  PLACEHOLDER_INPUT,
  TEXT_BUTTON_CHARGE,
  TYPE_INPUT,
} from './const.js';

const { formId, inputId, buttonId } = DICT_ID_CHARGE_FORM;

class MachineChargeForm extends Form {
  constructor() {
    super(formId);
    this.input = undefined;

    this.initInput();
    this.initButton();
  }

  initInput() {
    this.input = createInput(inputId, TYPE_INPUT, PLACEHOLDER_INPUT);
    this.appendInput(this.input);
  }

  initButton() {
    this.button.id = buttonId;
    this.button.innerText = TEXT_BUTTON_CHARGE;
  }

  onButtonClick() {
    const input = this.input.value;

    addChargedCoin(Number(input));
  }
}

export default MachineChargeForm;
