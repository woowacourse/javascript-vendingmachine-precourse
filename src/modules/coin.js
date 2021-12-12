import { COINS_KEY } from '../lib/constants.js';

class Coin {
  static getRandomCoins(charge) {
    let tempCharge = charge;

    const randomCoins = {
      [`${COINS_KEY[500]}`]: 0,
      [`${COINS_KEY[100]}`]: 0,
      [`${COINS_KEY[50]}`]: 0,
      [`${COINS_KEY[10]}`]: 0,
    };
    while (tempCharge !== 0) {
      const randomCoin = window.MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);

      if (tempCharge - randomCoin >= 0) {
        randomCoins[COINS_KEY[randomCoin]]++;
        tempCharge -= randomCoin;
      }
    }

    return randomCoins;
  }
}
export default Coin;
