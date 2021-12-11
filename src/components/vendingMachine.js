import { COINS, PURCHASE_PRODUCT_TAP } from "../utils/constants.js";
import Product from "./product.js";

class VendingMachine {
  constructor() {
    this.products = [];
    this.coins = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    this.insertedMoney = 0;
    this.loadFromLocalStorage();
  }

  addProductsToVendingMachine(products) {
    products = products.slice(1, products.length - 1).split(",");
    products.forEach(product => {
      const productInfo = product.slice(1, product.length - 1).split("-");
      this.products.push(
        new Product(productInfo[0], productInfo[1], productInfo[2])
      );
    });
  }

  addCoinsToVendingMachine(coins) {
    coins = coins.split(",");
    COINS.forEach((coin, index) => {
      this.coins[`${coin}`] = coins[index];
    });
  }

  addInsertedMoneyToVendingMachine(insertedMoney) {
    this.insertedMoney = parseInt(insertedMoney);
  }

  loadFromLocalStorage() {
    const products = localStorage.getItem("products");
    const coins = localStorage.getItem("coins");
    const insertedMoney = localStorage.getItem("insertedMoney");
    if (products) {
      this.addProductsToVendingMachine(products);
    }
    if (coins) {
      this.addCoinsToVendingMachine(coins);
    }
    if (insertedMoney) {
      this.addInsertedMoneyToVendingMachine(insertedMoney);
    }
  }

  addProduct(name, price, quantity) {
    const newProduct = new Product(name, price, quantity);
    this.products.push(newProduct);

    return newProduct;
  }

  insertMoney(money) {
    this.insertedMoney += money;
  }

  getProducts() {
    return this.products.map(
      product => `${product.name}-${product.price}-${product.quantity}`
    );
  }

  getMoney() {
    return this.insertedMoney;
  }

  addCoin(coin) {
    if (coin === 500) {
      this.coins[500]++;
    } else if (coin === 100) {
      this.coins[100]++;
    } else if (coin === 50) {
      this.coins[50]++;
    } else if (coin === 10) {
      this.coins[10]++;
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
      this.coins[500] * 500 +
      this.coins[100] * 100 +
      this.coins[50] * 50 +
      this.coins[10] * 10;

    return total;
  }

  getCoins() {
    let coins = [
      this.coins[500],
      this.coins[100],
      this.coins[50],
      this.coins[10],
    ];

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

  returnCoin(coin) {
    const minCount = Math.min(
      this.coins[`${coin}`],
      Math.floor(this.insertedMoney / coin)
    );

    this.coins[`${coin}`] -= minCount;
    this.insertedMoney -= minCount * coin;

    return minCount;
  }

  getChanges() {
    let coins = COINS.map(coin => this.returnCoin(coin));

    return coins;
  }
}

export const vendingMachine = new VendingMachine();
