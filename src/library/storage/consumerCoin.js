import { getItem, setItem } from './utils/index.js';

const KEY_CONSUMER_COIN = 'consumer-coin';

export function getChargedCoinOfConsumer() {
  return getItem(KEY_CONSUMER_COIN) || 0;
}

export function setChargedCoinOfConsumer(coin) {
  setItem(KEY_CONSUMER_COIN, coin);
}

export function addChargedCoinOfConsumer(coin) {
  setChargedCoinOfConsumer(getChargedCoinOfConsumer() + coin);
}

export function abstractChargedCoinOfConsumer(coin) {
  setChargedCoinOfConsumer(getChargedCoinOfConsumer() - coin);
}
