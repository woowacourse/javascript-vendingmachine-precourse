import { COIN_LIST, LOCAL_DB } from '../constants/index.js';
import { getLocalStorage } from './localStorage.js';

export const getRandomCoinArray = amount => {
  const coinObj = { 10: 0, 50: 0, 100: 0, 500: 0 };

  let coinList = COIN_LIST;
  while (amount) {
    coinList = coinList.filter(coin => coin <= amount);
    const randomCoin = MissionUtils.Random.pickNumberInList(coinList);
    coinObj[randomCoin]++;
    amount -= randomCoin;
  }

  return Object.values(coinObj).reverse();
};

export const getReturnCoinArray = amount => {
  const machineCoins = getLocalStorage(LOCAL_DB.COIN);
  let returnCoinArray = [];

  machineCoins.forEach(coin => {
    let needCoinCount = Math.floor(amount / coin.name);
    if (needCoinCount > coin.count) {
      needCoinCount = coin.count;
    }
    amount -= coin.name * needCoinCount;
    returnCoinArray.push(needCoinCount);
  });

  return returnCoinArray;
};
