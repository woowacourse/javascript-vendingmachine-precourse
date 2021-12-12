import addCoins from '../../machine/utils/addCoins.js';
import calculateSumOfCoins from '../../machine/utils/calculateSumOfCoins.js';
import generateRandomCoins from '../../machine/utils/generateRandomCoins.js';
import generateZeroCoins from '../../machine/utils/generateZeroCoins.js';
import { getItem, setItem } from './utils/index.js';

const KEY_CHARGED_COINS = 'charged-coins';

export function getChargedCoins() {
  return getItem(KEY_CHARGED_COINS) || generateZeroCoins();
}

export function setChargedCoins(coins) {
  setItem(KEY_CHARGED_COINS, coins);
}

export function getChargedAmount() {
  return calculateSumOfCoins(getChargedCoins());
}

export function addChargedCoins(coin) {
  setChargedCoins(addCoins(getChargedCoins(), generateRandomCoins(coin)));
}
