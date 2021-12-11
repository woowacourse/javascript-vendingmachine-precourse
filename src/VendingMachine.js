import Product from './Product.js';
import Coin from './Coin.js';

export default class VendingMachine {
  constructor() {
    this.product = new Product();
    this.coin = new Coin();
    this.amount = 0;
  }

  insertMoney(money) {
    this.amount += money;
  }

  getMoney() {
    return this.amount;
  }
}
