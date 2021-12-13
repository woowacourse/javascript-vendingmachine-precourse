import {
  PRODUCT_PURCHASE_TEXT,
  TAB_MENUS_TEXT,
  VENDING_MACHINE_MANAGE_TEXT,
} from '../utils/constants.js';
import { getProduceAddText } from '../utils/template.js';

class View {
  constructor() {
    this.init();
  }

  init() {
    this.$app = document.getElementById('app');
  }

  showTabMenuScreen() {
    this.$app.innerHTML = TAB_MENUS_TEXT;
  }

  showProductAddScreen(tabMenu) {
    document.querySelector('main').innerHTML = getProduceAddText(tabMenu);
  }

  showVendingMachineManageScreen() {
    document.querySelector('main').innerHTML = VENDING_MACHINE_MANAGE_TEXT;
  }

  showProductPurchaseScreen() {
    document.querySelector('main').innerHTML = PRODUCT_PURCHASE_TEXT;
  }
}

export default View;
