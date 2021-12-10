import {
  ALERT_MSG,
  DIVIDE_ERROR,
  EMPTY_ERROR,
} from '../constants/errorConstants.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkValidNumberInput from './checkValidNumberInput.js';
import showAlertMsg from './showAlertMsg.js';

function checkVendingCoinCondition(vendingCoin) {
  let isTrue = true;
  if (Number(vendingCoin) % 10 !== 0) {
    showAlertMsg(ALERT_MSG[DIVIDE_ERROR]);
    isTrue = false;
  }
  return isTrue;
}

export default function checkValidVendingMachineChargeInput(vendingCoin) {
  let isTrue = checkUserInputEmpty(vendingCoin);
  if (isTrue) {
    isTrue = checkValidNumberInput(vendingCoin);
    if (isTrue) {
      isTrue = checkVendingCoinCondition(vendingCoin);
    }
  } else {
    showAlertMsg(ALERT_MSG[EMPTY_ERROR]);
  }
  return isTrue;
}
