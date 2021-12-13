import { getDOMObj } from '../Utils.js';
import { ID_MACHINE_CHARGE_INPUT } from './constants.js';
import { getChargeAmount, registerChange } from './models.js';

const getChargeInput = function getChargeInputValue() {
  return getDOMObj(`#${ID_MACHINE_CHARGE_INPUT}`).value * 1;
};

const handleChargeInput = function handleChargeFormInput() {
  const chargeValue = getChargeInput();

  const register = registerChange(chargeValue);

  if (register) {
    this.renderChargeAmount(getChargeAmount());
    this.clearForm();
  }
};

export default handleChargeInput;
