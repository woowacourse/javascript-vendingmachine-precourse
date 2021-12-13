export default class Coin {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }

  increaseAmount() {
    this.amount += 1;
  }

  resetAmountToZero() {
    this.amount = 0;
  }
}
