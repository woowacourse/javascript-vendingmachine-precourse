import { ALERT_MESSAGE, PURCHASE } from '../constants/index.js';

class PurchaseValidator {
  static isMoneyInputDoesNotDivideBy10(moneyInput) {
    if (moneyInput % PURCHASE.DIVISIBLE_NUMBER !== PURCHASE.REMAINDER_IS_0) {
      alert(ALERT_MESSAGE.PURCHASE_INPUT_DOES_NOT_DIVIDED_BY_10);
      return true;
    }
  }

  static isMoneyInputLessThan0(moneyInput) {
    if (moneyInput < PURCHASE.INPUT_IS_0) {
      alert(ALERT_MESSAGE.PURCHASE_MONEY_INPUT_LESS_THAN_0);
      return true;
    }
  }

  static isMoneyInputBlank(moneyInput) {
    if (moneyInput === PURCHASE.INPUT_IS_0) {
      alert(ALERT_MESSAGE.PURCHASE_MONEY_INPUT_BLANK);
      return true;
    }
  }

  static isInvalidMoneyInput(moneyInput) {
    if (this.isMoneyInputDoesNotDivideBy10(moneyInput)) return true;
    if (this.isMoneyInputLessThan0(moneyInput)) return true;
    if (this.isMoneyInputBlank(moneyInput)) return true;
    return false;
  }

  static isQuantityZero(quantity) {
    if (quantity === PURCHASE.QUANTITY_IS_0) {
      alert(ALERT_MESSAGE.PURCHASE_IS_SOLD_OUT);
      return true;
    }
  }

  static isLackOfMoney(price, userInputMoney) {
    if (price > userInputMoney.amount) {
      alert(ALERT_MESSAGE.PURCHASE_LACK_OF_MONEY);
      return true;
    }
  }

  static isNotPurchasable({ price, quantity, userInputMoney }) {
    if (this.isQuantityZero(quantity)) return true;
    if (this.isLackOfMoney(price, userInputMoney)) return true;
    return false;
  }
}

export default PurchaseValidator;
