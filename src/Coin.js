import { COIN_LIST, STORAGE_KEY } from './constants.js';
import countReturnedCoin from './utils/countReturnedCoin.js';
import pickNumberInList from './utils/pickNumberInList.js';
import * as storage from './utils/storage.js';

export default class Coin {
  constructor() {
    this.items = {};
    COIN_LIST.forEach((coin) => {
      this.items[coin] = 0;
    });
  }

  charge(price) {
    let current = price;

    while (current > 0) {
      const pickedCoin = pickNumberInList(COIN_LIST);
      if (pickedCoin <= current) {
        this.items[pickedCoin]++;
        current -= pickedCoin;
      }
    }
  }

  getAmount() {
    let amount = 0;
    for (let coinValue in this.items) {
      amount += Number(coinValue) * this.items[coinValue];
    }

    return amount;
  }

  getCoinQuantity() {
    return this.items;
  }

  takeOut(price) {
    let current = price;
    const coins = {};

    while (current > 0) {
      COIN_LIST.forEach((coin) => {
        const takeOutCoinQuantity = countReturnedCoin(current, coin, this.items[coin]);
        coins[coin] = takeOutCoinQuantity;
        this.items[coin] -= takeOutCoinQuantity;
        current -= coin * takeOutCoinQuantity;
      });
    }

    return coins;
  }

  save() {
    storage.save(STORAGE_KEY.coin, this.items);
  }

  initialize() {
    if (storage.find(STORAGE_KEY.coin)) {
      this.items = storage.find(STORAGE_KEY.coin);
    }
  }
}
