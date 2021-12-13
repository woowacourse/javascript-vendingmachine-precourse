/* eslint-disable comma-dangle */

import { $, setDisplayBlock, setDisplayNone } from '../common/elements.js';

function onProductManageMenuClick(event) {
  event.preventDefault();
  setDisplayBlock($('product-manage-div'));
  setDisplayNone($('change-charge-div'));
}

function setProductManageMenu() {
  $('product-add-menu').addEventListener('click', onProductManageMenuClick);
}

function onChangeChargeMenuClick(event) {
  event.preventDefault();
  setDisplayNone($('product-manage-div'));
  setDisplayBlock($('change-charge-div'));
}

function setChangeChargeMenu() {
  $('vending-machine-manage-menu').addEventListener(
    'click',
    onChangeChargeMenuClick
  );
}

function onProductPurchaseMenuClick(event) {
  event.preventDefault();
  setDisplayNone($('product-manage-div'));
  setDisplayNone($('change-charge-div'));
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
