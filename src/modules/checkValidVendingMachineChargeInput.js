import checkDividTenError from './checkDivideTenError.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkValidNumberInput from './checkValidNumberInput.js';

export default function checkValidVendingMachineChargeInput(vendingCoin) {
  let isTrue = checkUserInputEmpty(vendingCoin);
  if (isTrue) {
    isTrue = checkValidNumberInput(vendingCoin);
  }
  if (isTrue) {
    isTrue = checkDividTenError(vendingCoin);
  }
  return isTrue;
}
