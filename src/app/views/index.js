import { DOM, TAB } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';
import ProductAddView from './ProductAddView.js';
import ProductPurchaseView from './ProductPurchaseView.js';
import VendingMachineManageView from './VendingMachineManageView.js';

/** View */
class VendingMachineView {
  constructor() {
    this.$app = $('app');
    this.mainView = null;
    this.initView();
    this.initDOM();
  }

  initView() {
    this.$app.innerHTML = `<h1>🥤자판기🥤</h1><section id="${DOM.TAB_MENU_SECTION}">
      <button id="${DOM.PRODUCT_ADD_MENU}">${TAB.PRODUCT_ADD_MENU}</button>
      <button id="${DOM.VENDING_MACHINE_MANAGE_MENU}">${TAB.VENDING_MACHINE_MANAGE_MENU}</button>
      <button id="${DOM.PRODUCT_PURCHASE_MENU}">${TAB.PRODUCT_PURCHASE_MENU}</button>
      </section>
      <main id="${DOM.MAIN_SECTION}"></main>`;
  }

  initDOM() {
    this.tabMenuSection = $(DOM.TAB_MENU_SECTION);
  }

  renderProductAddMenu(productAddInputsValue, productList) {
    this.mainView = new ProductAddView($(DOM.MAIN_SECTION), productAddInputsValue, productList);
  }

  renderVendingMachineManageMenu(
    vendingMachineChargeInputsValue,
    coins,
    vendingMachineChargeAmount
  ) {
    this.mainView = new VendingMachineManageView(
      $(DOM.MAIN_SECTION),
      vendingMachineChargeInputsValue,
      coins,
      vendingMachineChargeAmount
    );
  }

  renderProductPurchaseMenu(chargeInputsValue, chargeAmount, productList) {
    this.mainView = new ProductPurchaseView(
      $(DOM.MAIN_SECTION),
      chargeInputsValue,
      chargeAmount,
      productList
    );
  }
}
export default VendingMachineView;
