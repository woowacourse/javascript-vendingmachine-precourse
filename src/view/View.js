import {
  PRODUCE_ADD_TEXT,
  PRODUCT_PURCHASE_TEXT,
  TAB_MENUS_TEXT,
  VENDING_MACHINE_MANAGE_TEXT,
} from '../utils/constants.js';

class View {
  constructor() {
    this.init();
  }

  init() {
    this.$app = document.getElementById('app');
  }

  showTabMenuScreen() {
    this.$app.insertAdjacentHTML('beforeend', TAB_MENUS_TEXT);
  }

  showProduceAddScreen() {
    this.$app.insertAdjacentHTML('beforeend', PRODUCE_ADD_TEXT);
  }

  showVendingMachineManageScreen() {
    this.$app.insertAdjacentHTML('beforeend', VENDING_MACHINE_MANAGE_TEXT);
  }

  showProductPurchaseScreen() {
    this.$app.insertAdjacentHTML('beforeend', PRODUCT_PURCHASE_TEXT);
  }

  hideScreen() {
    const hideElement = document.querySelector('main');
    this.$app.removeChild(hideElement);
  }
}

export default View;
