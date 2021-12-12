import {
  ALERT_MSG,
  MINUS_ERROR,
  NOINTEGER_ERROR,
  NOTNUMBER_ERROR,
} from '../constants/errorConstants.js';
import showAlertMsg from './showAlertMsg.js';

export default function checkValidNumberInput(numberinput) {
  if (isNaN(numberinput)) {
    showAlertMsg(ALERT_MSG[NOTNUMBER_ERROR]);
    return false;
  } else if (Number(numberinput) < 0) {
    showAlertMsg(ALERT_MSG[MINUS_ERROR]);
    return false;
  } else if (!Number.isInteger(Number(numberinput))) {
    showAlertMsg(ALERT_MSG[NOINTEGER_ERROR]);
    return false;
  }
  return true;
}
