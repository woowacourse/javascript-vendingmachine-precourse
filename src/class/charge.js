export default class Charge {
  static amount = 0;
  static coins = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };

  static moneyToCoin(money) {
    Charge.amount = money;

    let currentMoney = money;
    while (currentMoney > 0) {
      let coin = Charge.randomCoin(currentMoney);

      currentMoney -= coin;
      if (coin != 0) {
        Charge.coins[coin] += 1;
      }
    }

    console.log(Charge.amount, Charge.coins);
  }

  static randomCoin(money) {
    const coins = [500, 100, 50, 10];

    let randomCoin = MissionUtils.Random.pickNumberInList(coins);

    return randomCoin <= money ? randomCoin : 0;
  }

  static initCharge() {
    Charge.amount = 0;
    Charge.coins = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
  }
}
