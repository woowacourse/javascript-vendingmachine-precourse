export default class Coin {
  constructor(type, count) {
    this.type = type;
    this.count = count;
  }

  increaseCount(count) {
    this.count += count;
  }

  decreaseCount(count) {
    this.count -= count;
  }

  resetCountToZero() {
    this.count = 0;
  }
}
