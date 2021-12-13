import { INPUT, INVALID } from '../common/constants.js';
import { $ } from '../common/elements.js';
import invalidException from '../common/Exception.js';

export function checkAmountInputValidation() {
  const amountInput = $('charge-input').value;

  if (!amountInput) return false;
  if (amountInput < INPUT.MIN_AMOUNT) return false;
  if (amountInput % INPUT.QUOTIENT) return false;
  if (!Number.isInteger(amountInput * 1)) return false;

  return true;
}

export function onInvalidInputSubmit() {
  const amountInputValid = checkAmountInputValidation();

  if (!amountInputValid) {
    invalidException(INVALID.AMOUNT, $('charge-input'));
  }
}
