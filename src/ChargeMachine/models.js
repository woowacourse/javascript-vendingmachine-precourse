import { getFromStorage, setInStorage } from '../store.js';
import { divideToCoins, mergeObj } from '../Utils.js';
import { isValidMoney, validator } from '../validation.js';
import { ERROR_INVALID_INSERT } from './constants.js';

export const registerChange = function addChangeToLocalStorage(amount) {
  if (validator(isValidMoney, amount, ERROR_INVALID_INSERT)) {
    const currentCoinObj = getFromStorage('coins') || {};
    const newCoinObj = divideToCoins(amount);
    const mergedCoins = mergeObj(currentCoinObj, newCoinObj);
    setInStorage('coins', mergedCoins);
    return true;
  }

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
