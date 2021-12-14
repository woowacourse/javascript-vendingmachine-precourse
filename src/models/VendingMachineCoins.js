/* global MissionUtils */

import Coins from './Coins.js';
import { COINAGE } from '../configs/constants.js';

export default class VendingMachineCoins extends Coins {
  static convertToRandomCoins(chargingAmount) {
    let remain = chargingAmount;
    const coins = new Coins();

    while (remain > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(COINAGE);

      if (remain - randomCoin >= 0) {
        remain -= randomCoin;
        coins.map.set(randomCoin, coins.map.get(randomCoin) + 1);
      }
    }

    return coins;
  }

  refill(chargeAmount) {
    const newCoins = VendingMachineCoins.convertToRandomCoins(chargeAmount);

    this.add(newCoins);
  }

  returnChange(amount) {
    const change = new Coins();
    const divisor = this.getKeys().sort((a, b) => a - b);
    let remain = amount;

    while (remain > 0 && divisor.length > 0) {
      const div = divisor.pop();
      const coinAmount = Math.min(
        parseInt(remain / div, 10),
        this.map.get(div)
      );

      change.map.set(div, coinAmount);
      remain -= coinAmount * div;
    }

    this.subtract(change);

    return { change, amount: amount - remain };
  }
}
