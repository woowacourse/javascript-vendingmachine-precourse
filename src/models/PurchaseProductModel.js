import { LOCALSTORAGE, PRODUCT, ALERT } from '../utils/constants.js';
import { isValidMoneyInput } from '../utils/validation.js';

const initInputMOney = () => {
  return localStorage.getItem(LOCALSTORAGE.INPUT_MONEY)
    ? parseInt(localStorage.getItem(LOCALSTORAGE.INPUT_MONEY))
    : parseInt(0);
};
export default {
  inputMoney: initInputMOney(),
  add(money) {
    if (!isValidMoneyInput(money)) {
      return;
    }
    this.inputMoney += parseInt(money);
    this.setInputMoney();
  },
  total() {
    return this.inputMoney;
  },
  purchase(product) {
    this.inputMoney -= parseInt(product[PRODUCT.PRICE]);
    this.setInputMoney();
  },
  payable(price) {
    if (this.inputMoney - parseInt(price) < 0) {
      alert(ALERT.NOT_ENOUGH_MONEY);
      return false;
    }
    return true;
  },
  reset() {
    this.inputMoney = 0;
    this.setInputMoney();
  },
  setInputMoney() {
    localStorage.setItem(LOCALSTORAGE.INPUT_MONEY, parseInt(this.inputMoney));
  },
};
