import { COIN_LIST } from './constants.js';

const getRandomCoin = () => {
  return MissionUtils.Random.pickNumberInList(COIN_LIST);
};

export const getRandomCoinList = (chargeInputValue) => {
  const randomCoinList = { 500: 0, 100: 0, 50: 0, 10: 0 };
  let sum = 0;

  while (chargeInputValue !== sum) {
    const number = getRandomCoin();

    if (sum + number > chargeInputValue) {
      continue;
    }

    randomCoinList[number] += 1;
    sum += number;
  }

  return randomCoinList;
};
