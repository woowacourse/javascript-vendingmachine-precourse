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

  getProductPrice(productName) {
    return this.product.getProductPrice(productName);
  }

  sell(productName) {
    this.amount -= this.product.getProductPrice(productName);
    this.product.out(productName);
  }

  returnCoin() {
    const coins = this.coin.takeOut(this.amount);
    this.amount = 0;
    return coins;
  }
}
