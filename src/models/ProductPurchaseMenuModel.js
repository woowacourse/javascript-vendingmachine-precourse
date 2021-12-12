import Store from '../utils/store.js';

import Key from '../constants/key.js';

class ProductPurchaseMenuModel {
  getPurchaseChargeAmount() {
    return Store.getLocalStorage(Key.purchaseChargeAmount) || 0;
  }

  setPurchaseChargeAmount(amount) {
    Store.setLocalStorage(Key.purchaseChargeAmount, amount);
  }

  getReturn500CoinQuantity() {
    return Store.getLocalStorage(Key.return500CoinQuantity) || 0;
  }

  setReturn500CoinQuantity(quantity) {
    Store.setLocalStorage(Key.return500CoinQuantity, quantity);
  }

  getReturn100CoinQuantity() {
    return Store.getLocalStorage(Key.return100CoinQuantity) || 0;
  }

  setReturn100CoinQuantity(quantity) {
    Store.setLocalStorage(Key.return100CoinQuantity, quantity);
  }

  getReturn50CoinQuantity() {
    return Store.getLocalStorage(Key.return50CoinQuantity) || 0;
  }

  setReturn50CoinQuantity(quantity) {
    Store.setLocalStorage(Key.return50CoinQuantity, quantity);
  }

  getReturn10CoinQuantity() {
    return Store.getLocalStorage(Key.return10CoinQuantity) || 0;
  }

  setReturn10CoinQuantity(quantity) {
    Store.setLocalStorage(Key.return10CoinQuantity, quantity);
  }
}

export default ProductPurchaseMenuModel;
