import { DEFAULT_VALUES } from './constants.js';

export const changeStoreInitialState = {
  changes: DEFAULT_VALUES.CHANGES,
  coins: DEFAULT_VALUES.COINS,
};

export const productStoreInitialState = {
  products: DEFAULT_VALUES.PRODUCTS,
};

export const userStoreInitialState = {
  chargedMoney: DEFAULT_VALUES.CHARGED_MONEY,
  coins: DEFAULT_VALUES.COINS,
};
