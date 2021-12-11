import State from './State.js';
import { CONFIG, DEFAULT_VALUE } from '../constants/config.js';

export const CoinState = new State(
  DEFAULT_VALUE.COINS,
  CONFIG.STORAGE_KEY_COINS
);

export const ProductState = new State(
  DEFAULT_VALUE.PRODUCT,
  CONFIG.STORAGE_KEY_PRODUCT
);

export const ChargeState = new State(
  DEFAULT_VALUE.CHARGE_AMOUNT,
  CONFIG.STORAGE_KEY_CHARGE_AMOUNT
);
