import { ALERT_MSG, EMPTY_ERROR } from '../constants/errorConstants.js';
import checkUserInputEmpty from '../modules/checkUserInputEmpty.js';
import checkValidNumberInput from '../modules/checkValidNumberInput.js';
import showAlertMsg from './showAlertMsg.js';

export default function checkValidProductQuantity(userinputquantity) {
  let isTrue = true;
  isTrue = checkUserInputEmpty(userinputquantity);
  if (isTrue) {
    isTrue = checkValidNumberInput(userinputquantity);
  } else {
    showAlertMsg(ALERT_MSG[EMPTY_ERROR]);
  }
  return isTrue;
}
