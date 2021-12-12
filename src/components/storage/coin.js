import { STORAGE_NAME } from '../../utils/constants.js';

export const getChargeStorage = () => {
  const chargedCoin = localStorage.getItem(STORAGE_NAME.COIN);
  return JSON.parse(chargedCoin);
};

export const setChargeStorage = (convertedCoins) => {
  localStorage.setItem(STORAGE_NAME.COIN, JSON.stringify(convertedCoins));
};
