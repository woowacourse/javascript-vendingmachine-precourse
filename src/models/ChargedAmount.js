export default class ChargedAmount {
  constructor(store, amount) {
    this.store = store;
    this.amount = amount;
  }

  // TODO: 예외 처리
  charge(amount) {
    this.store.updateCharge(this.amount + amount);
    this.amount += amount;

    return this;
  }

  // TODO: 예외 처리 (ex. 현재 충전 금액이 price보다 작음)
  purchase(price) {
    this.store.updateCharge(this.amount - price);
    this.amount -= price;

    return this;
  }

  toString() {
    return `${this.amount}`;
  }
}
