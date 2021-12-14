/* eslint-disable no-param-reassign */

import { createCoin } from '../ChangeCharge/CreateTable.js';
import { COIN } from '../common/constants.js';
import { $ } from '../common/elements.js';

function createCoins() {
  const won500 = createCoin('coin-500-quantity');
  const won100 = createCoin('coin-100-quantity');
  const won50 = createCoin('coin-50-quantity');
  const won10 = createCoin('coin-10-quantity');

  return [won500, won100, won50, won10];
}

function getMinusAmount(amount, element, coin) {
  let minusAmount = amount;

  if (amount) {
    element.textContent = `${parseInt(minusAmount / coin, 10)}개`;
    minusAmount %= coin;
  }

  return minusAmount;
}

function createCoinCounts() {
  const coins = createCoins();
  let amount = localStorage.getItem('투입한 금액') * 1;
  amount = getMinusAmount(amount, coins[0], COIN.FIVE_HUN);
  amount = getMinusAmount(amount, coins[1], COIN.HUN);
  amount = getMinusAmount(amount, coins[2], COIN.FIVE_TEN);
  getMinusAmount(amount, coins[3], COIN.TEN);

  return coins;
}

export default function onReturnClick() {
  const changeCoinTable = $('change-coin-table');
  const coins = createCoinCounts();

  for (let i = 0; i < 4; i += 1) {
    const countCell = changeCoinTable.rows[i + 1].cells[1];
    countCell.innerText = coins[i].textContent;
  }
}
