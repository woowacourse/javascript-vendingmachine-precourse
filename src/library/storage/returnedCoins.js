import calculateSumOfCoins from '../../machine/utils/coins/calculateSumOfCoins.js';
import generateZeroCoins from '../../machine/utils/coins/generateZeroCoins.js';
import addCoins from '../../machine/utils/coins/addCoins.js';
import { getItem, setItem } from './utils/index.js';

const KEY_RETURNED_COINS = 'returned-coins.js';

export function getReturnedCoins() {
  return getItem(KEY_RETURNED_COINS) || generateZeroCoins();
}

export function setReturnedCoins(coins) {
  setItem(KEY_RETURNED_COINS, coins);
}

export function getAmountOfReturnedCoin() {
  return calculateSumOfCoins(getReturnedCoins());
}

export function addReturnedCoins(newReturnedCoins) {
  setReturnedCoins(addCoins(getReturnedCoins(), newReturnedCoins));
}
