class PurchaseValidator {
  static isMoneyInputDoesNotDivideBy10(moneyInput) {
    if (moneyInput % 10) {
      alert('10원으로 나누어 떨어지는 금액만 투입 가능합니다.');
      return true;
    }
  }

  static isInvalidMoneyInput(moneyInput) {
    if (this.isMoneyInputDoesNotDivideBy10(moneyInput)) return true;
    return false;
  }
}

export default PurchaseValidator;
