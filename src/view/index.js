import { $, handleStorage } from '../controller/utils.js';
import {
  headerMenu,
  productAddMenu,
  vendingMachineManageMenu,
  productPurchaseMenu,
} from '../model/template.js';
import { KEY, COIN_X_QUANTITY, VENDING_MACHINE_COIN_X_QUANTITY } from '../model/constants.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.$app.insertAdjacentHTML('afterbegin', headerMenu);
    this.showAddMenu();
  }

  clearContainer() {
    $('container').innerHTML = '';
  }

  showAddMenu() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', productAddMenu);
  }

  showVendingMenu() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', vendingMachineManageMenu);
  }

  showPurchaseMenu() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', productPurchaseMenu);
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

  initVendingTable() {
    const vending = handleStorage.getItemOrNull(KEY.vending);
    if (vending) {
      vending.coins.forEach(
        x => ($(VENDING_MACHINE_COIN_X_QUANTITY(x.coin)).innerHTML = `${x.quantity}개`),
      );
    }
  }
}
