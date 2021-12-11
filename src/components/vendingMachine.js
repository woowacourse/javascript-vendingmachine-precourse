import { COINS, PURCHASE_PRODUCT_TAP } from "../utils/constants.js";
import Product from "./product.js";

class VendingMachine {
  constructor() {
    this.products = [];
    this.coin500 = 0;
    this.coin100 = 0;
    this.coin50 = 0;
    this.coin10 = 0;
    this.insertedMoney = 0;
  }

  addProduct(name, price, quantity) {
    const newProduct = new Product(name, price, quantity);
    this.products.push(newProduct);

    return newProduct;
  }

  insertMoney(money) {
    this.insertedMoney += money;
  }

  getMoney() {
    return this.insertedMoney;
  }

  addCoin(coin) {
    if (coin === 500) {
      this.coin500++;
    } else if (coin === 100) {
      this.coin100++;
    } else if (coin === 50) {
      this.coin50++;
    } else if (coin === 10) {
      this.coin10++;
    }
  }

  chargeCoin(money) {
    while (money > 0) {
      const coin = MissionUtils.Random.pickNumberInList(COINS);
      if (coin <= money) {
        money -= coin;
        this.addCoin(coin);
      }
    }
  }

  getTotalMoney() {
    let total =
      this.coin500 * 500 +
      this.coin100 * 100 +
      this.coin50 * 50 +
      this.coin10 * 10;

    return total;
  }

  getCoins() {
    let coins = [this.coin500, this.coin100, this.coin50, this.coin10];

    return coins;
  }

  purchaseProduct(name) {
    this.products.forEach(product => {
      if (product.name === name) {
        product.quantity--;
        this.insertedMoney -= product.price;
      }
    });
  }
}

export const vendingMachine = new VendingMachine();
