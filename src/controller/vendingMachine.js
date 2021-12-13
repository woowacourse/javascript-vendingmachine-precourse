import Validation from "../utils/validation.js";

export class VendingMachine {
  constructor(moneyBank, productList) {
    this.valid = new Validation();
    this.moneyBank = moneyBank;
    this.productList = productList;
  }

  insertMoney(money) {
    const isValid = this.valid.checkMoneyInput(money);
    if(isValid) {
      this.moneyBank.insertMoney(money);
    } else {
      alert('잘못된 금액 값입니다.');
    }
  }

  showInsertedMoney(view) {
    view.showInsertedMoney(this.moneyBank.insertedMoney);
  }
}