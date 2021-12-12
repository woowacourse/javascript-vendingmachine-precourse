import Store from '../utils/store.js';

import STORAGE_KEY from '../constants/key.js';

class ProductPurchaseMenuModel {
  getPurchaseChargeAmount() {
    return Store.getLocalStorage(STORAGE_KEY.purchaseChargeAmount) || 0;
  }

  getReturn500CoinQuantity() {
    return Store.getLocalStorage(STORAGE_KEY.return500CoinQuantity) || 0;
  }

  getReturn100CoinQuantity() {
    return Store.getLocalStorage(STORAGE_KEY.return100CoinQuantity) || 0;
  }

  getReturn50CoinQuantity() {
    return Store.getLocalStorage(STORAGE_KEY.return50CoinQuantity) || 0;
  }

  getReturn10CoinQuantity() {
    return Store.getLocalStorage(STORAGE_KEY.return10CoinQuantity) || 0;
  }

  setPurchaseChargeAmount(amount) {
    Store.setLocalStorage(STORAGE_KEY.purchaseChargeAmount, amount);
  }

  setReturn500CoinQuantity(quantity) {
    Store.setLocalStorage(STORAGE_KEY.return500CoinQuantity, quantity);
  }

  setReturn100CoinQuantity(quantity) {
    Store.setLocalStorage(STORAGE_KEY.return100CoinQuantity, quantity);
  }

  setReturn50CoinQuantity(quantity) {
    Store.setLocalStorage(STORAGE_KEY.return50CoinQuantity, quantity);
  }

  setReturn10CoinQuantity(quantity) {
    Store.setLocalStorage(STORAGE_KEY.return10CoinQuantity, quantity);
  }
}

export default ProductPurchaseMenuModel;
