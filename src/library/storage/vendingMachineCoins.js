import addCoins from '../../machine/utils/coins/addCoins.js';
import calculateSumOfCoins from '../../machine/utils/coins/calculateSumOfCoins.js';
import generateRandomCoins from '../../machine/utils/coins/generateRandomCoins.js';
import generateZeroCoins from '../../machine/utils/coins/generateZeroCoins.js';
import subtractCoins from '../../machine/utils/coins/subtractCoins.js';
import { getItem, setItem } from './utils/index.js';

const KEY_VENDING_MACHINE_COINS = 'vending-machine-coins';

export function getChargedCoinsOfVendingMachine() {
  return getItem(KEY_VENDING_MACHINE_COINS) || generateZeroCoins();
}

export function setChargedCoinsOfVendingMachine(coins) {
  setItem(KEY_VENDING_MACHINE_COINS, coins);
}

export function getChargedAmountOfVendingMachine() {
  return calculateSumOfCoins(getChargedCoinsOfVendingMachine());
}

export function addChargedCoinsOfVendingMachine(coin) {
  setChargedCoinsOfVendingMachine(
    addCoins(getChargedCoinsOfVendingMachine(), generateRandomCoins(coin))
  );
}

export function subtractChargedCoinsOfVendingMachine(coinToSubtract) {
  setChargedCoinsOfVendingMachine(
    subtractCoins(getChargedCoinsOfVendingMachine(), coinToSubtract)
  );
}
