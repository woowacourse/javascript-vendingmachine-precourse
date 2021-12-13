export default class Coin {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }

  increaseAmount(increaseCount) {
    this.amount += increaseCount;
  }

  decreaseAmount(decreaseCount) {
    this.amount -= decreaseCount;
  }

  resetAmountToZero() {
    this.amount = 0;
  }
}
