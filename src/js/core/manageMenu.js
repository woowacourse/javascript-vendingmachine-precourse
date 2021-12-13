import { renderMenuItems } from '../render/common.js';
import { $ } from '../util/dom.js';
import { store } from '../store/store.js';
import { check } from '../util/checkValue.js';
import { localStorageConstants } from '../constant/localstorage.js';
import { stringConstants, productItemsConstants } from '../constant/string.js';

export const makeMenuTemplte = e => {
  e.preventDefault();
  const menuTemplate = {
    name: $('#product-name-input').value,
    price: $('#product-price-input').value,
    quantity: $('#product-quantity-input').value,
  };
  if (check.menuCorrect(menuTemplate)) {
    window.alert(stringConstants.ALERT);
    return;
  }
  addMenuToMenuTable(menuTemplate);
  renderMenuItems(productItemsConstants);
};

export const addMenuToMenuTable = menuTemplate => {
  let menus = store.getItem(localStorageConstants.MENU);
  let menuList = [];
  if (menus !== null) {
    for (let menu in menus) {
      menuList.push(menus[menu]);
    }
  }
  menuList.push(menuTemplate);
  store.setItem(localStorageConstants.MENU, menuList);
};

export const purchaseMenu = target => {
  const targetName = target.closest('tr').firstChild.innerText;
  const menus = store.getItem(localStorageConstants.MENU);
  let inputtedAmount = store.getItem(localStorageConstants.INPUT_AMOUNT);
  const targetMenu = menus
    .filter(menu => menu.name === targetName)
    .filter(menu => menu.quantity >= 1);
  if (targetMenu[0] !== undefined && targetMenu[0].price <= inputtedAmount) {
    targetMenu[0].quantity -= 1;
    inputtedAmount -= targetMenu[0].price;
  }
  store.setItem(localStorageConstants.INPUT_AMOUNT, inputtedAmount);
  store.setItem(localStorageConstants.MENU, menus);
};
