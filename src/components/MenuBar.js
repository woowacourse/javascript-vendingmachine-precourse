import { $, createDiv, createBtn, ID } from '../utils/dom.js';
import ProductAdd from './ProductAdd.js';
import VendingMachineManage from './VendingMachineManage.js';
import ProductPurchase from './ProductPurchase.js';

const LS_KEY_RECENT_MENU = 'recentMenu';

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

    // createPageContentContainer
    const $pageContentContainer = createDiv(ID.PAGE_CONTENT);
    $('#app').appendChild($pageContentContainer);
  };

  loadRecentMenu = () => {
    const recentMenu = localStorage.getItem(LS_KEY_RECENT_MENU);
    if (recentMenu === '0') new ProductAdd();
    if (recentMenu === '1') new VendingMachineManage();
    if (recentMenu === '2') new ProductPurchase();
  };

  saveRecentMenu = (id) => {
    localStorage.setItem(LS_KEY_RECENT_MENU, id);
  };

  handleMenuBarClick = (e) => {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;
    if (clickedBtn.id === ID.PRODUCT_ADD_MENU) {
      new ProductAdd();
      this.saveRecentMenu('0');
    }
    if (clickedBtn.id === ID.VENDING_MACHINE_MANAGE_MENU) {
      new VendingMachineManage();
      this.saveRecentMenu('1');
    }
    if (clickedBtn.id === ID.PRODUCT_PURCHASE_MENU) {
      new ProductPurchase();
      this.saveRecentMenu('2');
    }
  };
}
