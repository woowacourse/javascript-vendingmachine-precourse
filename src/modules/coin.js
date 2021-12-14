import { COINS_KEY_ARRAY } from '../lib/constants.js';
import { getInitilizeCoins } from '../lib/utils.js';

class Coin {
  static getRandomCoins(charge) {
    let tempCharge = charge;

    const randomCoins = getInitilizeCoins();
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

  static mostBiggestCoinRemainCoin(coins, check) {
    return COINS_KEY_ARRAY.find((KEY) => coins[KEY] !== 0 && check >= Number(KEY));
  }

  static returnCoin(returnCoins, tempCoins, tempChargeAmount, mostBiggestCoin) {
    returnCoins[mostBiggestCoin] = returnCoins[mostBiggestCoin] + 1;
    tempCoins[mostBiggestCoin] = tempCoins[mostBiggestCoin] - 1;
    return tempChargeAmount - mostBiggestCoin;
  }

  static computeReturnCoin(chargeAmount, coins) {
    let tempChargeAmount = chargeAmount;
    const tempCoins = { ...coins };
    const returnCoins = getInitilizeCoins();
    while (tempChargeAmount !== 0) {
      const mostBiggestCoin = Coin.mostBiggestCoinRemainCoin(tempCoins, tempChargeAmount);

      if (mostBiggestCoin === undefined) {
        break;
      }

      tempChargeAmount = Coin.returnCoin(returnCoins, tempCoins, tempChargeAmount, mostBiggestCoin);
    }
    return { returnCoins, chargeAmount: tempChargeAmount, coins: tempCoins };
  }
}
export default Coin;
