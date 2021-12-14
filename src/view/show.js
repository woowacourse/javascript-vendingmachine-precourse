import {
  $,
  productListTable,
  productPurchaseTable,
} from '../common/dom/templates.js';
import {
  DISPLAY,
  INSERT_HTML,
  PRODUCT,
  SELECTOR,
} from '../common/constants/constants.js';

const insertToHTML = () => {
  const $app = $('#app');

  $app.insertAdjacentHTML(INSERT_HTML.AFTER_BEGIN, SELECTOR.HEADER);
  $app.insertAdjacentHTML(INSERT_HTML.BEFORE_END, SELECTOR.PRODUCT_MANAGE);
  $app.insertAdjacentHTML(INSERT_HTML.BEFORE_END, SELECTOR.VENDING_MANAGE);
  $app.insertAdjacentHTML(INSERT_HTML.BEFORE_END, SELECTOR.PRODUCT_PURCHASE);
};

export const createProductListTable = () => {
  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));
  const $procuctAddListTable = $('.product-add-menu table tbody');
  const $procuctPurchaseListTable = $('.product-purchase-menu table tbody');

  for (let i = 0; i < productListArray.length; i++) {
    $procuctAddListTable.insertAdjacentHTML(
      INSERT_HTML.AFTER_BEGIN,
      productListTable
    );
    $procuctPurchaseListTable.insertAdjacentHTML(
      INSERT_HTML.AFTER_BEGIN,
      productPurchaseTable
    );

    break;
  }
};
// 초기 탭 디스플레이 세팅
const switchTab = () => {
  const $header = $('.header');
  const $productManager = $('.product-add-menu');
  const $vendingMachineMenu = $('.vending-machine-manage-menu');
  const $productPurchaseMenu = $('.product-purchase-menu');

  $header.style.display = DISPLAY.BLOCK;
  $productManager.style.display = DISPLAY.BLOCK;
  $vendingMachineMenu.style.display = DISPLAY.NONE;
  $productPurchaseMenu.style.display = DISPLAY.NONE;
};

export const initHTML = () => {
  insertToHTML();
  switchTab();
};
