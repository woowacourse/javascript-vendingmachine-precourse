import {
  ALERT_MSG,
  DIVIDE_ERROR,
  PRICE_ERROR,
  EMPTY_ERROR,
} from '../constants/errorConstants.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkValidNumberInput from './checkValidNumberInput.js';
import showAlertMsg from './showAlertMsg.js';

function checkNumberCondition(userinputnumber) {
  let isTrue = true;
  if (Number(userinputnumber) < 100) {
    showAlertMsg(ALERT_MSG[PRICE_ERROR]);
    isTrue = false;
  } else if (Number(userinputnumber) % 10 !== 0) {
    showAlertMsg(ALERT_MSG[DIVIDE_ERROR]);
    isTrue = false;
  }
  return isTrue;
}

export default function checkValidProductPrice(userinputnumber) {
  let isTrue = true;
  isTrue = checkUserInputEmpty(userinputnumber);
  if (isTrue) {
    isTrue = checkValidNumberInput(userinputnumber);
    if (isTrue) {
      isTrue = checkNumberCondition(userinputnumber);
    }
  } else {
    showAlertMsg(ALERT_MSG[EMPTY_ERROR]);
  }
  return isTrue;
}
