import { COINS_KEY_ARRAY, FIFTY, FIVE_HUNDRED, ONE_HUNDRED, TEN } from '../lib/constants.js';
import { isCoinGreatherThanZero, isCoinValueLessThanChargeAmount } from '../lib/utils.js';

class Coin {
  static getDefaultCoins() {
    return { [`${FIVE_HUNDRED}`]: 0, [`${ONE_HUNDRED}`]: 0, [`${FIFTY}`]: 0, [`${TEN}`]: 0 };
  }

  static getRandomCoins(charge) {
    let tempCharge = charge;

    const randomCoins = Coin.getDefaultCoins();
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
      .map((KEY) => Coin.getCoinAmount(coins[KEY], KEY))
      .reduce((aCoin, bCoin) => aCoin + bCoin);
  }

  static getCoinAmount(quantity, KEY) {
    return quantity * Number(KEY);
  }

  static mostBiggestCoinOfRemainCoin(coins, chargeAmount) {
    return COINS_KEY_ARRAY.find(
      (KEY) =>
        isCoinGreatherThanZero(coins[KEY]) &&
        isCoinValueLessThanChargeAmount(Number(KEY), chargeAmount)
    );
  }

  static returnCoin(returnCoins, tempCoins, tempChargeAmount, mostBiggestCoin) {
    returnCoins[mostBiggestCoin] = returnCoins[mostBiggestCoin] + 1;
    tempCoins[mostBiggestCoin] = tempCoins[mostBiggestCoin] - 1;
    return tempChargeAmount - mostBiggestCoin;
  }

  static computeReturnCoin(chargeAmount, coins) {
    let tempChargeAmount = chargeAmount;
    const tempCoins = { ...coins };
    const returnCoins = Coin.getDefaultCoins();
    while (tempChargeAmount !== 0) {
      const mostBiggestCoin = Coin.mostBiggestCoinOfRemainCoin(tempCoins, tempChargeAmount);

      if (mostBiggestCoin === undefined) {
        break;
      }
      tempChargeAmount = Coin.returnCoin(returnCoins, tempCoins, tempChargeAmount, mostBiggestCoin);
    }
    return { returnCoins, chargeAmount: tempChargeAmount, coins: tempCoins };
  }
}
export default Coin;
