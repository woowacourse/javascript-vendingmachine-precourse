import { VALIDATION, NUMBER } from '../../common/constants/constants.js';
import { $ } from '../../common/dom/templates.js';

export const moneyChargeInputValue = () => {
  const $chargeInputValue = $('#charge-input').value;

  return parseInt($chargeInputValue, 10);
};

export const moneyChargeInputValidator = (moneyChargeInputValue) => {
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

export const productPurchaseValidator = (currentSum) => {
  const $chargeAmoun = $('#charge-amount');
  const $purchaseButton = $('.purchase-button');
  let isValid = false;

  if (currentSum < 1) {
    alert(VALIDATION.PURCHASE.HOLIING_UNDER_0);
    $chargeAmoun.innerHTML = NUMBER.ZERO;
    $purchaseButton.disabled = true;
    isValid;
  } else {
    isValid = true;
  }

  return isValid;
};
