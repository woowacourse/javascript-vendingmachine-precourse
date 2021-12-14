import {
  setDataOnStorage,
  loadDataFromStorage,
  setDataOnSessionStorage,
  loadDataFromSessionStorage,
} from '../utils/storage.js';
import { STRING, TAB, NUMBER } from '../constants/constants.js';
import { defaultProducts, defaultAddTabInput, defaultCoins } from './data.js';

export default class AppModel {
  constructor() {
    this.products = this.loadProducts() || defaultProducts();
    this.coins = this.loadCoins() || defaultCoins();
    this.inputChargeAmount = this.loadInputChargeAmount() || NUMBER.ZERO;
    this.currentTab = this.loadCurrentTab() || TAB.ADD;

    this.addTabInput = defaultAddTabInput();
    this.manageTabInput = STRING.EMPTY;
    this.purchaseTabInput = STRING.EMPTY;
  }

  loadProducts() {
    return loadDataFromStorage(STRING.PRODUCTS);
  }

  addProduct(product) {
    this.products = [...this.products, { ...product }];

    setDataOnStorage(STRING.PRODUCTS, this.products);
  }

  setAddTabInput(key, value) {
    this.addTabInput[key] = value;
  }

  loadCoins() {
    return loadDataFromStorage(STRING.COINS);
  }

  findCoin(unit) {
    return this.coins.filter((coin) => coin.unit === unit)[0];
  }

  addAccumulatedCoinsAmounts() {
    return this.coins.forEach((coin) => coin.addAmount());
  }

  setCoins(coins) {
    this.coins = coins;

    setDataOnStorage(STRING.COINS, this.coins);
  }

  getTotalCoinValue() {
    return this.coins.reduce((acc, { unit, amount }) => {
      acc += unit * amount;
      return acc;
    }, NUMBER.ZERO);
  }

  getCoinsAmountArray() {
    return this.coins.map((coin) => coin.amount);
  }

  loadCurrentTab() {
    return loadDataFromSessionStorage(STRING.CURRENT_TAB);
  }

  setCurrentTab(tab) {
    this.currentTab = tab;

    setDataOnSessionStorage(STRING.CURRENT_TAB, this.currentTab);
  }

  setManageTabInput(value) {
    this.manageTabInput = value;
  }

  loadInputChargeAmount() {
    return loadDataFromStorage(STRING.INPUT_CHARGE_AMOUNT);
  }

  setInputChargeAmount(amount) {
    this.inputChargeAmount = amount;

    setDataOnStorage(STRING.INPUT_CHARGE_AMOUNT, this.inputChargeAmount);
  }

  addInputChargeAmount(amount) {
    this.inputChargeAmount += amount;
  }

  decreaseProductQuantity(name) {
    const targetProduct = this.products.filter((product) => {
      return product.name === name;
    })[0];

    targetProduct.quantity -= 1;

    setDataOnStorage(STRING.PRODUCTS, this.products);

    return targetProduct.quantity;
  }

  decreaseInputChargeAmount(amount) {
    this.inputChargeAmount -= amount;

    setDataOnStorage(STRING.INPUT_CHARGE_AMOUNT, this.inputChargeAmount);
  }

  setPurchaseTabInput(value) {
    this.purchaseTabInput = value;
  }
}
