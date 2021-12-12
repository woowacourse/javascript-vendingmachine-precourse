import { $ } from '../util/dom.js';
import { check } from '../util/checkValue.js';
import { store } from '../store/store.js';
import { stringConstants } from '../constant/string.js';
import { COINS_PRICE, DECIMAL } from '../constant/constant.js';
import { localStorageConstants } from '../constant/localstorage.js';
// prettier-ignore
import { renderMoney, renderReturnChanges, renderChangesCoinsItems } from '../render/render.js';
// prettier-ignore
import { getRandomCoinsList, reflectCoinsToLocalStorage } from './manageCoins.js';

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
  addChangesToExistingChanges(inputtedChanges);
  getRandomCoinsList();
};

export const addChangesToExistingChanges = inputtedChanges => {
  const existingChanges = store.getItem(localStorageConstants.CHANGES);
  let totalChanges = 0;
  if (existingChanges !== null) {
    totalChanges = existingChanges;
  }
  totalChanges += parseInt(inputtedChanges, DECIMAL);
  store.setItem(localStorageConstants.CHANGES, totalChanges);
  renderMoney();
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
  renderChangesCoinsItems();
  renderReturnChanges();
};
