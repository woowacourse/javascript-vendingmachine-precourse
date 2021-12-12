import { default as UI } from './templates.js';
import { $, default as DOM } from './DOMUtils.js';
import CoinTable from './components/CoinTable.js';
import ProductTable from './components/ProductTable.js';
import ChargeForm from './components/ChargeForm.js';

export default class View {
  constructor() {
    this.loadWebComponents();
    $('#app').insertAdjacentHTML('beforeend', UI.commonHTML);
    this.makeComponents();
    DOM.hideComponents();
  }

  loadWebComponents() {
    new CoinTable();
    new ProductTable();
    new ChargeForm();
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
