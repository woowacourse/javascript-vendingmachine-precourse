import Store from '../utils/store.js';

import Key from '../constants/key.js';

class ProductAddMenuModel {
  getProductItems() {
    return Store.getLocalStorage(Key.productItems) || [];
  }

  setProductItems(items) {
    Store.setLocalStorage(Key.productItems, items);
  }
}

export default ProductAddMenuModel;
