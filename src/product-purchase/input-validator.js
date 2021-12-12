import { VALIDATION } from '../common/constants/constants.js';
import { $ } from '../common/dom/dom.js';

export const moneyChargeInputValue = () => {
  const $chargeInputValue = $('#charge-input').value;

  return $chargeInputValue;
};

export const moneyChargeInputValidator = (chargeInputValue) => {
  let isValid = false;

  if (chargeInputValue < 1) {
    alert(VALIDATION.CHARGE.NONE);
    isValid;
  } else if (chargeInputValue % 10 !== 0) {
    alert(VALIDATION.CHARGE.MULTIPLE_OF_10);
    isValid;
  } else {
    isValid = true;
  }

  return isValid;
};
