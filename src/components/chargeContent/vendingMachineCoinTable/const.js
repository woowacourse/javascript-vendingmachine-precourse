import { COINS } from '../../../machine/const.js';

const ID_PREFIX = 'vending-machine-coin';
const ID_SUFFIX = 'quantity';

export const ID_TABLE_CHARGED_COIN = `${ID_PREFIX}-table`;
export const ID_COIN_QUANTITY = COINS.reduce(
  (acc, coin) => ({ ...acc, [coin]: `${ID_PREFIX}-${coin}-${ID_SUFFIX}` }),
  {}
);
