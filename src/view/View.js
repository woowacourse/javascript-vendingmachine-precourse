import { TAB_MENUS_TEXT } from '../utils/constants.js';
import { getProduceAddTemplate } from '../utils/template/productAddTemplate.js';
import { getProductPurchaseTemplate } from '../utils/template/productPurchaseTemplate.js';
import { getVendingMachineManageTemplate } from '../utils/template/vendingMachineManageTemplate.js';

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
    this.$content.innerHTML = getProduceAddTemplate(productAddMenu);
  }

  showVendingMachineManageScreen(vendingMachineManageMenu) {
    this.$content.innerHTML = getVendingMachineManageTemplate(vendingMachineManageMenu);
  }

  showProductPurchaseScreen(productAddMenu, productPurchaseMenu) {
    this.$content.innerHTML = getProductPurchaseTemplate(productAddMenu, productPurchaseMenu);
  }
}

export default View;
