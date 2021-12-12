import { COIN } from '../constants/index.js';

export const pickRandomCoin = () => {
  return MissionUtils.Random.pickNumberInList([
    COIN.VALUE_500,
    COIN.VALUE_100,
    COIN.VALUE_50,
    COIN.VALUE_10,
  ]);
};
