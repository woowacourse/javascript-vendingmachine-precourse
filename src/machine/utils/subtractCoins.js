import { COINS } from '../const.js';

function subtractCoins(oldCoins, newCoins) {
  return COINS.reduce(
    (acc, coin) => ({ ...acc, [coin]: oldCoins[coin] - newCoins[coin] }),
    {}
  );
}

export default subtractCoins;
