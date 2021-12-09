import checkUserInputEmpty from './checkUserInputEmpty.js';
import { ALERT_MSG, EMPTY_ERROR } from '../constants/errorConstants.js';
import showAlertMsg from './showAlertMsg.js';

export default function checkValidProductName(productNameInput) {
  const isNotEmpty = checkUserInputEmpty(productNameInput);
  if (isNotEmpty) {
    return isNotEmpty;
  }
  showAlertMsg(ALERT_MSG[EMPTY_ERROR]);
}
