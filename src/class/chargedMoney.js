export default class ChargedMoney {
  constructor() {
    this.amount = 0;
  }

  setAmount(money) {
    this.amount = Math.max(0, money);
  }

  getAmount() {
    return this.amount;
  }

  decreaseAmount(money) {
    this.amount -= money;
    this.amount = Math.max(0, this.amount);
  }

  incrementAmount(money) {
    this.amount += money;
  }
}
