/* eslint-disable no-param-reassign */

import { createCoin } from '../ChangeCharge/CreateTable.js';
import { $ } from '../common/elements.js';

function createCoins() {
  const won500 = createCoin('coin-500-quantity');
  const won100 = createCoin('coin-100-quantity');
  const won50 = createCoin('coin-50-quantity');
  const won10 = createCoin('coin-10-quantity');

  return [won500, won100, won50, won10];
}

function setValues(element, maxi, amountHave) {
  element.textContent = `${maxi}개`;
  localStorage.setItem('보유 금액', amountHave);
}

function getMinusAmount(amount, element, coin) {
  let amountHave = localStorage.getItem('보유 금액') * 1;
  let maxi = parseInt(amount / coin, 10);

  while (maxi) {
    if (maxi * coin <= amountHave) {
      amount -= maxi * coin;
      amountHave -= maxi * coin;
      setValues(element, maxi, amountHave);
      break;
    }
    maxi -= 1;
  }

  return amount;
}

function setChangeCoinToLocalStorage(coins) {
  const counts = [];

  coins.forEach((coin) => {
    counts.push(coin.innerText);
  });
  localStorage.setItem('잔돈', JSON.stringify(counts));
}

function createCoinCounts() {
  const coins = createCoins();
  let amount = localStorage.getItem('투입한 금액') * 1;

  amount = getMinusAmount(amount, coins[0], 500);
  amount = getMinusAmount(amount, coins[1], 100);
  amount = getMinusAmount(amount, coins[2], 50);
  amount = getMinusAmount(amount, coins[3], 10);
  localStorage.setItem('투입한 금액', amount);
  setChangeCoinToLocalStorage(coins);
}

function setChangeCoinTable() {
  const changeCoinTable = $('change-coin-table');

  if (localStorage.getItem('잔돈')) {
    const counts = JSON.parse(localStorage.getItem('잔돈'));

    for (let i = 0; i < 4; i += 1) {
      const countCell = changeCoinTable.rows[i + 1].cells[1];
      countCell.innerText = counts[i];
    }
  }
}

export default function onReturnClick(event) {
  event.preventDefault();
  const changeCoinTable = $('change-coin-table');
  createCoinCounts();
  const coins = localStorage.getItem('잔돈');

  if (coins) {
    for (let i = 0; i < 4; i += 1) {
      const countCell = changeCoinTable.rows[i + 1].cells[1];
      countCell.innerText = coins[i].innerText;
    }
  }
  setChangeCoinTable();
}
