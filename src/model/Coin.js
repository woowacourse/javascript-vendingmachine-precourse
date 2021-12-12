export default class Coin {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }

  increaseAmount(count) {
    this.amount += count;
  }
}
