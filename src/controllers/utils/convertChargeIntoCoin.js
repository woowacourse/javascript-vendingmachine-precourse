/* eslint-disable no-undef */
import { default as DB } from '../../model/database.js';
import { STORAGE, COIN_ARRAY, COIN_TYPE } from '../../constants/constants.js';

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
    if (charge >= COIN_TYPE[500]) addRandomCoin(COIN_ARRAY[500]);
    if (charge >= COIN_TYPE[100]) addRandomCoin(COIN_ARRAY[100]);
    if (charge >= COIN_TYPE[50]) addRandomCoin(COIN_ARRAY[50]);
    if (charge >= COIN_TYPE[10]) addRandomCoin(COIN_ARRAY[10]);
  }

  return coinWallet;
};

export default convertChargeIntoCoin;
