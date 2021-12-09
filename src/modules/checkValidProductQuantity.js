import checkUserInputEmpty from '../modules/checkUserInputEmpty.js';
import checkValidNumberInput from '../modules/checkValidNumberInput.js';

export default function checkValidProductQuantity(userinputquantity) {
  let isTrue = true;
  isTrue = checkUserInputEmpty(userinputquantity);
  if (isTrue) {
    isTrue = checkValidNumberInput(userinputquantity);
  }
  return isTrue;
}
