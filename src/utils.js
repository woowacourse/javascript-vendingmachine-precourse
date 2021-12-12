import { coinChargeInputValue } from './controller/vending-machine-charge/input-validator.js';

export const getRandomCoins = () => {
  const randomCoin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);

  return randomCoin;
};

export const insertRandomAmountCoins = (amount) => {
  const moneyCharged = coinChargeInputValue();
  let count = 0;
  const randomCoin = getRandomCoins();
  amount = 3000;

  count += Math.floor(amount / randomCoin);
  amount -= Math.floor(amount / randomCoin);

  return count;
};
