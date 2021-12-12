export const ELEMENT_SID = {
  APP: '#app',
  TAB_VIEW: '#tab-view',
  RESULT_VIEW: '#result-view',
  PRODUCT_NAME_INPUT: '#product-name-input',
  PRODUCT_PRICE_INPUT: '#product-price-input',
  PRODUCT_QUANTITY_INPUT: '#product-quantity-input',
  PRODUCT_ADD_BUTTON: '#product-add-button',
  CHARGE_INPUT: '#vending-machine-charge-input',
};
export const ELEMENT_ID = {
  TAB_VIEW: 'tab-view',
  RESULT_VIEW: 'result-view',
  PRODUCT_ADD_MENU: 'product-add-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',
  CHARGE_INPUT: 'vending-machine-charge-input',
  CHARGE_BUTTON: 'vending-machine-charge-button',
  CHARGE_AMOUNT: 'vending-machine-charge-amount',
  COIN_QUANTITY(coin) {
    return `vending-machine-coin-${coin}-quantity`;
  },
};
export const ELEMENT_CLASS = {
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE_NAME: 'product-manage-name',
  PRODUCT_MANAGE_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',
};
export const EVENT_TYPE = {
  CHANGE_TAB: 'changeTab',
  ADD_PRODUCT: 'addProduct',
  CHARGE_COIN: 'chargeCoin',
};
export const TAB = {
  MANAGE_PRODUCT: '상품 관리',
  CHARGE_CHANGE: '잔돈 충전',
  PURCHASE_PRODUCT: '상품 구매',
};
export const PRODUCT = {
  NAME: '상품명',
  PRICE: '가격',
  QUANTITY: '수량',
};
export const ALERT = {
  EMPTY_PRODUCT_NAME: '상품 이름을 입력해주세요.',
  EMPTY_PRODUCT_PRICE: '상품 가격을 입력해주세요.',
  EMPTY_PRODUCT_QUANTITY: '상품 개수를 입력해주세요.',
  WRONG_PRODUCT_PRICE: '잘못된 상품 가격입니다.',
  WRONG_PRODUCT_QUANTITY: '잘못된 상품 개수입니다.',
  NOT_10_UNIT_PRICE: '상품 가격이 10원 단위로 떨어져야 합니다.',
  EMPTY_MONEY_INPUT: '자판기가 보유할 금액을 입력해주세요.',
  WRONG_CHARGE_INPUT: '잘못된 충전 금액입니다.',
};

export const COINS = [500, 100, 50, 10];

export const CHARGE = {
  COIN: '동전',
  COUNT: '개수',
  COIN_500: '500',
  COIN_100: '100',
  COIN_50: '50',
  COIN_10: '10',
  WON: '원',
};

export const COINS_INIT_OBJECT = {
  500: 0,
  100: 0,
  50: 0,
  10: 0,
};
