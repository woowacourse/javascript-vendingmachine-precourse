import Store from '../utils/store.js';

import Key from '../constants/key.js';

class ProductPurchaseMenuModel {
  getProductItems() {
    return Store.getLocalStorage(Key.productItems) || [];
  }
}

export default ProductPurchaseMenuModel;
