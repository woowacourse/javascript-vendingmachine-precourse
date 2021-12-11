import Store from '../utils/store.js';

import Key from '../constants/key.js';

class ProductAddMenuModel {
  setProductItems(items) {
    Store.setLocalStorage(Key.productItems, items);
  }

  getProductItems() {
    return Store.getLocalStorage(Key.productItems) || [];
  }
}

export default ProductAddMenuModel;
