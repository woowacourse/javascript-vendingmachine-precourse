import checkUserInputEmpty from './checkUserInputEmpty.js';
import {
  ALERT_MSG,
  DUPLICATE_ERROR,
  EMPTY_ERROR,
} from '../constants/errorConstants.js';
import showAlertMsg from './showAlertMsg.js';
import store from '../storage/store.js';
import { DRINK_STORAGE_NAME } from '../constants/constants.js';

function checkDuplicateProductName(drinkStore, productNameInput) {
  let isTrue = true;
  drinkStore.forEach((item) => {
    if (item['menu'] === productNameInput) {
      isTrue = false;
      showAlertMsg(ALERT_MSG[DUPLICATE_ERROR]);
    }
  });
  return isTrue;
}

function checkDrinkStorage(productNameInput) {
  const drinkStore = store.getLocalStorage(DRINK_STORAGE_NAME);
  let isTrue = true;
  if (drinkStore) {
    isTrue = checkDuplicateProductName(drinkStore, productNameInput);
  }
  return isTrue;
}

export default function checkValidProductName(productNameInput) {
  let isTrue = checkUserInputEmpty(productNameInput);
  if (isTrue) {
    isTrue = checkDrinkStorage(productNameInput);
  } else {
    showAlertMsg(ALERT_MSG[EMPTY_ERROR]);
  }
  return isTrue;
}
