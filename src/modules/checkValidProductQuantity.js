import checkUserInputEmpty from '../modules/checkUserInputEmpty.js';
import checkValidNumberInput from '../modules/checkValidNumberInput.js';
import checkZeroError from './checkZeroError.js';

export default function checkValidProductQuantity(userinputquantity) {
  let isTrue = true;
  isTrue = checkUserInputEmpty(userinputquantity);
  if (isTrue) {
    isTrue = checkValidNumberInput(userinputquantity);
  }
  if (isTrue) {
    isTrue = checkZeroError(userinputquantity);
  }
  return isTrue;
}
