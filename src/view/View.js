import { TAB_MENUS_TEXT } from '../utils/constants.js';
import { $id } from '../utils/dom.js';
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
  }

  showTabMenuScreen() {
    this.$app.innerHTML = TAB_MENUS_TEXT;
  }

  showProductAddScreen(productAddMenu) {
    $id('content').innerHTML = getProduceAddText(productAddMenu);
  }

  showVendingMachineManageScreen(vendingMachineManageMenu) {
    $id('content').innerHTML = getVendingMachineManageText(vendingMachineManageMenu);
  }

  showProductPurchaseScreen(productAddMenu, productPurchaseMenu) {
    $id('content').innerHTML = getProductPurchaseText(productAddMenu, productPurchaseMenu);
  }
}

export default View;
