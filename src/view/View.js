import { TAB_MENUS_TEXT } from '../utils/constants.js';
import {
  getProduceAddText,
  getVendingMachineManageText,
  getProductPurchaseText,
} from '../utils/template.js';

class View {
  constructor() {
    this.init();
  }

  init() {
    this.$app = document.getElementById('app');

    this.showTabMenuScreen();
    this.initDOM();
  }

  showTabMenuScreen() {
    this.$app.innerHTML = TAB_MENUS_TEXT;
  }

  initDOM() {
    this.$content = document.getElementById('content');
  }

  showProductAddScreen(productAddMenu) {
    this.$content.innerHTML = getProduceAddText(productAddMenu);
  }

  showVendingMachineManageScreen(vendingMachineManageMenu) {
    this.$content.innerHTML = getVendingMachineManageText(vendingMachineManageMenu);
  }

  showProductPurchaseScreen(productAddMenu, productPurchaseMenu) {
    this.$content.innerHTML = getProductPurchaseText(productAddMenu, productPurchaseMenu);
  }
}

export default View;
