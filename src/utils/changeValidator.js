class ChangeValidator {
  static isMoneyInputLessThan10(moneyInput) {
    if (moneyInput < 10) {
      alert('10원 이상의 금액만 충전 가능합니다.');
      return true;
    }
  }

  static isMoneyInputDoesNotDivideBy10(moneyInput) {
    if (moneyInput % 10) {
      alert('10원으로 나누어 떨어지는 금액만 충전 가능합니다.');
      return true;
    }
  }

  static isInvalidMoneyInput(moneyInput) {
    if (this.isMoneyInputLessThan10(moneyInput)) return true;
    if (this.isMoneyInputDoesNotDivideBy10(moneyInput)) return true;
    return false;
  }
}

export default ChangeValidator;
