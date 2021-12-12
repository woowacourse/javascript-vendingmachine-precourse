import { convertArrayToObjectKeys } from './general.js';

const DEFAULT = {
  CHANGES: 0,
  CHARGED_MONEY: 0,
  PRODUCTS: [],
  COINS: convertArrayToObjectKeys(COIN_UNITS),
};

export const changeStoreInitialState = {
  changes: DEFAULT.CHANGES,
  coins: DEFAULT.COINS,
};

export const productStoreInitialState = {
  products: DEFAULT.PRODUCTS,
};

export const userStoreInitialState = {
  chargedMoney: DEFAULT.CHARGED_MONEY,
  coins: DEFAULT.COINS,
};
