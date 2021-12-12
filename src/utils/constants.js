export const ERROR_MESSAGE = Object.freeze({
  SAME_NAME: '이미 같은 상품이 있습니다.',
  MINIMUM_PRICE: '상품 가격은 100원이상 입력해야합니다',
  MINIMUN_QUANTITY: '상품 수량은 0개 이상이어야 합니다.',
  MINIMUN_CHARGING: '충전 금액은 0원 이상이어야 합니다.',
  MINIMUN_INSERT_MONEY: '상품 가격은 0원 이상이어야 합니다.',
  DIVIDEING_NUM: '10원으로 나누어 떨어져야 합니다.',
  NOT_ENOUGH_MONEY: '금액이 부족합니다.',
  SOLD_OUT: '해당 제품은 매진되었습니다.',
  EMPTY: '값을 입력해주세요.'
});

export const SELECTOR = Object.freeze({
  PRODUCT_ADD_MENU: '#product-add-menu',
  VENDING_MACHINE_MANAGE_MENU: '#vending-machine-manage-menu',
  PRODUCT_PURCHASE_MENU: '#product-purchase-menu',
  PRODUCT_ADD_BUTTON: '#product-add-button',
  VENDING_MACHINE_CHARGE_BUTTON: '#vending-machine-charge-button',
  CHARGE_BUTTON: '#charge-button',
  COIN_RETURN_BUTTON: '#coin-return-button',
  PURCHASE_BUTTON: '.purchase-button'
});

export const MINIMUM_PRICE = 100;
export const DIVIDEING_NUM = 10;
export const COIN_ARRAY = [500, 100, 50, 10];
export const NUM_500 = 500;
export const NUM_100 = 100;
export const NUM_50 = 50;
export const NUM_10 = 10;
export const ZERO = 0;
