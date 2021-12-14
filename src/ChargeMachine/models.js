import { getFromStorage, setInStorage } from '../store.js';
import { divideToCoins, mergeObj } from '../utils/generalUtils.js';
import { isValidMoney } from '../validation.js';
import { ERROR_INVALID_INSERT } from './constants.js';

export const registerChange = function addChangeToLocalStorage(amount) {
  if (isValidMoney(amount)) {
    const currentCoinObj = getFromStorage('coins') || {};
    const newCoinObj = divideToCoins(amount);
    const mergedCoins = mergeObj(currentCoinObj, newCoinObj);
    setInStorage('coins', mergedCoins);
    return true;
  }

  alert(ERROR_INVALID_INSERT);
  return false;
};

export const getChargeAmount = function getTotalChargeAmount() {
  const coinObj = getFromStorage('coins') || {};
  const chargeSum = Object.keys(coinObj).reduce(
    (sum, coin) => sum + coin * coinObj[coin],
    0,
  );

  return chargeSum;
};
