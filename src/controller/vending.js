import { KEY, SELECTOR, COIN_ARRAY } from '../model/constants.js';
import { $, getItemOrNull, setItem } from './utils.js';
import VendingMachine from '../model/vendingMachine.js';

const makeRandomCoinQuantity = inputValue => {
  const amountArray = COIN_ARRAY.map(coin => {
    let randomNumber = 0;
    const range = Array.from({ length: inputValue / coin + 1 }, (v, i) => i);
    randomNumber = MissionUtils.Random.pickNumberInList(range);
    inputValue -= coin * randomNumber;
    return randomNumber;
  });
  if (inputValue !== 0) {
    amountArray[3] += inputValue / 10;
  }

  return amountArray;
};
const chargeVending = () => {
  const chargeInput = parseInt($(SELECTOR.vendingChargeInput).value);
  let vendingMachine = getItemOrNull(KEY.vending);
  const randomCoinQuantity = makeRandomCoinQuantity(chargeInput);
  if (vendingMachine) {
    vendingMachine.changes += chargeInput;
  } else if (vendingMachine === null) {
    vendingMachine = new VendingMachine(chargeInput);
  }
  randomCoinQuantity.forEach((v, i) => (vendingMachine.coins[i].quantity += v));
  setItem(KEY.vending, vendingMachine);
};

const initTable = () => {
  const vending = getItemOrNull(KEY.vending);
  if (vending) {
    vending.coins.forEach(x => {
      $(`vending-machine-coin-${x.coin}-quantity`).innerHTML = `${x.quantity}개`;
    });
  }
};

export const initAllVending = () => {
  initTable();
  $(SELECTOR.vendingChargeButton).addEventListener('click', () => chargeVending());
};
