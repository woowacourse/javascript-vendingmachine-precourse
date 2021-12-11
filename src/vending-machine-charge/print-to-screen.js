import { $ } from '../dom/dom.js';
import { coinInputValidator } from './input-validator.js';
import { coinChargeInputValue } from './input-validator.js';

export const printMoneyToScreen = () => {
  const $vendingMachinePTag = $('#vending-machine-charge-amount');

  if (coinInputValidator(coinChargeInputValue())) {
    $vendingMachinePTag.innerHTML = `보유금액: ${coinChargeInputValue()}원`;
  }
};
