export const constantsInit = () => {
  Object.entries(ELEMENT_ID).forEach(([key, value]) => (ELEMENT_SID[key] = `#${value}`));
  Object.entries(ELEMENT_CLASS).forEach(([key, value]) => (ELEMENT_SCLASS[key] = `.${value}`));
};
export const ELEMENT_ID = {
  APP: 'app',
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
  PURCHASE_CHARGE_INPUT: 'charge-input',
  PURCHASE_CHARGE_BUTTON: 'charge-button',
  PURCHASE_CHARGE_AMOUNT: 'charge-amount',
  COIN_RETURN_BUTTON: 'coin-return-button',
  PURCHASE_BUTTON: 'purchase-button',
  PRODUCT_PURCHASE_TBODY: 'product-purchase-tbody',
  COIN_QUANTITY(coin) {
    return `vending-machine-coin-${coin}-quantity`;
  },
};
export const ELEMENT_SID = {};
export const ELEMENT_CLASS = {
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE_NAME: 'product-manage-name',
  PRODUCT_MANAGE_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',
  PRODUCT_PURCHASE_ITEM: 'product-purchase-item',
  PRODUCT_PURCHASE_NAME: 'product-purchase-name',
  PRODUCT_PURCHASE_PRICE: 'product-purchase-price',
  PRODUCT_PURCHASE_QUANTITY: 'product-purchase-quantity',
  PURCHASE_BUTTON: 'purchase-button',
  TABLE_COMMON: 'table-common',
  VENDING_MACHINE_TABLE: 'vending-machine-table',
  PRODUCTS_TABLE: 'products-table',
  COINS_TABLE: 'coins-table',
};
export const ELEMENT_SCLASS = {};
export const EVENT_TYPE = {
  CHANGE_TAB: 'changeTab',
  ADD_PRODUCT: 'addProduct',
  CHARGE_COIN: 'chargeCoin',
  CHARGE_MONEY: 'chargeMoney',
  PURCHASE_ITEM: 'purchaseItem',
  RETURN_COINS: 'returnCoins',
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
  BUY: '구매',
};
export const PLACEHOLDER = {
  CHARGE_AMOUNT: '투입할 금액',
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
  NOT_ENOUGH_QUANTITY: '수량이 부족합니다.',
  NOT_ENOUGH_MONEY: '돈이 부족합니다.',
  SAME_NAME_PRODUCT_EXIST: '같은 이름의 상품이 있습니다.',
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
  UNIT: '개',
};
export const COINS_INIT_OBJECT = {
  500: 0,
  100: 0,
  50: 0,
  10: 0,
};

export const LOCALSTORAGE = {
  INPUT_MONEY: 'inputMoney',
  COINS: 'coins',
  PRODUCTS: 'products',
};
