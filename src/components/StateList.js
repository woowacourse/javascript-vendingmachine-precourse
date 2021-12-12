import State from '../core/State.js';
import { CONFIG, DEFAULT_VALUE } from '../constants/config.js';

export const $coinState = new State(
  DEFAULT_VALUE.COINS,
  CONFIG.STORAGE_KEY_COINS
);

export const $productState = new State(
  DEFAULT_VALUE.PRODUCT,
  CONFIG.STORAGE_KEY_PRODUCT
);

export const $chargeState = new State(
  DEFAULT_VALUE.CHARGE_AMOUNT,
  CONFIG.STORAGE_KEY_CHARGE_AMOUNT
);
