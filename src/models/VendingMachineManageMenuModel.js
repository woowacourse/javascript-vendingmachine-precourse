import Store from '../utils/store.js';
import Key from '../constants/key.js';

class VendingMachineManageMenuModel {
  constructor() {
    this.$chargeAmount = Store.getLocalStorage(Key.chargeAmount) || 0;
    this.$amount500 = Store.getLocalStorage(Key.charge500Quantity) || 0;
    this.$amount100 = Store.getLocalStorage(Key.charge100Quantity) || 0;
    this.$amount50 = Store.getLocalStorage(Key.charge50Quantity) || 0;
    this.$amount10 = Store.getLocalStorage(Key.charge10Quantity) || 0;
  }

  getChargeAmount() {
    return this.$chargeAmount;
  }

  setChargeAmount(amount) {
    this.$chargeAmount = amount;
    Store.setLocalStorage(Key.chargeAmount, amount);
  }

  getAmount500() {
    return this.$amount500;
  }

  setAmount500(amount) {
    this.$amount500 = amount;
    Store.setLocalStorage(Key.charge500Quantity, amount);
  }

  getAmount100() {
    return this.$amount100;
  }

  setAmount100(amount) {
    this.$amount100 = amount;
    Store.setLocalStorage(Key.charge100Quantity, amount);
  }

  getAmount50() {
    return this.$amount50;
  }

  setAmount50(amount) {
    this.$amount50 = amount;
    Store.setLocalStorage(Key.charge50Quantity, amount);
  }

  getAmount10() {
    return this.$amount10;
  }

  setAmount10(amount) {
    this.$amount10 = amount;
    Store.setLocalStorage(Key.charge10Quantity, amount);
  }
}

export default VendingMachineManageMenuModel;
