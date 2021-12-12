import { COINS } from '../const.js';

function generateZeroCoins() {
  return COINS.reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});
}

export default generateZeroCoins;
