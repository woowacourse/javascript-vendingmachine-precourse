import { COINS } from "../assets/constants/public.js";
import Product from "./product.js";
import VendingMachine from "./vendingMachine.js";

class PurchaseProduct extends VendingMachine {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.loadFromLocalStorage();
  }

  loadProducts(productsData) {
    productsData = productsData.slice(1, productsData.length - 1).split(",");
    this.products = productsData.map(product => {
      const productInfo = product.slice(1, product.length - 1).split("-");
      const newProduct = new Product(
        productInfo[0],
        productInfo[1],
        productInfo[2]
      );
      return newProduct;
    });
  }

  loadCoins(coins) {
    coins = coins.split(",");
    COINS.forEach((coin, index) => {
      this.coins[`${coin}`] = coins[index];
    });
  }

  loadInsertedMoney(insertedMoney) {
    this.insertedMoney = parseInt(insertedMoney);
  }

  loadFromLocalStorage() {
    const products = localStorage.getItem("products");
    const coins = localStorage.getItem("coins");
    const insertedMoney = localStorage.getItem("insertedMoney");
    if (products) {
      this.loadProducts(products);
    }
    if (coins) {
      this.loadCoins(coins);
    }
    if (insertedMoney) {
      this.loadInsertedMoney(insertedMoney);
    }
  }
}

export const purchaseProduct = new PurchaseProduct();
