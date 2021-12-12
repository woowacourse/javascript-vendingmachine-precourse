export const ERROR_MESSAGE = Object.freeze({
  DUPLICATED_NAME: '이미 같은 상품이 있습니다.',
  MINIMUM_PRICE: '상품 가격은 100원이상 입력해야합니다',
  MINIMUN_QUANTITY: '상품 수량은 1개 이상이어야 합니다.',
  MINIMUN_CHARGING: '충전 금액은 0원보다 커야 합니다.',
  MINIMUN_INSERT_MONEY: '투입 금액은 0원보다 커야 합니다.',
  DIVIDEING_NUM: '10원으로 나누어 떨어져야 합니다.',
  NOT_ENOUGH_MONEY: '금액이 부족합니다.',
  SOLD_OUT: '해당 제품은 매진되었습니다.',
  EMPTY: '값을 입력해주세요.'
});

export const ID = Object.freeze({
  MENU_COTAINER: 'menu-container',
  MAIN_CONTAINER: 'main-container',
  PRODUCT_ADD_MENU: 'product-add-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-input',
  VENDING_MACHINE_CHARGE_BUTTON: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  VENDING_MACHINE_COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
  VENDING_MACHINE_COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
  VENDING_MACHINE_COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
  VENDING_MACHINE_COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',
  CHARGE_INPUT: 'charge-input',
  CHARGE_AMOUNT: 'charge-amount',
  CHARGE_BUTTON: 'charge-button',
  COIN_RETURN_BUTTON: 'coin-return-button',
  COIN_500_QUANTITY: 'coin-500-quantity',
  COIN_100_QUANTITY: 'coin-100-quantity',
  COIN_50_QUANTITY: 'coin-50-quantity',
  COIN_10_QUANTITY: 'coin-10-quantity'
});

export const CLASS = Object.freeze({
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE_NAME: 'product-manage-name',
  PRODUCT_MANAGE_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',
  PURCHASE_BUTTON: 'purchase-button',
  PRODUCT_PURCHASE_BUTTON: 'product-purchase-name',
  PRODUCT_PURCHASE_PRICE: 'product-purchase-price',
  PRODUCT_ADD_QUANTITY: 'product-purchase-quantity',
  DATA_PRODUCT_NAME: 'data-product-name',
  DATA_PRODUCT_PRICE: 'data-product-price',
  DATA_PRODUCT_QUANTITY: 'data-product-quantity'
});

export const MINIMUM_PRICE = 100;
export const DIVIDEING_NUM = 10;
export const COIN_ARRAY = [500, 100, 50, 10];
export const NUM_500 = 500;
export const NUM_100 = 100;
export const NUM_50 = 50;
export const NUM_10 = 10;
export const ZERO = 0;

export const STORAGE_KEY = Object.freeze({
  PRODUCT_MANAGE: 'product_manage',
  VENDING_MACHINE_CHARGE_COIN: 'vending_machine_charge_coin',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending_machine_charge_amount',
  PURCHASE_CHARGE_AMOUNT: 'purchase_charge_amount'
});

export const TABLE_MENU = Object.freeze({
  PRODUCT_MANAGE: 'product_manage',
  CHARGE: 'charge',
  PURCHASE: 'purchase'
});
