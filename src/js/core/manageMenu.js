import { $ } from '../util/dom.js';
import { store } from '../store/store.js';
import { check } from '../util/checkValue.js';
import { localStorageConstants } from '../constant/localstorage.js';
import { stringConstants } from '../constant/string.js';
// prettier-ignore
import { renderProductItems, renderProductPurchaseMenu } from '../render/render.js';

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
  renderProductItems();
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
  const menuToPurchaseName =
    target.closest('tr').firstChild.nextSibling.innerText;
  const menus = store.getItem(localStorageConstants.MENU);
  let inputtedAmount = store.getItem(localStorageConstants.INPUT_AMOUNT);

  const menusToPurchase = menus
    .filter(menu => menu.name === menuToPurchaseName)
    .filter(menu => menu.quantity >= 1);
  console.log(menusToPurchase[0].price, inputtedAmount);
  if (menusToPurchase[0].price <= inputtedAmount) {
    menusToPurchase[0].quantity -= 1;
    inputtedAmount -= menusToPurchase[0].price;
  }
  store.setItem(localStorageConstants.INPUT_AMOUNT, inputtedAmount);
  store.setItem(localStorageConstants.MENU, menus);
  renderProductPurchaseMenu();
};
