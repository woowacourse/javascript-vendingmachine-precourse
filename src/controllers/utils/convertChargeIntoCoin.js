/* eslint-disable no-undef */
import { default as DB } from '../../model/database.js';
import { STORAGE, COIN_ARRAY } from '../../constants/constants.js';

const convertChargeIntoCoin = charge => {
  const coinWallet = DB.load(STORAGE.COIN.NAME);

  DB.overwrite(STORAGE.COIN.NAME, updateCoinWallet(charge, coinWallet));
};

const updateCoinWallet = (charge, coinWallet) => {
  const data = { charge, coinWallet };

  while (data.charge > 0) tryCaseByCoinType(data);

  return data.coinWallet;
};

const tryCaseByCoinType = data => {
  COIN_ARRAY[500].forEach(coinType => tryCaseByCoinArray(coinType, data));
};

const tryCaseByCoinArray = (coinType, data) => {
  if (data.charge >= coinType) addRandomCoin(COIN_ARRAY[coinType], data);
};

const addRandomCoin = (array, data) => {
  const number = MissionUtils.Random.pickNumberInList(array);

  data.coinWallet[STORAGE.COIN.NAME + number] += 1;

  data.charge -= number;
};

export default convertChargeIntoCoin;
