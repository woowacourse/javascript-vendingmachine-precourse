import { ALERT_MSG, EMPTY_ERROR } from '../constants/errorConstants.js';
import showAlertMsg from './showAlertMsg.js';

export default function checkUserInputEmpty(userInput) {
  if (userInput === '') {
    showAlertMsg(ALERT_MSG[EMPTY_ERROR]);
    return false;
  }
  return true;
}
