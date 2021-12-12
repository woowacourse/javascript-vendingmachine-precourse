import Store from '../utils/store.js';

import Key from '../constants/key.js';

class ProductPurchaseMenuModel {
  getPurchaseChargeAmount() {
    return Store.getLocalStorage(Key.purchaseChargeAmount) || 0;
  }

  setPurchaseChargeAmount(amount) {
    Store.setLocalStorage(Key.purchaseChargeAmount, amount);
  }
}

export default ProductPurchaseMenuModel;
