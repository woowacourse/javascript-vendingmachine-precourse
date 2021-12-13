import { default as UI } from './templates.js';
import { $, default as DOM } from '../utils/DOMUtils.js';
import CoinTable from './components/CoinTable.js';
import ProductTable from './components/ProductTable.js';
import ChargeForm from './components/ChargeForm.js';
import { SELECTOR } from '../constants/selectors.js';

export default class View {
  constructor() {
    this.loadWebComponents();
    this.makeComponents();
    DOM.hideComponents();
  }

  loadWebComponents() {
    new CoinTable();
    new ProductTable();
    new ChargeForm();
  }

  makeComponents() {
    this.showMenuComponent();
    this.showProductAddComponent();
    this.showVendingMachineManageComponent();
    this.showProductPurchaseComponent();
  }

  showMenuComponent() {
    $(SELECTOR.APP).insertAdjacentHTML('beforeend', UI.commonHTML);
  }

  showProductAddComponent() {
    $(SELECTOR.COMPONENT).insertAdjacentHTML('beforeend', UI.productAddHTML);
  }

  showVendingMachineManageComponent() {
    $(SELECTOR.COMPONENT).insertAdjacentHTML('beforeend', UI.vendingMachineManageHTML);
  }

  showProductPurchaseComponent() {
    $(SELECTOR.COMPONENT).insertAdjacentHTML('beforeend', UI.productPurchaseHTML);
  }
}
