/* global MissionUtils */

import Coins from './Coins.js';

export default class VendingMachineCoins extends Coins {
  // TODO: 예외 처리
  refill(chargeAmount) {
    const newCoins = VendingMachineCoins.convertToRandomCoins(chargeAmount);

    this.add(newCoins);
  }

  returnChange(amount) {
    const change = new Coins();
    const divisor = [...this.keys];
    let remain = amount;

    // TODO: array 비어있는 여부 조사 좀더 좋은 방법 찾기, 타입체크도 리팩터링
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

  static convertToRandomCoins(chargingAmount) {
    let remain = chargingAmount;
    const coins = new Coins();

    while (remain > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList([
        500, 100, 50, 10,
      ]);

      if (remain - randomCoin >= 0) {
        remain -= randomCoin;
        coins.map.set(randomCoin, coins.map.get(randomCoin) + 1);
      }
    }

    return coins;
  }
}
