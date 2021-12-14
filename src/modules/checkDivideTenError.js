import { ALERT_MSG, DIVIDE_ERROR } from '../constants/errorConstants.js';
import showAlertMsg from './showAlertMsg.js';

export default function checkDivideTenError(userInput) {
  let isTrue = true;
  if (Number(userInput) % 10 !== 0) {
    showAlertMsg(ALERT_MSG[DIVIDE_ERROR]);
    isTrue = false;
  }
  return isTrue;
}
