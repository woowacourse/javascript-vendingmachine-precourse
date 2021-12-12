import { PRODUCT } from '../utils/constants.js';

const initInputMOney = () => {
  return localStorage.getItem('inputMoney') ? localStorage.getItem('inputMoney') : parseInt(0);
};
export default {
  inputMoney: initInputMOney(),
  add(money) {
    if (!isValidInputMoney(money)) {
      return;
    }
    this.inputMoney += parseInt(money);
    localStorage.setItem('inputMoney', this.inputMoney);
  },
  total() {
    return this.inputMoney;
  },
  purchase(item) {
    this.inputMoney -= parseInt(item[PRODUCT.PRICE]);
    localStorage.setItem('inputMoney', this.inputMoney);
  },
};

const isValidInputMoney = (money) => {
  if (money === '') {
    alert(ALERT.EMPTY_MONEY_INPUT);
    return false;
  }
  if (parseInt(money) < 0) {
    alert(ALERT.WRONG_CHARGE_INPUT);
    return false;
  }
  if (parseInt(money) % 10 !== 0) {
    alert(ALERT.NOT_10_UNIT_PRICE);
    return false;
  }
  return true;
};
