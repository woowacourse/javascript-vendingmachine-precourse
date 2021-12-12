import { TAB_MENU } from '../constants.js';
import { appendText, appendId } from './elementfunc.js';

function setTapBtnName(productAdd, vendingMachineManage, productPurchase) {
  appendText(productAdd, TAB_MENU.PRODUCT_ADD);
  appendText(vendingMachineManage, TAB_MENU.MACHINE_MANAGE);
  appendText(productPurchase, TAB_MENU.PRODUCT_PURCHASE);
}

function setTapBtnId(productAdd, vendingMachineManage, productPurchase) {
  appendId(productAdd, 'product-add-menu');
  appendId(vendingMachineManage, 'vending-machine-manage-menu');
  appendId(productPurchase, 'product-purchase-menu');
}

function createTapBtn(tapMenuDiv) {
  const productAddMenu = document.createElement('button');
  const vendingMachineManageMenu = document.createElement('button');
  const productPurchaseMenu = document.createElement('button');

  setTapBtnId(productAddMenu, vendingMachineManageMenu, productPurchaseMenu);
  setTapBtnName(productAddMenu, vendingMachineManageMenu, productPurchaseMenu);

  tapMenuDiv.appendChild(productAddMenu);
  tapMenuDiv.appendChild(vendingMachineManageMenu);
  tapMenuDiv.appendChild(productPurchaseMenu);
}

function createTapMenuDiv() {
  const tapMenuDiv = document.createElement('div');
  const tapMenuTitle = document.createElement('h1');
  tapMenuTitle.innerHTML = TAB_MENU.TITLE;
  tapMenuDiv.appendChild(tapMenuTitle);

  createTapBtn(tapMenuDiv);
  appendId(tapMenuDiv, 'tap-menu');
  document.querySelector('#app').appendChild(tapMenuDiv);
}

export default function tapBtnInit() {
  createTapMenuDiv();
}
