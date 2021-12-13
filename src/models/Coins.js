import tc from '../core/utils/tc.js';

export default class Coins {
  constructor(
    coins = { '500': 0, '100': 0, '50': 0, '10': 0 },
    _ = tc(coins, 'object')
  ) {
    this.map = new Map();
    this.keys = [500, 100, 50, 10];
    this.keys.forEach((key) => this.map.set(key, coins[key]));
  }

  sum() {
    return this.keys.reduce((acc, key) => acc + key * this.map.get(key), 0);
  }

  add(coins, _ = tc(coins, Coins)) {
    this.keys.forEach((key) =>
      this.map.set(key, this.map.get(key) + coins.map.get(key))
    );
  }

  subtract(coins, _ = tc(coins, Coins)) {
    this.keys.forEach((key) =>
      this.map.set(key, this.map.get(key) - coins.map.get(key))
    );
  }

  toObject() {
    return {
      '500': this.map.get(500),
      '100': this.map.get(100),
      '50': this.map.get(50),
      '10': this.map.get(10),
    };
  }
}
