import { COINS_KEY_ARRAY, FIFTY, FIVE_HUNDRED, ONE_HUNDRED, TEN } from '../lib/constants.js';
import {
  isChargeIsGreatherThanZero,
  isCoinGreatherThanZero,
  isCoinValueLessThanChargeAmount,
  isNotFindMostBiggestCoin,
  isPossibleRandomCoin,
} from '../lib/utils.js';

class Coin {
  static getDefaultCoins() {
    return { [`${FIVE_HUNDRED}`]: 0, [`${ONE_HUNDRED}`]: 0, [`${FIFTY}`]: 0, [`${TEN}`]: 0 };
  }

  static getRandomCoins(charge) {
    let tempCharge = charge;
    const randomCoins = this.getDefaultCoins();

    while (isChargeIsGreatherThanZero(tempCharge)) {
      const randomCoin = window.MissionUtils.Random.pickNumberInList(COINS_KEY_ARRAY);

      if (isPossibleRandomCoin(tempCharge, randomCoin)) {
        randomCoins[randomCoin] = randomCoins[randomCoin] + 1;
        tempCharge -= randomCoin;
      }
    }

    return randomCoins;
  }

  /** 동전들의 총합을 구합니다 */
  static getCoinsAmount(coins) {
    return Object.keys(coins)
      .map((KEY) => this.getCoinAmount(coins[KEY], KEY))
      .reduce((aCoin, bCoin) => aCoin + bCoin);
  }

  static getCoinAmount(quantity, KEY) {
    return quantity * Number(KEY);
  }

  /** 남은 코인들 중 0개가 아니면서 chargeAmount보다 작은 코인을 찾습니다 */
  static findMostBiggestCoinOfRemainCoin(coins, chargeAmount) {
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

  /** 반환되는 코인들을 계산하여 리턴합니다. */
  static computeReturnCoin(chargeAmount, coins) {
    let tempChargeAmount = chargeAmount;
    const tempCoins = { ...coins };
    const returnCoins = this.getDefaultCoins();
    while (isChargeIsGreatherThanZero(tempChargeAmount)) {
      const mostBiggestCoin = this.findMostBiggestCoinOfRemainCoin(tempCoins, tempChargeAmount);
      if (isNotFindMostBiggestCoin(mostBiggestCoin)) {
        break;
      }
      tempChargeAmount = this.returnCoin(returnCoins, tempCoins, tempChargeAmount, mostBiggestCoin);
    }
    return { returnCoins, chargeAmount: tempChargeAmount, coins: tempCoins };
  }
}
export default Coin;
