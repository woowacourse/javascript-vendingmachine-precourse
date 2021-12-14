import { $ } from '../controller/utils.js';
import {
  headerTab,
  productAddTab,
  vendingMachineManageTab,
  productPurchaseTab,
} from '../model/template.js';
import { COIN_X_QUANTITY, VENDING_MACHINE_COIN_X_QUANTITY } from '../model/constants.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.showHeaderTab();
    this.setContainer();
    this.showAddTab();
  }

  setContainer() {
    this.$container = $('container');
  }

  showHeaderTab() {
    this.$app.insertAdjacentHTML('afterbegin', headerTab);
  }

  clearContainer() {
    this.$container.innerHTML = '';
  }

  showAddTab() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', productAddTab);
  }

  showVendingTab() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', vendingMachineManageTab);
  }

  showPurchaseTab() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', productPurchaseTab);
  }

  addTableHeader(table, headerForm) {
    table.insertAdjacentHTML('beforeend', headerForm);
  }

  addTableRow(table, rowForm) {
    table.insertAdjacentHTML('beforeend', rowForm);
  }

  setInnerHTML(target, value) {
    target.innerHTML = value;
  }

  clearInput(input) {
    input.value = '';
  }

  clearTable(table) {
    table.innerHTML = '';
  }

  initReturnTable(returnCoin) {
    returnCoin.forEach(x => {
      $(COIN_X_QUANTITY(x.coin)).innerHTML = `${x.quantity}개`;
    });
  }

  initVendingTable(vending) {
    if (vending) {
      vending.coins.forEach(
        x => ($(VENDING_MACHINE_COIN_X_QUANTITY(x.coin)).innerHTML = `${x.quantity}개`),
      );
    }
  }
}
