import { VALIDATION } from '../../common/constants/constants.js';
import { $ } from '../../common/dom/dom.js';

export const moneyChargeInputValue = () => {
  const $chargeInputValue = $('#charge-input').value;

  return parseInt($chargeInputValue, 10);
};

export const moneyChargeInputValidator = (moneyChargeInputValue) => {
  console.log(moneyChargeInputValue);
  let isValid = false;

  if (moneyChargeInputValue < 1) {
    alert(VALIDATION.CHARGE.NONE);
    isValid;
  } else if (moneyChargeInputValue % 10 !== 0) {
    alert(VALIDATION.CHARGE.MULTIPLE_OF_10);
    isValid;
  } else {
    isValid = true;
  }

  return isValid;
};
