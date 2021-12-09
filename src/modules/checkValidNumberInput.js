import {
  ALERT_MSG,
  MINUS_ERROR,
  NOINTEGER_ERROR,
  NOTNUMBER_ERROR,
} from '../constants/constants.js';
import showAlertMsg from './showAlertMsg.js';

export default function checkValidNumberInput(numberinput) {
  let isTrue = true;
  if (isNaN(numberinput)) {
    showAlertMsg(ALERT_MSG[NOTNUMBER_ERROR]);
    isTrue = false;
  } else if (Number(numberinput) < 0) {
    showAlertMsg(ALERT_MSG[MINUS_ERROR]);
    isTrue = false;
  } else if (!Number.isInteger(Number(numberinput))) {
    showAlertMsg(ALERT_MSG[NOINTEGER_ERROR]);
    isTrue = false;
  }
  return isTrue;
}
