export default class Coin {
  static instance;

  constructor() {
    if (Coin.instance) return Coin.instance;
    this.amountCost = 0;
    this.currentCoin = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    Coin.instance = this;
  }

  additionalInputCoin(inputCoin) {
    this.amountCost += inputCoin;
    this.addCoin(inputCoin);
    return this.amountCost;
  }

  addCoin(inputCoin) {
    let changeToCoinCost = inputCoin;
    while (true) {
      if (changeToCoinCost == 0) break;
      let coin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
      if (changeToCoinCost < coin) continue;
      changeToCoinCost -= coin;
      if (coin == 500) this.currentCoin[500] += 1;
      if (coin == 100) this.currentCoin[100] += 1;
      if (coin == 50) this.currentCoin[50] += 1;
      if (coin == 10) this.currentCoin[10] += 1;
    }
  }

  getCoin() {
    return this.currentCoin;
  }
}
