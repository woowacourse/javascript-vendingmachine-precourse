import Validator from '../validator/Validator.js';
import initView from '../view/initView.js';
import Product from './Product.js';
import { PRODUCTS_STORAGE_KEY, COINS_STORAGE_KEY } from '../constant/constant.js';
import Coins from './Coins.js';

export default class VendingMachine {
  constructor() {
    initView();
    this.products = JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY)) || [];
    this.change = new Coins();
  }

  addProduct(product) {
    if (Validator.isValidAddInput(product)) {
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
}
