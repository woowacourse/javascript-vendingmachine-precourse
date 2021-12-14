export const TABS = {
  ADD_BUTTON_ID: 'product-add-menu',
  MANAGE_BUTTON_ID: 'vending-machine-manage-menu',
  PURCHASE_BUTTON_ID: 'product-purchase-menu',
};

export const ADD_TAB_ID = {
  NAME_INPUT: 'product-name-input',
  PRICE_INPUT: 'product-price-input',
  QUANTITY_INPUT: 'product-quantity-input',
  ADD_BUTTON: 'product-add-button',
  PRODUCT_TABLE: 'product-table',
};

export const ADD_TAB_CLASS = {
  TABLE_TR: 'product-manage-item',
  TABLE_TD_NAME: 'product-manage-name',
  TABLE_TD_PRICE: 'product-manage-price',
  TABLE_TD_QUANTITY: 'product-manage-quantity',
};

export const MANAGE_TAB_ID = {
  CHARGE_DIV: 'charge-div',
  CHARGE_INPUT: 'vending-machine-charge-input',
  CHARGE_BUTTON: 'vending-machine-charge-button',
  AMOUNT_SPAN: 'amount-span',
  AMOUNT_SPAN_VALUE: 'vending-machine-charge-amount',
};

export const COIN_TABLE_ID = {
  FIRST: 'vending-machine-coin-500-quantity',
  SECOND: 'vending-machine-coin-100-quantity',
  THIRD: 'vending-machine-coin-50-quantity',
  LAST: 'vending-machine-coin-10-quantity',
};

export const PURCHASE_TAB_ID = {
  CHARGE_INPUT: 'charge-input',
  CHARGE_BUTTON: 'charge-button',
  CHARGE_AMOUNT: 'charge-amount',
  RETURN_BUTTON: 'coin-return-button',
  PRODUCT_TABLE: 'purchase-product-table',
  COIN_TABLE: {
    FIRST: 'coin-500-quantity',
    SECOND: 'coin-100-quantity',
    THIRD: 'coin-50-quantity',
    LAST: 'coin-10-quantity',
  },
};

export const PURCHASE_TAB_CLASS = {
  PURCHASE_ITEM: 'product-purchase-item',
  PURCHASE_BUTTON: 'purchase-button',
  PRODUCT_NAME: 'product-purchase-name',
  PRODUCT_PRICE: 'product-purchase-price',
  PRODUCT_QUANTITY: 'product-purchase-quantity',
};

export const PURCHASE_TAB_DATASET = {
  PRODUCT_NAME: 'data-product-name',
  PRODUCT_PRICE: 'data-product-price',
  PRODUCT_QUANTITY: 'data-product-quantity',
};

export const COIN_VALUE = {
  FIRST: 500,
  SECOND: 100,
  THIRD: 50,
  LAST: 10,
};

export const ERROR_MESSAGE = {
  NAN: '숫자를 입력해 주세요.',
  NEGATIVE: '음수가 아닌 숫자를 입력해 주세요.',
  DUPLICATE: '상품 이름이 중복됩니다. 다른 이름을 입력해 주세요.',
  BELOW_TEN: '10원 이상으로 입력해 주세요.',
  TEN_UNIT: '10원 단위로 입력해 주세요.',
};
