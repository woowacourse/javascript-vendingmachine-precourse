export const $ = (selector) => document.querySelector(selector);
export const createDiv = (id) => {
  const $div = document.createElement('div');
  $div.id = id;
  return $div;
};
export const createBtn = (id, value) => {
  const $btn = document.createElement('button');
  $btn.id = id;
  $btn.innerHTML = value;
  return $btn;
};

export const ID = {
  // page
  PAGE_CONTENT: 'page-content-container',

  // menu bar
  MENU_BAR: 'menu-bar',
  PRODUCT_ADD_MENU: 'product-add-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
};
