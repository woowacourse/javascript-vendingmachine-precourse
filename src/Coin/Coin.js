export default class Coin {
  static instance;
  constructor() {
    if (this.instance) return this.instance;
    this.amountCost = 0;
    this.currentCoin = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    this.instance = this;
  }

  additionalInputCoin(inputCoin) {
    this.amountCost += inputCoin;
    return this.amountCost;
  }
}
