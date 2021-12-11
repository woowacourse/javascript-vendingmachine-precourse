import {
  COIN_500,
  COIN_100,
  COIN_50,
  COIN_10,
  COIN_ZERO,
  COIN_KEY_LIST,
} from '../constants/coinConstants.js';

function createRandomCount(item, vendingCoin) {
  const limit = Number(vendingCoin) / Number(item);
  let coinLimitList = [];
  for (let i = 0; i < limit + 1; i++) {
    coinLimitList.push(i);
  }
  return MissionUtils.Random.pickNumberInList(coinLimitList);
}

function createRandomCoinList(vendingCoin) {
  let coinListObject = {};
  const coinList = [COIN_500, COIN_100, COIN_50, COIN_10];
  const coinKeyList = COIN_KEY_LIST;
  for (let i = 0; i < coinList.length - 1; i++) {
    if (vendingCoin === COIN_ZERO) break;
    const count = createRandomCount(coinList[i], vendingCoin);
    vendingCoin = vendingCoin - count * Number(coinList[i]);
    coinListObject[coinKeyList[i]] = count;
  }
  coinListObject[coinKeyList[coinList.length - 1]] =
    vendingCoin / Number(COIN_10);
  return coinListObject;
}

export default function createRandomCoinCount(vendingCoin) {
  return createRandomCoinList(vendingCoin);
}
