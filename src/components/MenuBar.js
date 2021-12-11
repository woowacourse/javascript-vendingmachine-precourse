import { $, createDiv, createBtn, ID } from '../utils/dom.js';
import ProductAdd from './ProductAdd.js';
import VendingMachineManage from './VendingMachineManage.js';
import ProductPurchase from './ProductPurchase.js';

export default class MenuBar {
  constructor() {
    this.init();
    $(`#${ID.MENU_BAR}`).addEventListener('click', this.handleMenuBarClick);
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
    $('#app').appendChild($menuBar);
  };

  handleMenuBarClick = (e) => {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;
    if (clickedBtn.id === ID.PRODUCT_ADD_MENU) {
      new ProductAdd();
    }
    if (clickedBtn.id === ID.VENDING_MACHINE_MANAGE_MENU) {
      new VendingMachineManage();
    }
    if (clickedBtn.id === ID.PRODUCT_PURCHASE_MENU) {
      new ProductPurchase();
    }
  };
}
