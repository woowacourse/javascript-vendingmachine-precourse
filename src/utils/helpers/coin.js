import { convertObjectToArray } from '../general.js';
import { COIN_UNITS, DEFAULT_VALUES } from '../constants.js';

export const generateRandomCoins = money => {
  const coins = DEFAULT_VALUES.COINS();
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

export const generateChangesCoin = (change, coins) => {
  const changeCoins = DEFAULT_VALUES.COINS();
  const machineCoins = { ...coins };
  let restChange = change;
  let index = 0;
  while (restChange > 0 && index < COIN_UNITS.length) {
    const coinUnit = COIN_UNITS[index];
    if (machineCoins[coinUnit] === 0 || coinUnit > restChange) index += 1;
    else if (restChange >= coinUnit) {
      changeCoins[coinUnit] += 1;
      machineCoins[coinUnit] -= 1;
      restChange -= coinUnit;
    }
  }
  return { changeCoins, machineCoins };
};

export const mergeCoins = (originCoins, newCoins) => {
  const mergedCoins = {};
  for (const [unit, quantity] of convertObjectToArray(originCoins)) {
    mergedCoins[unit] = quantity + newCoins[unit];
  }
  return mergedCoins;
};
