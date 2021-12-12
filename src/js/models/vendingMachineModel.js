import { CHARGE, ERROR, PRICE } from '../utils/constants.js';

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

export const isValidCharge = chargeInput => {
  if (chargeInput === '') {
    alert(ERROR.CHARGE_BLANK);
    return false;
  }
  if (Number(chargeInput) < CHARGE.LEAST_INPUT_PRICE) {
    alert(ERROR.CHARGE_LEAST_TEN);
    return false;
  }
  if (Number(chargeInput % PRICE.TEN_WON !== 0)) {
    alert(ERROR.CHARGE_SHOULD_DIVIDED_INTO_TEN);
    return false;
  }
  return true;
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
