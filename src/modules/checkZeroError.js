import { ALERT_MSG, ZEOR_ERROR } from '../constants/errorConstants.js';
import showAlertMsg from './showAlertMsg.js';

export default function checkZeroError(userInput) {
  if (Number(userInput) === 0) {
    showAlertMsg(ALERT_MSG[ZEOR_ERROR]);
    return false;
  }
  return true;
}
