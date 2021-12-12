import { KEY, SELECTOR, COIN_ARRAY } from '../model/constants.js';
import {
  $,
  getItemOrNull,
  setItem,
  isMultipleOf10,
  isInputNumberValid,
  onKeyUpNumericEvent,
} from './utils.js';
import VendingMachine from '../model/vendingMachine.js';

const makeRandomCoinQuantity = inputValue => {
  let price = 0;
  const amountArray = [0, 0, 0, 0];
  while (inputValue !== price) {
    const coin = MissionUtils.Random.pickNumberInList(COIN_ARRAY);
    if (price + coin <= inputValue) {
      price += coin;
      amountArray[COIN_ARRAY.indexOf(coin)] += 1;
    }
  }

  return amountArray;
};

const initTable = () => {
  const vending = getItemOrNull(KEY.vending);
  if (vending) {
    vending.coins.forEach(x => {
      $(`vending-machine-coin-${x.coin}-quantity`).innerHTML = `${x.quantity}개`;
    });
  }
};

const initChargeDomProperty = () => {
  const vendingMachine = getItemOrNull(KEY.vending);
  $(SELECTOR.vendingChargeInput).value = '';
  if (vendingMachine) {
    $(SELECTOR.vendingChargeAmount).innerHTML = vendingMachine.change;
  }
};

const isChargeInputValid = chargeInput =>
  isInputNumberValid(chargeInput.placeholder, chargeInput.value) &&
  isMultipleOf10(chargeInput.placeholder, chargeInput.value);

const chargeVending = () => {
  const chargeInput = $(SELECTOR.vendingChargeInput);
  if (isChargeInputValid(chargeInput)) {
    const chargeInputValue = parseInt(chargeInput.value);
    let vendingMachine = getItemOrNull(KEY.vending);
    const randomCoinQuantity = makeRandomCoinQuantity(chargeInputValue);
    if (vendingMachine) {
      vendingMachine.change += chargeInputValue;
    } else if (vendingMachine === null) {
      vendingMachine = new VendingMachine(chargeInputValue);
    }
    randomCoinQuantity.forEach((v, i) => (vendingMachine.coins[i].quantity += v));
    setItem(KEY.vending, vendingMachine);
    initChargeDomProperty();
    initTable();
  }
};

export const initAllVending = () => {
  initTable();
  initChargeDomProperty();
  $(SELECTOR.vendingChargeButton).addEventListener('click', () => chargeVending());
  $(SELECTOR.vendingChargeInput).addEventListener('keyup', () =>
    onKeyUpNumericEvent($(SELECTOR.vendingChargeInput)),
  );
};
