export default class PurchaseModel {
  constructor() {
    this.chargedMoney = 0;
  }

  getChargedMoney = () => {
    return this.chargedMoney;
  };

  chargeMoney = (money) => {
    if (this.isNotPositiveNumber(money)) {
      throw new Error("금액은 0이하이면 안됩니다");
    }
    if (this.isNotPriceDividedByTen(money)) {
      throw new Error("10으로 나누어 떨어지는 금액을 입력해주세요");
    }
    this.chargedMoney += money;
  };

  spendMoney = (price) => {
    this.chargedMoney -= price;
  };

  isNotPositiveNumber = (money) => {
    return money <= 0;
  };

  isNotPriceDividedByTen = (money) => {
    return money % 10 !== 0;
  };
}
