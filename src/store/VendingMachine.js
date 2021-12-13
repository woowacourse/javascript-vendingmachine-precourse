/* eslint-disable class-methods-use-this */
/* eslint-disable no-constructor-return */
import Product from '../model/Product.js';
import Coin from '../model/Coin.js';
import { COIN, COIN_ARRAY } from '../constant/coin.js';

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
    let amount = 0;

    while (amount < totalAmount) {
      const pickedCoin = this.pickRandomCoin();

      if (amount + pickedCoin <= totalAmount) {
        const index = this.findCoinIndex(pickedCoin);
        this.rechargedCoin[index].increaseAmount();
        amount += pickedCoin;
      }
    }

    this.convertAmountNullToZero();
  }

  convertAmountNullToZero() {
    this.rechargedCoin.forEach((coin) => {
      if (coin.amount === null) {
        coin.resetAmountToZero();
      }
    });
  }

  findCoinIndex(pickedCoin) {
    return this.rechargedCoin.findIndex((coin) => coin.type === pickedCoin);
  }

  pickRandomCoin() {
    // eslint-disable-next-line no-undef
    return MissionUtils.Random.pickNumberInList(COIN_ARRAY);
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
