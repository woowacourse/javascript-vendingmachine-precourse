import Validation from '../utils/validation.js';
import { ERROR } from '../utils/constant.js';

export class VendingMachine {
  constructor(moneyBank, productList) {
    this.valid = new Validation();
    this.moneyBank = moneyBank;
    this.productList = productList;
  }

  insertMoney(money) {
    const isValid = this.valid.checkMoneyInput(money);
    if (isValid) {
      this.moneyBank.insertMoney(money);
    } else {
      alert(MONEYINPUT);
    }
  }

  showInsertedMoney(view) {
    view.showInsertedMoney(this.moneyBank.insertedMoney);
  }

  purchase(productName, view) {
    const price = this.productList.getProductPrice(productName);
    const quantity = this.productList.getProductQuantity(productName);
    const { insertedMoney } = this.moneyBank;
    const isValid = this.valid.checkPurchasePossible(price, quantity, insertedMoney);
    if (isValid) {
      this.productList.removeProduct(productName);
      this.moneyBank.useInsertedMoney(price);
      view.showProductListAll(this.productList.products);
      this.showInsertedMoney(view);
    } else {
      alert(ERROR.CANTPURCHASE);
    }
  }

  returnMoney(money, view) {
    const returnCoins = this.moneyBank.returnCoins(money);
    view.showReturnCoins(returnCoins);
  }
}