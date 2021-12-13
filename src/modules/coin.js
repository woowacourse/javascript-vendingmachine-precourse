import { COIN_KEYS, FIFTY, FIVE_HUNDRED, ONE_HUNDRED, TEN } from '../lib/constants.js';

class Coin {
  static getRandomCoins(charge) {
    let tempCharge = charge;

    const randomCoins = {
      [`${FIVE_HUNDRED}`]: 0,
      [`${ONE_HUNDRED}`]: 0,
      [`${FIFTY}`]: 0,
      [`${TEN}`]: 0,
    };
    while (tempCharge !== 0) {
      const randomCoin = window.MissionUtils.Random.pickNumberInList([
        FIVE_HUNDRED,
        ONE_HUNDRED,
        FIFTY,
        TEN,
      ]);

      if (tempCharge - randomCoin >= 0) {
        randomCoins[`${randomCoin}`] = randomCoins[`${randomCoin}`] + 1;
        tempCharge -= randomCoin;
      }
    }

    return randomCoins;
  }

  static getCoinsAmount(coins) {
    return Object.keys(coins)
      .map((KEY) => Coin.getCoinAmount(KEY))
      .reduce((aCoin, bCoin) => aCoin + bCoin);
  }

  static getCoinAmount(KEY) {
    return this.coins[KEY] * Number(KEY);
  }

  static mostKeyRemainCoin(coins, check) {
    return COIN_KEYS.find((KEY) => coins[KEY] !== 0 && check >= Number(KEY));
  }

  static generateReturnCoin(chargeAmount, coins) {
    let tempChargeAmount = chargeAmount;
    const tempCoins = { ...coins };
    const returnCoins = {
      [`${FIVE_HUNDRED}`]: 0,
      [`${ONE_HUNDRED}`]: 0,
      [`${FIFTY}`]: 0,
      [`${TEN}`]: 0,
    };

    while (true) {
      if (tempChargeAmount === 0) {
        break;
      }

      const mostKey = Coin.mostKeyRemainCoin(tempCoins, tempChargeAmount);
      if (mostKey === undefined) {
        break;
      }

      returnCoins[mostKey] = returnCoins[mostKey] + 1;
      tempCoins[mostKey] = tempCoins[mostKey] - 1;
      tempChargeAmount = tempChargeAmount - mostKey;
    }

    return { returnCoins, chargeAmount: tempChargeAmount, coins: tempCoins };
  }
}
export default Coin;
