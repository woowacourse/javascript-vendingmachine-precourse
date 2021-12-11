import { $ } from '../dom/dom.js';
import { VALIDATION } from '../constants/constants.js';

export const coinChargeInputValue = () => {
  const $coinChargeInputValue = $('#vending-machine-charge-input').value;
  console.log($coinChargeInputValue);
  return parseInt($coinChargeInputValue, 10);
};

export const coinInputValidator = (coinChargeInputValue) => {
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
