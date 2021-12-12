class PurchaseValidator {
  static isMoneyInputDoesNotDivideBy10(moneyInput) {
    if (moneyInput % 10) {
      alert('10원으로 나누어 떨어지는 금액만 투입 가능합니다.');
      return true;
    }
  }

  static isMoneyInputLessThan0(moneyInput) {
    if (moneyInput < 0) {
      alert('마이너스 금액은 투입할 수 없습니다.');
      return true;
    }
  }

  static isMoneyInputBlank(moneyInput) {
    if (moneyInput === 0) {
      alert('투입할 금액을 입력해주세요.');
      return true;
    }
  }

  static isInvalidMoneyInput(moneyInput) {
    if (this.isMoneyInputDoesNotDivideBy10(moneyInput)) return true;
    if (this.isMoneyInputLessThan0(moneyInput)) return true;
    if (this.isMoneyInputBlank(moneyInput)) return true;
    return false;
  }
}

export default PurchaseValidator;
