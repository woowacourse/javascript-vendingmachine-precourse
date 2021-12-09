export default class PurchaseModel {
  constructor() {
    this.chargedMoney = 0;
  }

  getchargedMoney = () => {
    return this.chargedMoney;
  };

  chargeMoney = (money) => {
    this.chargedMoney += money;
  };
}
