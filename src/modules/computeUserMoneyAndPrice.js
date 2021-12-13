import { USERMONEY_STORAGE_NAME } from '../constants/constants.js';
import { ALERT_MSG, NO_MONEY_ERROR } from '../constants/errorConstants.js';
import store from '../storage/store.js';
import showAlertMsg from './showAlertMsg.js';

export default function computeUserMoneyAndPrice(productPrice) {
  let userMoney =
    Number(store.getLocalStorage(USERMONEY_STORAGE_NAME)) -
    Number(productPrice);
  if (userMoney < 0) {
    showAlertMsg(ALERT_MSG[NO_MONEY_ERROR]);
    return false;
  }
  return true;
}
