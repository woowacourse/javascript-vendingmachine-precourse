/* eslint-disable comma-dangle */

import { $ } from '../common/elements.js';

function onProductManageMenuClick(event) {
  event.preventDefault();
  $('product-manage-div').style.display = 'block';
}

function setProductManageMenu() {
  $('product-add-menu').addEventListener('click', onProductManageMenuClick);
}

function onChangeChargeMenuClick(event) {
  event.preventDefault();
  $('product-manage-div').style.display = 'none';
}

function setChangeChargeMenu() {
  $('vending-machine-manage-menu').addEventListener(
    'click',
    onChangeChargeMenuClick
  );
}

function onProductPurchaseMenuClick(event) {
  event.preventDefault();
  $('product-manage-div').style.display = 'none';
}

function setProductPurchaseMenu() {
  $('product-purchase-menu').addEventListener(
    'click',
    onProductPurchaseMenuClick
  );
}

export default function setTabMenu() {
  setProductManageMenu();
  setChangeChargeMenu();
  setProductPurchaseMenu();
}
