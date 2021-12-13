import { COINS_DEFAULT_VALUE, COINS_KEY_ARRAY, COIN_KEYS } from '../lib/constants.js';

class Coin {
  static getRandomCoins(charge) {
    let tempCharge = charge;

    const randomCoins = COINS_DEFAULT_VALUE;
    while (tempCharge !== 0) {
      const randomCoin = window.MissionUtils.Random.pickNumberInList(COINS_KEY_ARRAY);

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

  static computeReturnCoin(chargeAmount, coins) {
    let tempChargeAmount = chargeAmount;
    const tempCoins = { ...coins };
    const returnCoins = COINS_DEFAULT_VALUE;

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
