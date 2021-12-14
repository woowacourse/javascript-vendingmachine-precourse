import { COIN, NUMBER } from '../constants/constants.js';

function getNumber() {
  return MissionUtils.Random.pickNumberInList([
    COIN.NUMBER.COIN_500,
    COIN.NUMBER.COIN_100,
    COIN.NUMBER.COIN_50,
    COIN.NUMBER.COIN_10,
  ]);
}

export default function coinGenerator(coinObject, chargeValue) {
  let sumCoins = NUMBER.ZERO;

  while (chargeValue !== sumCoins) {
    const pickNumber = getNumber();
    if (sumCoins + pickNumber <= chargeValue) {
      sumCoins += pickNumber;
      coinObject[pickNumber]++;
    }
  }
  return coinObject;
}
