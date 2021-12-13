export default class MoneyStatus {
  constructor() {
    this.money = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    this.clientMoney = 0;
  }

  putMoney(inputMoney) {
    while (inputMoney) {
      const coin = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);

      if (inputMoney >= coin) {
        inputMoney -= coin;
        this.money[coin] += 1;
      }
    }
  }

  getAmount() {
    let sumCoin = 0;

    for (let coin in this.money) {
      sumCoin += coin * this.money[coin];
    }
    return sumCoin;
  }
}
