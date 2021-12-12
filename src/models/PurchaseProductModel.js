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
      alert('돈이 부족합니다.');
      return false;
    }
    return true;
  },
  reset() {
    this.inputMoney = 0;
    this.setInputMoney();
  },
  setInputMoney() {
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
