import { TAB, DOM, TEMPLATE } from '../lib/constants.js';

/** View */
class VendingMachineView {
  constructor() {
    this.$app = document.getElementById('app');
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
    this.tabMenuSection = document.getElementById(DOM.TAB_MENU_SECTION);
    this.mainSection = document.getElementById(DOM.MAIN_SECTION);
  }

  renderMain(model) {
    this.mainSection.innerHTML = TEMPLATE[model.tab];
  }
}
export default VendingMachineView;
