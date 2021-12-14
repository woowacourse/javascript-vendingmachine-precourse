import { ERROR } from '../configs/constants.js';

export default class ChargedAmount {
  constructor(amount) {
    this.amount = amount;
  }

  isPurchasable(price) {
    return price <= this.amount;
  }

  charge(amount) {
    this.amount += amount;
  }

  purchase(price) {
    if (!this.isPurchasable(price)) {
      throw new Error(ERROR.NOT_ENOUGH_MONEY);
    }

    this.amount -= price;

    return this.amount;
  }

  returnChange(amount) {
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
