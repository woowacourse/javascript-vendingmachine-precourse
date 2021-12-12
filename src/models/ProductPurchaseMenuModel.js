import Store from '../utils/store.js';

import STORAGE_KEY from '../constants/key.js';
import { getReturnCoinQuantityStorageKey } from '../utils/index.js';

class ProductPurchaseMenuModel {
  getPurchaseChargeAmount() {
    return Store.getLocalStorage(STORAGE_KEY.purchaseChargeAmount) || 0;
  }

  getAddedPurchaseCharge(charge) {
    return this.getPurchaseChargeAmount() + charge;
  }

  getReturnCoinQuantity(coin) {
    return Store.getLocalStorage(getReturnCoinQuantityStorageKey(coin)) || 0;
  }

  setPurchaseChargeAmount(amount) {
    Store.setLocalStorage(STORAGE_KEY.purchaseChargeAmount, amount);
  }

  setReturnCoinQuantity(coin, amount) {
    Store.setLocalStorage(getReturnCoinQuantityStorageKey(coin), amount);
  }

  setPlusOneReturnCoinQuantity(coin) {
    Store.setLocalStorage(
      getReturnCoinQuantityStorageKey(coin),
      this.getReturnCoinQuantity(coin) + 1,
    );
  }
}

export default ProductPurchaseMenuModel;
