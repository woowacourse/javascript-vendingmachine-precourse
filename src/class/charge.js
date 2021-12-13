import { COINS } from '../constants/data.js';
import { vendingMachine } from '../index.js';

export default class Charge {
  static chargeVendingMachine(money) {
    vendingMachine.amount += money;
    Charge.moneyToCoin(money);
  }

  static moneyToCoin(money) {
    let currentMoney = money;

    while (currentMoney > 0) {
      let coin = Charge.randomCoin(currentMoney);

      currentMoney -= coin;
      if (coin) {
        vendingMachine.coins[coin] += 1;
      }
    }
  }

  static randomCoin(money) {
    let randomCoin = MissionUtils.Random.pickNumberInList(COINS);

    return randomCoin <= money ? randomCoin : 0;
  }
}
