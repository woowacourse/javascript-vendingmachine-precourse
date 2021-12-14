import { setDataOnStorage, loadDataFromStorage } from '../utils/storage.js';
import { STRING } from '../constants/constants.js';
import NUMBER from '../constants/number.js';
import { defaultProducts, defaultAddTabInput, defaultCoins } from './data.js';

export default class AppModel {
  constructor() {
    this.products = this.loadProducts() || defaultProducts();
    this.chargeAmount = this.loadChargeAmount() || NUMBER.ZERO;
    this.coins = this.loadCoins() || defaultCoins();
    this.inputChargeAmount = this.loadInputChargeAmount() || NUMBER.ZERO;

    this.addTabInput = defaultAddTabInput();
    this.manageTabInput = STRING.EMPTY;
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

  setChargeAmount(amount) {
    this.chargeAmount = this.chargeAmount > 0 ? this.getAddedChargeAmount(amount) : amount;

    setDataOnStorage(STRING.CHARGE_AMOUNT, this.chargeAmount);
  }

  getAddedChargeAmount(amount) {
    return this.chargeAmount + amount;
  }

  loadChargeAmount() {
    return loadDataFromStorage(STRING.CHARGE_AMOUNT);
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

  setCoins() {
    setDataOnStorage(STRING.COINS, this.coins);
  }

  getCoinsAmountArray() {
    return this.coins.map((coin) => coin.amount);
  }

  setManageTabInput(value) {
    this.manageTabInput = value;
  }

  loadInputChargeAmount() {
    return loadDataFromStorage(STRING.INPUT_CHARGE_AMOUNT);
  }

  setInputChargeAmount(amount) {
    this.inputChargeAmount =
      this.inputChargeAmount > 0 ? this.getAddedInputChargeAmount(amount) : amount;

    setDataOnStorage(STRING.INPUT_CHARGE_AMOUNT, this.inputChargeAmount);
  }

  getAddedInputChargeAmount(amount) {
    return this.inputChargeAmount + amount;
  }
}
