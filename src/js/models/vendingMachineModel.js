import { PRICE } from '../utils/constants.js';

const getRandomCoin = () => {
  return MissionUtils.Random.pickNumberInList([PRICE.FIVE_HUNDRED_WON, PRICE.ONE_HUNDRED_WON, PRICE.FIFTY_WON, PRICE.TEN_WON]);
};

const countCoin = (coin, coins) => {
  if (coin === PRICE.FIVE_HUNDRED_WON) {
    coins.fiveHundred += 1;
  } else if (coin === PRICE.ONE_HUNDRED_WON) {
    coins.oneHundred += 1;
  } else if (coin === PRICE.FIFTY_WON) {
    coins.fifty += 1;
  } else if (coin === PRICE.TEN_WON) {
    coins.ten += 1;
  }
};

export const chargeMoney = (chargeInput, coins) => {
  coins.amount += chargeInput;

  while (chargeInput) {
    const coin = getRandomCoin();
    if (coin > chargeInput) {
      continue;
    }
    countCoin(coin, coins);
    chargeInput -= coin;
  }
  return coins;
};

export function Coin() {
  this.amount = 0;
  this.fiveHundred = 0;
  this.oneHundred = 0;
  this.fifty = 0;
  this.ten = 0;
}
