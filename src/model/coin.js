import { NUMBER } from '../constants/constants.js';

export default class Coin {
  constructor(unit, amount) {
    this.unit = unit;
    this.amount = amount;
    this.accumulatedAmount = NUMBER.ZERO;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  accumulate(amount) {
    this.accumulatedAmount += amount;
  }

  addAmount() {
    this.amount += this.accumulatedAmount;

    this.resetAccumulatedAmount();
  }

  resetAccumulatedAmount() {
    this.accumulatedAmount = NUMBER.ZERO;
  }
}
