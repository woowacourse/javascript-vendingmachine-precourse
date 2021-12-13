import { COIN_LIST, NUMBER } from './constants/constants.js';

export const getRandomCoins = () => {
  const randomCoin = MissionUtils.Random.pickNumberInList(COIN_LIST);

  return randomCoin;
};

export const getRandomCoinsAmongList = (money) => {
  const coinList = { 500: 0, 100: 0, 50: 0, 10: 0 };

  while (money) {
    const coin = getRandomCoins();
    if (money - coin < NUMBER.ZERO) continue;

    money -= coin; // 빼준 coin number ++
    coinList[coin]++;
  }

  return coinList;
};

export const returnChangesinCoins = (money, coinList) => {
  const exchangeCoin = { 500: 0, 100: 0, 50: 0, 10: 0 };
  const changesList = COIN_LIST;

  for (const coin of changesList) {
    for (let idx = 0; idx < coinList[coin]; idx++) {
      if (money - coin < NUMBER.ZERO) break;
      money -= coin;
      exchangeCoin[coin]++;
    }
  }

  return exchangeCoin;
};
