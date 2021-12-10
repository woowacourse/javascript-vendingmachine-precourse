/* eslint-disable no-undef */
import { default as DB } from '../model/database.js';

const convertChargeIntoCoin = charge => {
  const coinWallet = DB.load('vendingMachineCoins');

  DB.overwrite('vendingMachineCoins', updateCoinWallet(charge, coinWallet));
};

const updateCoinWallet = (charge, coinWallet) => {
  const addRandomCoin = array => {
    const number = MissionUtils.Random.pickNumberInList(array);
    coinWallet['coin' + number] += 1;
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
