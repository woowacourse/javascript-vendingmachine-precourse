import Store from '../utils/store.js';
import STORAGE_KEY from '../constants/key.js';
import { getChargeCoinQuantityStroageKey } from '../utils/index.js';

class VendingMachineManageMenuModel {
  getChargeAmount() {
    return Store.getLocalStorage(STORAGE_KEY.chargeAmount) || 0;
  }

  getCoinQuantity(coin) {
    return Store.getLocalStorage(getChargeCoinQuantityStroageKey(coin)) || 0;
  }

  setChargeAmount(amount) {
    Store.setLocalStorage(STORAGE_KEY.chargeAmount, amount);
  }

  setCoinQuantity(coin, quantity) {
    Store.setLocalStorage(getChargeCoinQuantityStroageKey(coin), quantity);
  }

  setMinusOneCoinQuantity(coin) {
    Store.setLocalStorage(getChargeCoinQuantityStroageKey(coin), this.getCoinQuantity(coin) - 1);
  }

  setPlusOneCoinQuantity(coin) {
    Store.setLocalStorage(getChargeCoinQuantityStroageKey(coin), this.getCoinQuantity(coin) + 1);
  }
}

export default VendingMachineManageMenuModel;
