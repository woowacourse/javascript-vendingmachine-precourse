import { VALIDATION } from '../../common/constants/constants.js';
import { $ } from '../../common/dom/templates.js';

export const machineChargeInputValue = () => {
  const $coinChargeInputValue = $('#vending-machine-charge-input').value;

  return parseInt($coinChargeInputValue, 10);
};

export const machineChargeInputValidator = (coinChargeInputValue) => {
  let isValid = false;

  if (coinChargeInputValue.length < 1) {
    alert(VALIDATION.AMOUNT.NONE);
    isValid;
  } else if (coinChargeInputValue % 10 !== 0) {
    alert(VALIDATION.AMOUNT.MULTIPLE_OF_10);
    isValid;
  } else {
    isValid = true;
  }

  return isValid;
};
