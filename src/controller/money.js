import Validation from '../utils/validation.js';

export class Money {
  constructor(moneyBank) {
    this.valid = new Validation();
    this.moneyBank = moneyBank;
  }  

  chargeMoney(money) {
    const isValid = this.valid.checkMoneyInput(money);
    if(isValid) {
      this.moneyBank.chargeMoney(money);
    } else {
      alert('잘못된 금액 입력값입니다.');
    }
  }

  showCurrentMoney(view) {
    view.showCurrentMoney(this.moneyBank.money);
  }
}