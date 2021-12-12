import { COIN_UNITS } from './constants.js';
import { convertArrayToObjectKeys } from './general.js';

export const changeStoreInitialState = {
  changes: 0,
  coins: convertArrayToObjectKeys(COIN_UNITS),
};

export const productStoreInitialState = {
  products: [],
};

export const userStoreInitialState = {
  chargedMoney: 0,
  coins: convertArrayToObjectKeys(COIN_UNITS),
};
