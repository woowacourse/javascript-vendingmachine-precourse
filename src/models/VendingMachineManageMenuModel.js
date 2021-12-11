class VendingMachineManageMenuModel {
  constructor() {
    this.$chargeAmount = 0;
    this.$amount500 = 0;
    this.$amount100 = 0;
    this.$amount50 = 0;
    this.$amount10 = 0;
  }

  getChargeAmount() {
    return this.$chargeAmount;
  }

  setChargeAmount(amount) {
    this.$chargeAmount = amount;
  }

  getAmount500() {
    return this.$amount500;
  }

  setAmount500(amount) {
    this.$amount500 = amount;
  }

  getAmount100() {
    return this.$amount100;
  }

  setAmount100(amount) {
    this.$amount100 = amount;
  }

  getAmount50() {
    return this.$amount50;
  }

  setAmount50(amount) {
    this.$amount50 = amount;
  }

  getAmount10() {
    return this.$amount10;
  }

  setAmount10(amount) {
    this.$amount10 = amount;
  }
}

export default VendingMachineManageMenuModel;
