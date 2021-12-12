import { $, getItemOrNull } from '../controller/utils.js';
import {
  fixMenus,
  productAddMenu,
  vendingMachineManageMenu,
  productPurchaseMenu,
} from '../model/dom.js';
import { KEY } from '../model/constants.js';

export const clearContainer = () => {
  $('container').innerHTML = '';
};

export const drawAddMenu = () => {
  clearContainer();
  $('container').insertAdjacentHTML('afterbegin', productAddMenu);
};

export const drawVendingMenu = () => {
  clearContainer();
  $('container').insertAdjacentHTML('afterbegin', vendingMachineManageMenu);
};

export const drawPurchaseMenu = () => {
  clearContainer();
  $('container').insertAdjacentHTML('afterbegin', productPurchaseMenu);
};

export const initView = () => {
  const $app = $('app');
  $app.insertAdjacentHTML('afterbegin', fixMenus);
  drawAddMenu();
};

export const addTableRow = (table, rowForm) => table.insertAdjacentHTML('beforeend', rowForm);

export const initReturnTable = returnCoin =>
  returnCoin.forEach(x => {
    $(`coin-${x.coin}-quantity`).innerHTML = `${x.quantity}개`;
  });

export const initVendingTable = () => {
  const vending = getItemOrNull(KEY.vending);
  if (vending) {
    vending.coins.forEach(
      x => ($(`vending-machine-coin-${x.coin}-quantity`).innerHTML = `${x.quantity}개`),
    );
  }
};
