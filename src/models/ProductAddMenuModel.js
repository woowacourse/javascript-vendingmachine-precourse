import Store from '../utils/store.js';

import STORAGE_KEY from '../constants/key.js';

class ProductAddMenuModel {
  getProductItems() {
    return Store.getLocalStorage(STORAGE_KEY.productItems) || [];
  }

  setProductItems(items) {
    Store.setLocalStorage(STORAGE_KEY.productItems, items);
  }
}

export default ProductAddMenuModel;
