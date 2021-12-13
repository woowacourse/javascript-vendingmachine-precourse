// prettier-ignore
import { getRandomCoinsList, reflectCoinsToLocalStorage } from './manageCoins.js';
// prettier-ignore
import {stringConstants, chargeChangesSpanConstants, changesCoinItemsConstants } from '../constant/string.js';
import { $ } from '../util/dom.js';
import { check } from '../util/checkValue.js';
import { store } from '../store/store.js';
import { COINS_PRICE, DECIMAL } from '../constant/constant.js';
import { localStorageConstants } from '../constant/localstorage.js';
import { renderAmountSpan, renderCoinsItems } from '../render/common.js';

export const checkChangesInput = e => {
  e.preventDefault();
  const inputtedChanges = $('#vending-machine-charge-input').value;
  if (
    check.inputValueNotNum(inputtedChanges) ||
    check.inputValueDivideTen(inputtedChanges)
  ) {
    window.alert(stringConstants.ALERT);
    return;
  }
  addChangesToExistingChanges(inputtedChanges, e);
  getRandomCoinsList();
};

export const addChangesToExistingChanges = (inputtedChanges, e) => {
  const existingChanges = store.getItem(localStorageConstants.CHANGES);
  let totalChanges = 0;
  if (existingChanges !== null) {
    totalChanges = existingChanges;
  }
  totalChanges += parseInt(inputtedChanges, DECIMAL);
  renderAmountSpan(
    chargeChangesSpanConstants,
    localStorageConstants.CHANGES,
    e,
  );
  store.setItem(localStorageConstants.CHANGES, totalChanges);
};

export const calculateChanges = (numberOfCoinsList, inputAmount) => {
  let changes = store.getItem(localStorageConstants.CHANGES);
  for (let i = 0; i < numberOfCoinsList.length; i++) {
    while (inputAmount >= COINS_PRICE[i] && numberOfCoinsList[i] > 0) {
      inputAmount -= COINS_PRICE[i];
      changes -= COINS_PRICE[i];
      numberOfCoinsList[i] -= 1;
    }
  }
  reflectCoinsToLocalStorage(numberOfCoinsList);
  store.setItem(localStorageConstants.INPUT_AMOUNT, inputAmount);
  store.setItem(localStorageConstants.CHANGES, changes);
  renderCoinsItems(changesCoinItemsConstants);
};
