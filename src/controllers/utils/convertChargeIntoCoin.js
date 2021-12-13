/* eslint-disable no-undef */
import { default as DB } from '../../model/database.js';
import { STORAGE } from '../../constants/constants.js';

const convertChargeIntoCoin = charge => {
  const coinWallet = DB.load(STORAGE.COIN.NAME);

  DB.overwrite(STORAGE.COIN.NAME, updateCoinWallet(charge, coinWallet));
};

const updateCoinWallet = (charge, coinWallet) => {
  const addRandomCoin = array => {
    const number = MissionUtils.Random.pickNumberInList(array);
    coinWallet[STORAGE.COIN.NAME + number] += 1;
    charge -= number;
  };

  while (charge > 0) {
    if (charge >= 500) addRandomCoin([500, 100, 50, 10]);
    if (charge >= 100) addRandomCoin([100, 50, 10]);
    if (charge >= 50) addRandomCoin([50, 10]);
    if (charge >= 10) addRandomCoin([10]);
  }

  return coinWallet;
};

export default convertChargeIntoCoin;
