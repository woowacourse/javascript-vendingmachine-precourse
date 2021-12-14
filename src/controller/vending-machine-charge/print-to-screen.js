import {
  COIN_LIST,
  VENDING_MACHINE,
} from '../../common/constants/constants.js';
import { $ } from '../../common/dom/templates.js';

export const printChargedAmountToScreen = () => {
  const chargedAmountList = JSON.parse(localStorage.getItem('chargedAmount'));
  const $currentMachineMoney = $('#vending-machine-charge-amount');
  let amountArray = [];
  let sum = 0;

  for (let i = 0; i < chargedAmountList.length; i++) {
    amountArray.push(chargedAmountList[i].value);
  }

  sum = amountArray.reduce((a, b) => a + b);
  $currentMachineMoney.innerHTML = `${VENDING_MACHINE.HOLDING_AMOUNT} ${sum} ${VENDING_MACHINE.WON}`;

  return sum;
};

export const printAmountOfCoinToScreen = () => {
  const $vendingMachine500Coin = $('#vending-machine-coin-500-quantity');
  const $vendingMachine100Coin = $('#vending-machine-coin-100-quantity');
  const $vendingMachine50Coin = $('#vending-machine-coin-50-quantity');
  const $vendingMachine10Coin = $('#vending-machine-coin-10-quantity');
  const coinList = JSON.parse(localStorage.getItem('coinList'));
  console.log(coinList);
  $vendingMachine500Coin.innerHTML = `${coinList[COIN_LIST[0]]}개`;
  $vendingMachine100Coin.innerHTML = `${coinList[COIN_LIST[1]]}개`;
  $vendingMachine50Coin.innerHTML = `${coinList[COIN_LIST[2]]}개`;
  $vendingMachine10Coin.innerHTML = `${coinList[COIN_LIST[3]]}개`;
};

// 새로고침
