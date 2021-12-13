import { COINS } from '../const.js';

function addCoins(oldCoins, newCoins) {
  return COINS.reduce(
    (acc, coin) => ({ ...acc, [coin]: oldCoins[coin] + newCoins[coin] }),
    {}
  );
}

export default addCoins;
