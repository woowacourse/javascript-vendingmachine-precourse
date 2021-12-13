import SELECTOR from './selector.js';

export const PRODUCT_ADD_MENU = '상품 관리';
export const VENDING_MACHINE_MANAGE_MENU = '잔돈 충전';
export const PRODUCT_PURCHASE_MENU = '상품 구매';

export const MENU_BUTTONS = [
  {
    text: PRODUCT_ADD_MENU,
    id: SELECTOR.productAddMenuId,
  },
  {
    text: VENDING_MACHINE_MANAGE_MENU,
    id: SELECTOR.vendingMachineManageMenuId,
  },
  {
    text: PRODUCT_PURCHASE_MENU,
    id: SELECTOR.productPurchaseMenuId,
  },
];

export const COIN_500 = 500;
export const COIN_100 = 100;
export const COIN_50 = 50;
export const COIN_10 = 10;

export const COIN_LIST = [COIN_500, COIN_100, COIN_50, COIN_10];
