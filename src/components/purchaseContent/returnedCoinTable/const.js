import { COINS } from '../../../machine/const.js';

export const ID_TABLE_RETURNED_COIN = 'returned-coin-table';
export const ID_COIN_QUANTITY = COINS.reduce(
  (acc, coin) => ({
    ...acc,
    [coin]: `coin-${coin}-quantity`,
  }),
  {}
);
