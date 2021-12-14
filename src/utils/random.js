import { $coinList } from "../constant.js";

export const getRandomCoinArray = (amount) => {
  const coinObj = {
    10: 0,
    50: 0,
    100: 0,
    500: 0,
  };

  let coinList = $coinList;
  while (amount) {
    coinList = coinList.filter((coin) => coin <= amount);
    const randomCoin = MissionUtils.Random.pickNumberInList(coinList);
    coinObj[randomCoin]++;
    amount -= randomCoin;
  }

  return Object.values(coinObj);
};
