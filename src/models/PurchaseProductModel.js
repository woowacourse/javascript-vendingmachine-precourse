const initInputMOney = () => {
  return localStorage.getItem('inputMoney') ? localStorage.getItem('inputMoney') : parseInt(0);
};
export default {
  inputMoney: initInputMOney(),
  add(money) {
    this.inputMoney += parseInt(money);
    localStorage.setItem('inputMoney', this.inputMoney);
  },
  total() {
    return this.inputMoney;
  },
};
