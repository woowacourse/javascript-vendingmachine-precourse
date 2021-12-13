import { PRODUCT_PURCHASE_TEXT, TAB_MENUS_TEXT } from '../utils/constants.js';
import { getProduceAddText, getVendingMachineManageText } from '../utils/template.js';

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

  showVendingMachineManageScreen(tabMenu) {
    document.querySelector('main').innerHTML = getVendingMachineManageText(tabMenu);
  }

  showProductPurchaseScreen() {
    document.querySelector('main').innerHTML = PRODUCT_PURCHASE_TEXT;
  }
}

export default View;
