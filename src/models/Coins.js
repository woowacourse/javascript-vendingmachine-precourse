import { COINAGE, EMPTY_COINS } from '../configs/constants.js';

export default class Coins {
  constructor(coins = EMPTY_COINS) {
    this.keys = COINAGE;
    this.map = new Map();
    this.keys.forEach((key) => this.map.set(key, coins[key]));
  }

  getKeys() {
    return [...this.keys];
  }

  sum() {
    return this.keys.reduce((acc, key) => acc + key * this.map.get(key), 0);
  }

  add(coins) {
    this.keys.forEach((key) =>
      this.map.set(key, this.map.get(key) + coins.map.get(key))
    );
  }

  subtract(coins) {
    this.keys.forEach((key) =>
      this.map.set(key, this.map.get(key) - coins.map.get(key))
    );
  }

  toObject() {
    const object = {};
    this.keys.forEach((key) => {
      object[key.toString()] = this.map.get(key);
    });

    return object;
  }
}
