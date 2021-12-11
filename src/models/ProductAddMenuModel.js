import Store from '../utils/store.js';

import Key from '../constants/key.js';

class ProductAddMenuModel {
  constructor() {
    this.$productItems = Store.getLocalStorage(Key.productItems) || [];
  }

  setProductItems(items) {
    this.$productItems = items;
    Store.setLocalStorage(Key.productItems, items);
  }

  getProductItems() {
    return this.$productItems;
  }
}

export default ProductAddMenuModel;
