/* eslint-disable class-methods-use-this */
/* eslint-disable no-constructor-return */
import Product from '../model/Product.js';
import Coin from '../model/Coin.js';
import { saveToStorage, loadFromStorage } from '../utils/localStorage.js';
import STORAGE from '../constant/storage.js';
import { COIN, COIN_ARRAY, ONE_COIN } from '../constant/coin.js';

let instance = null;

export default class VendingMachine {
  constructor() {
    if (instance !== null) {
      return instance;
    }
    this.initializeProductList();
    this.initializeRechargedCoin();
    this.initializeRechargedCoinAmount();
    this.initializeRechargedMoneyAmount();
    this.initializeReturnedCoin();

    instance = this;
  }

  initializeProductList() {
    const loadedProductList = loadFromStorage(STORAGE.productList);

    this.productList = [];
    if (loadedProductList !== null) {
      loadedProductList.forEach((product) => {
        this.productList.push(new Product(product.name, product.price, product.quantity));
      });
    }
  }

  initializeRechargedCoin() {
    const loadRechargedCoin = loadFromStorage(STORAGE.rechargedCoin);
    this.rechargedCoin = [
      new Coin(COIN.COIN_500, null),
      new Coin(COIN.COIN_100, null),
      new Coin(COIN.COIN_50, null),
      new Coin(COIN.COIN_10, null),
    ];

    if (loadRechargedCoin !== null) {
      loadRechargedCoin.forEach((_, index) => {
        this.rechargedCoin[index].count = loadRechargedCoin[index].count;
      });
      this.convertRechargedCoinCountNullToZero();
    }
  }

  initializeRechargedCoinAmount() {
    const loadedRechargedCoinAmount = loadFromStorage(STORAGE.rechargedCoinAmount);

    this.rechargedCoinAmount = null;
    if (loadedRechargedCoinAmount !== null) {
      this.rechargedCoinAmount = loadedRechargedCoinAmount;
    }
  }

  initializeRechargedMoneyAmount() {
    const loadedRechargedMoneyAmount = loadFromStorage(STORAGE.rechargedMoneyAmount);

    this.rechargedMoneyAmount = null;
    if (loadedRechargedMoneyAmount !== null) {
      this.rechargedMoneyAmount = loadedRechargedMoneyAmount;
    }
  }

  initializeReturnedCoin() {
    const loadReturnedCoin = loadFromStorage(STORAGE.returnedCoin);
    this.returnedCoin = [
      new Coin(COIN.COIN_500, null),
      new Coin(COIN.COIN_100, null),
      new Coin(COIN.COIN_50, null),
      new Coin(COIN.COIN_10, null),
    ];

    if (loadReturnedCoin !== null) {
      loadReturnedCoin.forEach((_, index) => {
        this.returnedCoin[index].count = loadReturnedCoin[index].count;
      });
      this.convertedRetrunedCoinCountNullToZero();
    }
  }

  addProduct(name, price, quantity) {
    const index = this.findProductIndex(name);

    if (index === -1) {
      this.createProduct(name, price, quantity);
    } else {
      this.modifyProduct(index, name, price, quantity);
    }

    saveToStorage(STORAGE.productList, this.productList);
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
        this.increaseCoinCountByOne(pickedCoin);
        amount += pickedCoin;
      }
    }
    saveToStorage(STORAGE.rechargedCoin, this.rechargedCoin);
    saveToStorage(STORAGE.rechargedCoinAmount, this.rechargedCoinAmount);
    this.convertRechargedCoinCountNullToZero();
  }

  convertRechargedCoinCountNullToZero() {
    this.rechargedCoin.forEach((coin) => {
      if (coin.count === null) {
        coin.resetCountToZero();
      }
    });
  }

  increaseCoinCountByOne(pickedCoin) {
    const index = this.findCoinIndex(pickedCoin);
    this.rechargedCoin[index].increaseCount(ONE_COIN);
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
    saveToStorage(STORAGE.rechargedMoneyAmount, this.rechargedMoneyAmount);
  }

  sellProduct(selledProduct) {
    this.productList.forEach((product) => {
      if (product.getName() === selledProduct.name) {
        product.sell();
      }
    });

    this.rechargedMoneyAmount -= selledProduct.price;
    saveToStorage(STORAGE.productList, this.productList);
    saveToStorage(STORAGE.rechargedMoneyAmount, this.rechargedMoneyAmount);
  }

  returnCoin() {
    let returnedAmount = 0;
    this.convertedRetrunedCoinCountAllToZero();

    this.rechargedCoin.forEach((coin, index) => {
      const returnedCount = this.calculateReturnedCoinCount(returnedAmount, coin);

      this.returnedCoin[index].increaseCount(returnedCount);
      coin.decreaseCount(returnedCount);
      returnedAmount += coin.type * returnedCount;
    });

    this.rechargedMoneyAmount -= returnedAmount;
    this.rechargedCoinAmount -= returnedAmount;
    this.savePropertyAfterReturnedCoin();
  }

  convertedRetrunedCoinCountAllToZero() {
    this.returnedCoin.forEach((coin) => coin.resetCountToZero());
  }

  convertedRetrunedCoinCountNullToZero() {
    this.returnedCoin.forEach((coin) => {
      if (coin.count === null) {
        coin.resetCountToZero();
      }
    });
  }

  calculateReturnedCoinCount(returnedAmount, coin) {
    const returnedCount = Math.min(
      parseInt((this.rechargedMoneyAmount - returnedAmount) / coin.type, 10),
      coin.count
    );

    return returnedCount;
  }

  savePropertyAfterReturnedCoin() {
    saveToStorage(STORAGE.rechargedMoneyAmount, this.rechargedMoneyAmount);
    saveToStorage(STORAGE.rechargedCoinAmount, this.rechargedCoinAmount);
    saveToStorage(STORAGE.returnedCoin, this.returnedCoin);
    saveToStorage(STORAGE.rechargedCoin, this.rechargedCoin);
  }

  getProductList() {
    return this.productList;
  }

  getRechargedCoin() {
    return this.rechargedCoin.map((coin) => [coin.type, coin.count]);
  }

  getRechargedCoinAmount() {
    return this.rechargedCoinAmount;
  }

  getRechargedMoneyAmount() {
    return this.rechargedMoneyAmount;
  }

  getRetrunedCoin() {
    return this.returnedCoin.map((coin) => [coin.type, coin.count]);
  }
}
