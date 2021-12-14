import { EXCEPTIONS } from '../configs/constants.js';
import tc from '../core/utils/tc.js';

export default class ChargedAmount {
  constructor(amount, _ = tc(amount, 'number')) {
    this.amount = amount;
  }

  isPurchasable(price) {
    return price <= this.amount;
  }

  // TODO: 예외 처리
  charge(amount, _ = tc(amount, 'number')) {
    this.amount += amount;
  }

  purchase(price, _ = tc(price, 'number')) {
    if (!this.isPurchasable(price)) {
      throw EXCEPTIONS.NOT_ENOUGH_MONEY;
    }

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
