import Validator from '../validator/Validator.js';
import Product from './Product.js';
import {
  PRODUCTS_STORAGE_KEY,
  COINS_STORAGE_KEY,
  CURRENT_MONEY_KEY,
} from '../constant/constant.js';
import Coins from './Coins.js';

function getProductsFromStorage() {
  const copy = JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY));

  return copy?.map((product) => new Product(product));
}

export default class VendingMachine {
  constructor() {
    this.products = getProductsFromStorage() || [];
    this.change = new Coins();
    this.money = +localStorage.getItem(CURRENT_MONEY_KEY) || 0;
  }

  addProduct(product) {
    if (Validator.isValidAddInput(this.products, product)) {
      const addedProduct = new Product(product);

      this.products.push(addedProduct);
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(this.products));
      return addedProduct;
    }
    return null;
  }

  charge(money) {
    if (Validator.isValidChargeInput(money)) {
      this.change.chargeRandomCoins(+money);
      localStorage.setItem(COINS_STORAGE_KEY, JSON.stringify(this.change.coins));
      return this.change;
    }
    return null;
  }

  setCurrentMoney(money) {
    if (Validator.isValidChargeInput(money)) {
      this.money += +money;
      localStorage.setItem(CURRENT_MONEY_KEY, this.money);
      return true;
    }
    return false;
  }

  getProductIndexByName(name) {
    return this.products.findIndex((product) => product.name === name);
  }

  sellProduct({ name, price }, $productNode) {
    if (Validator.isBuyable(price, this.money)) {
      const index = this.getProductIndexByName(name);
      this.products[index].decreaseQuantity();
      this.money -= +price;
      this.products[index].renderUpdate($productNode, this.money);
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(this.products));
      localStorage.setItem(CURRENT_MONEY_KEY, this.money);
      return true;
    }
    return false;
  }
}
