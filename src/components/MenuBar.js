import { $, createDiv, createBtn, ID } from '../utils/dom.js';
import ProductAdd from './ProductAdd.js';
import VendingMachineManage from './VendingMachineManage.js';
import ProductPurchase from './ProductPurchase.js';
import { LS_KEY, MENU_INDEX } from '../utils/constants.js';

export default class MenuBar {
  constructor() {
    this.init();
    this.loadRecentMenu();
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

    const $pageContentContainer = createDiv(ID.PAGE_CONTENT);
    $('#app').appendChild($pageContentContainer);
  };

  loadRecentMenu = () => {
    const recentMenu = localStorage.getItem(LS_KEY.RECENT_MENU);
    if (recentMenu === MENU_INDEX.PRODUCT_ADD) {
      new ProductAdd();
    }
    if (recentMenu === MENU_INDEX.VENDING_MACHINE_MANAGE) {
      new VendingMachineManage();
    }
    if (recentMenu === MENU_INDEX.PRODUCT_PURCHASE) {
      new ProductPurchase();
    }
  };

  saveRecentMenu = (id) => {
    localStorage.setItem(LS_KEY.RECENT_MENU, id);
  };

  handleMenuBarClick = (e) => {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;
    if (clickedBtn.id === ID.PRODUCT_ADD_MENU) {
      new ProductAdd();
      this.saveRecentMenu(MENU_INDEX.PRODUCT_ADD);
    }
    if (clickedBtn.id === ID.VENDING_MACHINE_MANAGE_MENU) {
      new VendingMachineManage();
      this.saveRecentMenu(MENU_INDEX.VENDING_MACHINE_MANAGE);
    }
    if (clickedBtn.id === ID.PRODUCT_PURCHASE_MENU) {
      new ProductPurchase();
      this.saveRecentMenu(MENU_INDEX.PRODUCT_PURCHASE);
    }
  };
}
