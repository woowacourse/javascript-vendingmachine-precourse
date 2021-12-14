import { TAB_MENU } from '../constants.js';
import { appendId, createTag } from './elementfunc.js';

function createTapBtn(tapMenuDiv) {
  const productAddMenu = createTag('button', 'product-add-menu', TAB_MENU.PRODUCT_ADD);
  const vendingMachineManageMenu = createTag(
    'button',
    'vending-machine-manage-menu',
    TAB_MENU.MACHINE_MANAGE,
  );
  const productPurchaseMenu = createTag(
    'button',
    'product-purchase-menu',
    TAB_MENU.PRODUCT_PURCHASE,
  );

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
