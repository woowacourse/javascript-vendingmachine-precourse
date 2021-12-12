import Store from '../utils/store.js';
import Key from '../constants/key.js';

class VendingMachineManageMenuModel {
  getChargeAmount() {
    return Store.getLocalStorage(Key.chargeAmount) || 0;
  }

  getAmount500() {
    return Store.getLocalStorage(Key.charge500Quantity) || 0;
  }

  getAmount100() {
    return Store.getLocalStorage(Key.charge100Quantity) || 0;
  }

  getAmount50() {
    return Store.getLocalStorage(Key.charge50Quantity) || 0;
  }

  getAmount10() {
    return Store.getLocalStorage(Key.charge10Quantity) || 0;
  }

  setChargeAmount(amount) {
    Store.setLocalStorage(Key.chargeAmount, amount);
  }

  setAmount500(amount) {
    Store.setLocalStorage(Key.charge500Quantity, amount);
  }

  setAmount100(amount) {
    Store.setLocalStorage(Key.charge100Quantity, amount);
  }

  setAmount50(amount) {
    Store.setLocalStorage(Key.charge50Quantity, amount);
  }

  setAmount10(amount) {
    Store.setLocalStorage(Key.charge10Quantity, amount);
  }
}

export default VendingMachineManageMenuModel;
