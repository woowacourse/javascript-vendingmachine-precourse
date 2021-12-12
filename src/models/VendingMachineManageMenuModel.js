import Store from '../utils/store.js';
import STORAGE_KEY from '../constants/key.js';

class VendingMachineManageMenuModel {
  getChargeAmount() {
    return Store.getLocalStorage(STORAGE_KEY.chargeAmount) || 0;
  }

  getAmount500() {
    return Store.getLocalStorage(STORAGE_KEY.charge500Quantity) || 0;
  }

  getAmount100() {
    return Store.getLocalStorage(STORAGE_KEY.charge100Quantity) || 0;
  }

  getAmount50() {
    return Store.getLocalStorage(STORAGE_KEY.charge50Quantity) || 0;
  }

  getAmount10() {
    return Store.getLocalStorage(STORAGE_KEY.charge10Quantity) || 0;
  }

  setChargeAmount(amount) {
    Store.setLocalStorage(STORAGE_KEY.chargeAmount, amount);
  }

  setAmount500(amount) {
    Store.setLocalStorage(STORAGE_KEY.charge500Quantity, amount);
  }

  setAmount100(amount) {
    Store.setLocalStorage(STORAGE_KEY.charge100Quantity, amount);
  }

  setAmount50(amount) {
    Store.setLocalStorage(STORAGE_KEY.charge50Quantity, amount);
  }

  setAmount10(amount) {
    Store.setLocalStorage(STORAGE_KEY.charge10Quantity, amount);
  }
}

export default VendingMachineManageMenuModel;
