import checkDividTenError from './checkDivideTenError.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkValidNumberInput from './checkValidNumberInput.js';
import checkZeroError from './checkZeroError.js';

export default function checkValidChargeInput(chargeInput) {
  let isTrue = checkUserInputEmpty(chargeInput);
  if (isTrue) {
    isTrue = checkValidNumberInput(chargeInput);
  }
  if (isTrue) {
    isTrue = checkDividTenError(chargeInput);
  }
  if (isTrue) {
    isTrue = checkZeroError(chargeInput);
  }
  return isTrue;
}
