import { $, getItemOrNull } from '../controller/utils.js';
import {
  fixMenus,
  productAddMenu,
  vendingMachineManageMenu,
  productPurchaseMenu,
} from '../model/dom.js';
import { KEY, COIN_X_QUANTITY, VENDING_MACHINE_COIN_X_QUANTITY } from '../model/constants.js';

export const clearContainer = () => {
  $('container').innerHTML = '';
};

export const showAddMenu = () => {
  clearContainer();
  $('container').insertAdjacentHTML('afterbegin', productAddMenu);
};

export const showVendingMenu = () => {
  clearContainer();
  $('container').insertAdjacentHTML('afterbegin', vendingMachineManageMenu);
};

export const showPurchaseMenu = () => {
  clearContainer();
  $('container').insertAdjacentHTML('afterbegin', productPurchaseMenu);
};

export const initView = () => {
  const $app = $('app');
  $app.insertAdjacentHTML('afterbegin', fixMenus);
  showAddMenu();
};

export const addTableHeader = (table, headerForm) =>
  table.insertAdjacentHTML('beforeend', headerForm);

export const addTableRow = (table, rowForm) => table.insertAdjacentHTML('beforeend', rowForm);

export const setInnerHTML = (target, value) => (target.innerHTML = value);

export const clearInput = input => (input.value = '');

export const clearTable = table => (table.innerHTML = '');

export const initVendingTable = () => {
  const vending = getItemOrNull(KEY.vending);
  if (vending) {
    vending.coins.forEach(
      x => ($(VENDING_MACHINE_COIN_X_QUANTITY(x.coin)).innerHTML = `${x.quantity}개`),
    );
  }
};
