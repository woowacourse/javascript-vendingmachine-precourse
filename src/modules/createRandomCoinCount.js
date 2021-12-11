import renderTotalCoinElement from '../views/renderTotalCoinElement.js';
import getTotalVendingCoin from './getTotalVendingCoin.js';
import {
  COIN_500,
  COIN_100,
  COIN_50,
  COIN_10,
  COIN_ZERO,
} from '../constants/coinConstants.js';

function createRandomCount(item, totalCoin) {
  const limit = Number(totalCoin) / Number(item);
  let coinLimitList = [];
  for (let i = 0; i < limit + 1; i++) {
    coinLimitList.push(i);
  }
  return MissionUtils.Random.pickNumberInList(coinLimitList);
}

function createRandomCoinList(totalCoin) {
  let coinListObject = {};
  let coinList = [COIN_500, COIN_100, COIN_50];
  for (let i = 0; i < coinList.length; i++) {
    if (totalCoin === COIN_ZERO) break;
    const count = createRandomCount(coinList[i], totalCoin);
    totalCoin = totalCoin - count * Number(coinList[i]);
    coinListObject[coinList[i]] = count;
  }
  if (totalCoin !== COIN_ZERO) {
    coinListObject[COIN_10] = totalCoin / Number(COIN_10);
  }
  return coinListObject;
}

export default function createRandomCoinCount(vendingCoin) {
  let totalCoin = Number(getTotalVendingCoin()) + Number(vendingCoin);
  renderTotalCoinElement(totalCoin);
  console.log(createRandomCoinList(totalCoin));
}
