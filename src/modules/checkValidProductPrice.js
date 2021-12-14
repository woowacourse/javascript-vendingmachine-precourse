import { ALERT_MSG, PRICE_ERROR } from '../constants/errorConstants.js';
import checkDivideTenError from './checkDivideTenError.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkValidNumberInput from './checkValidNumberInput.js';
import showAlertMsg from './showAlertMsg.js';

function checkNumberCondition(userinputnumber) {
  let isTrue = true;
  if (Number(userinputnumber) < 100) {
    showAlertMsg(ALERT_MSG[PRICE_ERROR]);
    isTrue = false;
  }
  if (isTrue) {
    isTrue = checkDivideTenError(userinputnumber);
  }
  return isTrue;
}

export default function checkValidProductPrice(userinputnumber) {
  let isTrue = true;
  isTrue = checkUserInputEmpty(userinputnumber);
  if (isTrue) {
    isTrue = checkValidNumberInput(userinputnumber);
  }
  if (isTrue) {
    isTrue = checkNumberCondition(userinputnumber);
  }
  return isTrue;
}
