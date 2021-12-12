import {
  $,
  productListTable,
  productPurchaseTable,
} from '../common/dom/dom.js';
import { SELECTOR } from '../common/constants/constants.js';

const insertToHTML = () => {
  const $app = $('#app');

  $app.insertAdjacentHTML('afterbegin', SELECTOR.HEADER);
  $app.insertAdjacentHTML('beforeend', SELECTOR.PRODUCT_MANAGE);
  $app.insertAdjacentHTML('beforeend', SELECTOR.VENDING_MANAGE);
  $app.insertAdjacentHTML('beforeend', SELECTOR.PRODUCT_PURCHASE);
};

export const createProductListTable = () => {
  const productListArray = JSON.parse(localStorage.getItem('productList'));
  const $procuctAddListTable = $('.product-add-menu table tbody');
  const $procuctPurchaseListTable = $('.product-purchase-menu table tbody');

  for (let i = 0; i < productListArray.length; i++) {
    $procuctAddListTable.insertAdjacentHTML('afterbegin', productListTable);
    $procuctPurchaseListTable.insertAdjacentHTML(
      'afterbegin',
      productPurchaseTable
    );

    break;
  }
};

const switchTab = () => {
  const $header = $('.header');
  const $productManager = $('.product-add-menu');
  const $vendingMachineMenu = $('.vending-machine-manage-menu');
  const $productPurchaseMenu = $('.product-purchase-menu');

  $header.style.display = 'block';
  $productManager.style.display = 'block';
  $vendingMachineMenu.style.display = 'none';
  $productPurchaseMenu.style.display = 'none';
};

export const initHTML = () => {
  insertToHTML();
  switchTab();
};
