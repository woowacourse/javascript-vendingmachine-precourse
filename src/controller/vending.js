import {
  $,
  getItemOrNull,
  setItem,
  isMultipleOf10,
  isInputNumberValid,
  onKeyUpNumericEvent,
} from './utils.js';
import VendingMachine from '../model/vendingMachine.js';
import { KEY, SELECTOR, COIN_ARRAY } from '../model/constants.js';
import { initVendingTable, clearInput, setInnerHTML } from '../view/index.js';

const makeRandomCoinQuantity = inputValue => {
  const amountArray = [0, 0, 0, 0];
  let price = 0;

  while (inputValue !== price) {
    const coin = MissionUtils.Random.pickNumberInList(COIN_ARRAY);
    if (price + coin <= inputValue) {
      price += coin;
      amountArray[COIN_ARRAY.indexOf(coin)] += 1;
    }
  }

  return amountArray;
};

const chargeVending = () => {
  const chargeInput = $(SELECTOR.vendingChargeInput);
  const chargeInputValue = parseInt(chargeInput.value);
  const randomCoinQuantity = makeRandomCoinQuantity(chargeInputValue);
  initVendingTable();
};

export const initAllVending = () => {
  initVendingTable();
  $(SELECTOR.vendingChargeButton).addEventListener('click', () => chargeVending());
};
