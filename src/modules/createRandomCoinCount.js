import {
  COIN_500,
  COIN_100,
  COIN_50,
  COIN_10,
  COIN_KEY_LIST,
  COIN_LIST,
} from '../constants/coinConstants.js';

function initCoinObject() {
  let coinObject = {};
  COIN_KEY_LIST.forEach((item) => {
    coinObject[item] = 0;
  });
  return coinObject;
}

function setCoinObject(coinObject, coin) {
  if (coin === Number(COIN_500)) {
    coinObject[COIN_KEY_LIST[0]] += 1;
  } else if (coin === Number(COIN_100)) {
    coinObject[COIN_KEY_LIST[1]] += 1;
  } else if (coin === Number(COIN_50)) {
    coinObject[COIN_KEY_LIST[2]] += 1;
  } else if (coin === Number(COIN_10)) {
    coinObject[COIN_KEY_LIST[3]] += 1;
  }
  return coinObject;
}

function pickRandomNumber() {
  return MissionUtils.Random.pickNumberInList(COIN_LIST);
}

export default function createRandomCoinCount(vendingCoin) {
  let coinObject = initCoinObject();
  while (vendingCoin > 0) {
    if (vendingCoin === 0) break;
    const coin = pickRandomNumber();
    if (coin <= vendingCoin) {
      vendingCoin -= coin;
      coinObject = setCoinObject(coinObject, coin);
    }
  }
  return coinObject;
}
