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
  let totalPrice = 0;

  while (inputValue !== totalPrice) {
    const coin = MissionUtils.Random.pickNumberInList(COIN_ARRAY);
    if (totalPrice + coin <= inputValue) {
      totalPrice += coin;
      amountArray[COIN_ARRAY.indexOf(coin)] += 1;
    }
  }

  return amountArray;
};

const initChargeDomProperty = () => {
  const vendingMachine = getItemOrNull(KEY.vending);
  clearInput($(SELECTOR.vendingChargeInput));
  if (vendingMachine) {
    setInnerHTML($(SELECTOR.vendingChargeAmount), vendingMachine.change);
  }
};

const isChargeInputValid = chargeInput =>
  isInputNumberValid(chargeInput) && isMultipleOf10(chargeInput);

const setVendingMachineByRandomCoin = (chargeInputValue, randomCoinQuantity) => {
  let vendingMachine = getItemOrNull(KEY.vending);
  if (vendingMachine) {
    vendingMachine.change += chargeInputValue;
  } else if (vendingMachine === null) {
    vendingMachine = new VendingMachine(chargeInputValue);
  }
  randomCoinQuantity.forEach((v, i) => (vendingMachine.coins[i].quantity += v));
  setItem(KEY.vending, vendingMachine);
};

const chargeVending = () => {
  const chargeInput = $(SELECTOR.vendingChargeInput);
  if (isChargeInputValid(chargeInput)) {
    const chargeInputValue = parseInt(chargeInput.value);
    const randomCoinQuantity = makeRandomCoinQuantity(chargeInputValue);
    setVendingMachineByRandomCoin(chargeInputValue, randomCoinQuantity);
    initChargeDomProperty();
    initVendingTable();
  }
};

export const initAllVending = () => {
  initVendingTable();
  initChargeDomProperty();
  $(SELECTOR.vendingChargeButton).addEventListener('click', () => chargeVending());
  $(SELECTOR.vendingChargeInput).addEventListener('keyup', () =>
    onKeyUpNumericEvent($(SELECTOR.vendingChargeInput)),
  );
};
