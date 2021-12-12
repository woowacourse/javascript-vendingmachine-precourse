import Store from '../utils/store.js';

import Key from '../constants/key.js';

class ProductPurchaseMenuModel {
  getPurchaseChargeAmount() {
    return Store.getLocalStorage(Key.purchaseChargeAmount) || 0;
  }

  getReturn500CoinQuantity() {
    return Store.getLocalStorage(Key.return500CoinQuantity) || 0;
  }

  getReturn100CoinQuantity() {
    return Store.getLocalStorage(Key.return100CoinQuantity) || 0;
  }

  getReturn50CoinQuantity() {
    return Store.getLocalStorage(Key.return50CoinQuantity) || 0;
  }

  getReturn10CoinQuantity() {
    return Store.getLocalStorage(Key.return10CoinQuantity) || 0;
  }

  setPurchaseChargeAmount(amount) {
    Store.setLocalStorage(Key.purchaseChargeAmount, amount);
  }

  setReturn500CoinQuantity(quantity) {
    Store.setLocalStorage(Key.return500CoinQuantity, quantity);
  }

  setReturn100CoinQuantity(quantity) {
    Store.setLocalStorage(Key.return100CoinQuantity, quantity);
  }

  setReturn50CoinQuantity(quantity) {
    Store.setLocalStorage(Key.return50CoinQuantity, quantity);
  }

  setReturn10CoinQuantity(quantity) {
    Store.setLocalStorage(Key.return10CoinQuantity, quantity);
  }
}

export default ProductPurchaseMenuModel;
