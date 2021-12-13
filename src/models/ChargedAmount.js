import tc from '../core/utils/tc.js';

export default class ChargedAmount {
  constructor(amount, _ = tc(amount, 'number')) {
    this.amount = amount;
  }

  // TODO: 예외 처리
  charge(amount, _ = tc(amount, 'number')) {
    this.amount += amount;
  }

  // TODO: 예외 처리 (ex. 현재 충전 금액이 price보다 작음)
  purchase(price, _ = tc(price, 'number')) {
    this.amount -= price;

    return this.amount;
  }

  returnChange(amount, _ = tc(amount, 'number')) {
    this.amount -= amount;

    return this.amount;
  }

  toString() {
    return `${this.amount}`;
  }

  flush() {
    this.amount = 0;
  }
}
