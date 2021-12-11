import { getItem, setItem } from './utils/index.js';

const KEY_CHARGED_COIN = 'charged-coin';

export function getChargedCoin() {
  return Number(getItem(KEY_CHARGED_COIN));
}

export function setChargedCoin(coin) {
  setItem(KEY_CHARGED_COIN, coin);
}

export function addChargedCoin(coin) {
  setChargedCoin(getChargedCoin() + coin);
}

export function substractChargedCoin(coin) {
  setChargedCoin(getChargedCoin() - coin);
}
