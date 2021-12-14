import { getDOMObj } from '../utils/generalUtils.js';
import { ID_MACHINE_CHARGE_INPUT } from './constants.js';
import { getChargeAmount, registerChange } from './models.js';

const getChargeInput = function getChargeInputValue() {
  return getDOMObj(`#${ID_MACHINE_CHARGE_INPUT}`).value * 1;
};

const handleChargeInput = function handleChargeFormInput() {
  const chargeValue = getChargeInput();

  const registerSuccess = registerChange(chargeValue);

  if (registerSuccess) {
    this.renderChargeAmount(getChargeAmount());
    this.clearForm();
  }
};

export default handleChargeInput;
