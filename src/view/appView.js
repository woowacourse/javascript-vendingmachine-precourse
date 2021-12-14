import { $ } from '../utils/DOMhelper.js';
import { headerTemplate } from '../utils/template.js';

export default class AppView {
  constructor() {
    this.$app = $('#app');
  }

  renderHeader() {
    this.$app.innerHTML = headerTemplate();
  }

  selectHeaderDOM() {
    this.$productPurchaseMenu = $('#product-purchase-menu');
    this.$vendingMachineManageMenu = $('#vending-machine-manage-menu');
    this.$productAddMenu = $('#product-add-menu');
  }
}
