/* eslint-disable radix */
export default class ChargedMoney {
  constructor() {
    this.amount = this.retrieveSaved();
  }

  retrieveSaved() {
    const retrieved = localStorage.getItem("userMoney");
    return retrieved === null ? 0 : parseInt(retrieved);
  }

  setAmount(money) {
    this.amount = Math.max(0, money);
    localStorage.setItem("userMoney", this.amount);
  }

  getAmount() {
    return this.amount;
  }

  decreaseAmount(money) {
    this.setAmount(this.amount - money);
  }

  incrementAmount(money) {
    this.setAmount(this.getAmount() + money);
  }
}
