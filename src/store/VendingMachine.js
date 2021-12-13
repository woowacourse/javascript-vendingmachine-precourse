/* eslint-disable class-methods-use-this */
/* eslint-disable no-constructor-return */
import Product from '../model/Product.js';
import Coin from '../model/Coin.js';
import { COIN } from '../constant/coin.js';

let instance = null;

export default class VendingMachine {
  constructor() {
    if (instance !== null) {
      return instance;
    }
    this.productList = [];
    this.rechargedCoin = [
      new Coin(COIN.COIN_500, null),
      new Coin(COIN.COIN_100, null),
      new Coin(COIN.COIN_50, null),
      new Coin(COIN.COIN_10, null),
    ];
    this.rechargedCoinAmount = null;
    this.rechargedMoneyAmount = null;
    instance = this;
  }

  addProduct(name, price, quantity) {
    const index = this.findProductIndex(name);

    if (index === -1) {
      this.createProduct(name, price, quantity);
    } else {
      this.modifyProduct(index, name, price, quantity);
    }
  }

  findProductIndex(name) {
    return this.productList.findIndex((product) => product.getName() === name);
  }

  createProduct(name, price, quantity) {
    this.productList.push(new Product(name, price, quantity));
  }

  modifyProduct(index, name, price, quantity) {
    const product = this.productList[index];

    product.setPrice(price);
    product.setQuantity(product.getQuantity() + quantity);
  }

  rechargeCoin(totalAmount) {
    this.rechargedCoinAmount += totalAmount;
    let amount = totalAmount;

    this.rechargedCoin.forEach((coin) => {
      if (coin.type === COIN.COIN_10) {
        const amountCoin10 = parseInt(amount / coin.type, 10);
        coin.increaseAmount(amountCoin10);
      } else {
        const maxRange = parseInt(amount / coin.type, 10) + 1;
        const randomNum = this.pickRandomCount(maxRange);
        coin.increaseAmount(randomNum);
        amount -= coin.type * randomNum;
      }
    });
  }

  pickRandomCount(maxRange) {
    // eslint-disable-next-line no-undef
    return MissionUtils.Random.pickNumberInList([...Array(maxRange)].map((v, i) => i));
  }

  rechargeMoney(amount) {
    this.rechargedMoneyAmount += amount;
  }

  sellProduct(selledProduct) {
    this.productList.forEach((product) => {
      if (product.getName() === selledProduct.name) {
        product.sell();
      }
    });

    this.rechargedMoneyAmount -= selledProduct.price;
  }

  getProductList() {
    return this.productList;
  }

  getRechargedCoin() {
    return this.rechargedCoin.map((coin) => [coin.type, coin.amount]);
  }

  getRechargedCoinAmount() {
    return this.rechargedCoinAmount;
  }

  getRechargedMoneyAmount() {
    return this.rechargedMoneyAmount;
  }
}
