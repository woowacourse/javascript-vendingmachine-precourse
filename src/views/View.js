import { default as UI } from './templates.js';
import { $ } from './DOMUtils.js';

export default class View {
  constructor() {
    $('#app').insertAdjacentHTML('beforeend', UI.commonHTML);
    this.makeComponents();
  }

  makeComponents() {
    this.showProductAddComponent();
    this.showVendingMachineManageComponent();
    this.showProductPurchaseComponent();
  }

  showProductAddComponent() {
    $('#app').insertAdjacentHTML('beforeend', UI.productAddHTML);
  }

  showVendingMachineManageComponent() {
    $('#app').insertAdjacentHTML('beforeend', UI.vendingMachineManageHTML);
  }

  showProductPurchaseComponent() {
    $('#app').insertAdjacentHTML('beforeend', UI.productPurchaseHTML);
  }
}
