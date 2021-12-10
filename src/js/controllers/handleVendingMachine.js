import $ from '../utils/dom.js';
import { resetChargeInput } from '../views/resetInput.js';
import getRandomCoin from '../models/getRandomCoin.js';
import store from '../utils/store.js';
import printChargeMoney from '../views/printChargeMoney.js';

const isValidCharge = chargeInput => {
  if (chargeInput === '') {
    alert('공백입니다.');
    return false;
  }
  if (Number(chargeInput) < 10) {
    alert('상품 가격은 10원 이상을 입력해야합니다.');
    return false;
  }
  if (Number(chargeInput % 10 !== 0)) {
    alert('상품 가격이 10원으로 나눠지지 않습니다.');
    return false;
  }
  return true;
};

const countCoin = (coin, coins) => {
  if (coin === 500) {
    coins.fiveHundred += 1;
  } else if (coin === 100) {
    coins.oneHundred += 1;
  } else if (coin === 50) {
    coins.fifty += 1;
  } else if (coin === 10) {
    coins.ten += 1;
  }
};

const chargeMoney = (chargeInput, coins) => {
  coins.amount += chargeInput;
  while (chargeInput) {
    const coin = getRandomCoin();
    if (coin > chargeInput) {
      continue;
    }
    countCoin(coin, coins);
    chargeInput -= coin;
  }
};

const handleVendingMachine = () => {
  let coins = { amount: 0, fiveHundred: 0, oneHundred: 0, fifty: 0, ten: 0 };
  if (store.getLocalStorage('coins')) {
    coins = store.getLocalStorage('coins');
    printChargeMoney();
  }

  $('#vending-machine-charge-button').addEventListener('click', e => {
    e.preventDefault();
    const chargeInput = $('#vending-machine-charge-input').value;

    if (isValidCharge(chargeInput)) {
      chargeMoney(Number(chargeInput), coins);
      store.setLocalStorage('coins', coins);
      printChargeMoney();
    }
    resetChargeInput();
  });
};

export default handleVendingMachine;
