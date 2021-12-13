import { ALERT_MSG, SOIDOUT_ERROR } from '../constants/errorConstants.js';
import showAlertMsg from './showAlertMsg.js';

export default function checkSoldOutError(productQuantity) {
  if (Number(productQuantity) <= 0) {
    showAlertMsg(ALERT_MSG[SOIDOUT_ERROR]);
    return false;
  }
  return true;
}
