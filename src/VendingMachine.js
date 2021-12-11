import { STORAGE_KEY } from './constants.js';
import Product from './Product.js';
import Coin from './Coin.js';
import * as storage from './storage.js';

export default class VendingMachine {
  constructor() {
    this.product = new Product();
    this.coin = new Coin();
    this.amount = 0;
  }

  insertMoney(money) {
    this.amount += money;
    this.save();
  }

  getMoney() {
    return this.amount;
  }

  getProductPrice(productName) {
    return this.product.getProductPrice(productName);
  }

  sell(productName) {
    this.amount -= this.product.getProductPrice(productName);
    this.product.out(productName);
    this.save();
  }

  returnCoin() {
    const coins = this.coin.takeOut(this.amount);
    this.amount = 0;
    this.save();

    return coins;
  }

  save() {
    this.product.save();
    this.coin.save();
    storage.save(STORAGE_KEY.vendingMachine, this.amount);
  }

  initialize() {
    this.product.initialize();
    this.coin.initialize();

    if (storage.find(STORAGE_KEY.vendingMachine)) {
      this.amount = Number(storage.find(STORAGE_KEY.vendingMachine));
    }
  }
}
