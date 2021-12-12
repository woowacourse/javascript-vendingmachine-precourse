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

  // product add
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BTN: 'product-add-button',

  // vending machine manage
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-input',
  VENDING_MACHINE_CHARGE_BTN: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  VENDING_MACHINE_COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
  VENDING_MACHINE_COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
  VENDING_MACHINE_COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
  VENDING_MACHINE_COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',

  // product purchase
  CHARGE_INPUT: 'charge-input',
  CHARGE_BTN: 'charge-button',
  CHARGE_AMOUNT: 'charge-amount',
  COIN_RETURN_BTN: 'coin-return-button',
  COIN_500_QUANTITY: 'coin-500-quantity',
  COIN_100_QUANTITY: 'coin-100-quantity',
  COIN_50_QUANTITY: 'coin-50-quantity',
  COIN_10_QUANTITY: 'coin-10-quantity',
};

export const CLASS = {
  // product add
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE_NAME: 'product-manage-name',
  PRODUCT_MANAGE_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',

  // product purchase
  PRODUCT_PURCHASE_ITEM: 'product-purchase-item',
  PURCHASE_BTN: 'purchase-button',
  PRODUCT_PURCHASE_NAME: 'product-purchase-name',
  PRODUCT_PURCHASE_PRICE: 'product-purchase-price',
  PRODUCT_PURCHASE_QUANTITY: 'product-purchase-quantity',
};

export const DATASET = {
  // product purchase
  DATA_PRODUCT_NAME: 'data-product-name',
  DATA_PRODUCT_PRICE: 'data-product-price',
  DATA_PRODUCT_QUANTITY: 'data-product-quantity',
};
