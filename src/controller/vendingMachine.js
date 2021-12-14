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

  returnMoney(money) {
    console.log(money);
  }

  purchase(productName, view) {
    const price = this.productList.getProductPrice(productName);
    const insertedMoney = this.moneyBank.insertedMoney;
    const isValid = this.valid.checkPurchasePossible(price, insertedMoney);
    if(isValid) {
      this.productList.removeProduct(productName);
      this.moneyBank.useMoney(price);
      view.showProductListAll(this.productList.products);
      this.showInsertedMoney(view);
    } else {
      alert('금액이 부족합니다.');
    }
  }
}