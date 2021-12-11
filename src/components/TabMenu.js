import { $, createDiv, createBtn, ID } from '../utils/dom.js';
import {
  productAddMenuTemplate,
  vendingMachineManageMenuTemplate,
  productPurchaseMenuTemplate,
} from '../utils/templates.js';

export default class TabMenu {
  constructor() {
    this.init();
  }

  init = () => {
    const $menuBar = createDiv(ID.MENU_BAR);
    const $productAddMenuBtn = createBtn(ID.PRODUCT_ADD_MENU, '상품 관리');
    const $vendingMachineManageMenuBtn = createBtn(
      ID.VENDING_MACHINE_MANAGE_MENU,
      '잔돈 충전'
    );
    const $productPurchaseMenuBtn = createBtn(ID.PRODUCT_PURCHASE_MENU, '상품 구매');
    $menuBar.appendChild($productAddMenuBtn);
    $menuBar.appendChild($vendingMachineManageMenuBtn);
    $menuBar.appendChild($productPurchaseMenuBtn);
    $menuBar.addEventListener('click', this.handleMenuBarClick);
    $('#app').appendChild($menuBar);
  };

  handleMenuBarClick = (e) => {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;
    if (clickedBtn.id === ID.PRODUCT_ADD_MENU) {
      $(`#${ID.PAGE_CONTENT}`).innerHTML = productAddMenuTemplate();
    }
    if (clickedBtn.id === ID.VENDING_MACHINE_MANAGE_MENU) {
      $(`#${ID.PAGE_CONTENT}`).innerHTML = vendingMachineManageMenuTemplate();
    }
    if (clickedBtn.id === ID.PRODUCT_PURCHASE_MENU) {
      $(`#${ID.PAGE_CONTENT}`).innerHTML = productPurchaseMenuTemplate();
    }
  };
}
