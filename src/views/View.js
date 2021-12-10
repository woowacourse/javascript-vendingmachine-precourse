import { default as UI } from './templates.js';
import { $, default as DOM } from './DOMUtils.js';

export default class View {
  constructor() {
    $('#app').insertAdjacentHTML('beforeend', UI.commonHTML);
    this.makeComponents();
    DOM.hideComponents();
  }

  makeComponents() {
    this.showProductAddComponent();
    this.showVendingMachineManageComponent();
    this.showProductPurchaseComponent();
  }

  showProductAddComponent() {
    $('#component').insertAdjacentHTML('beforeend', UI.productAddHTML);
  }

  showVendingMachineManageComponent() {
    $('#component').insertAdjacentHTML('beforeend', UI.vendingMachineManageHTML);
  }

  showProductPurchaseComponent() {
    $('#component').insertAdjacentHTML('beforeend', UI.productPurchaseHTML);
  }
}
