import { COIN_UNITS } from './constants.js';
import { convertArrayToObjectKeys } from './general.js';

export const createRandomChanges = money => {
  const coins = convertArrayToObjectKeys(COIN_UNITS);
  let restMoney = money;
  while (restMoney > 0) {
    const unit = MissionUtils.Random.pickNumberInList(COIN_UNITS);
    if (restMoney - unit >= 0) {
      restMoney -= unit;
      coins[unit] += 1;
    }
  }
  return coins;
};

export const mergeCoins = (originCoins, newCoins) => {
  const mergedCoins = {};
  for (const [unit, quantity] of Object.entries(originCoins)) {
    mergedCoins[unit] = quantity + newCoins[unit];
  }
  return mergedCoins;
};
