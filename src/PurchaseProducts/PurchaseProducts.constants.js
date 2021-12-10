// title
const TITLE_FORM = '금액 투입';
export const TITLE_RETURN_COIN_STATUS = '잔돈';
export const TITLE_PURCHASE_PRODUCT_GRID = '구매할 수 있는 상품 현황';

// element id, class, dataset strings
export const ID_PURCHASE_TAB = 'product-purchase-section';
export const ID_PURCHASE_CHARGE_INPUT = 'charge-input';
export const ID_PURCHASE_CHARGE_SUBMIT = 'charge-button';
export const ID_PURCHASE_CHARGE_AMOUNT = 'charge-amount';
export const ID_PURCHASE_COIN_RETURN_BUTTON = 'coin-return-button';
export const ID_RETURN_COIN_STATUS = 'coin-return-status';
export const ID_RETURN_COIN_500_QUANTITY = 'coin-500-quantity';
export const ID_RETURN_COIN_100_QUANTITY = 'coin-100-quantity';
export const ID_RETURN_COIN_50_QUANTITY = 'coin-50-quantity';
export const ID_RETURN_COIN_10_QUANTITY = 'coin-10-quantity';
export const ID_PURCHASE_PRODUCT_GRID = 'purchase-product-grid';
export const CLASS_PURCHASE_ITEM = 'product-purchase-item';
export const CLASS_PURCHASE_BUTTON = 'purchase-button';
export const CLASS_PURCHASE_NAME = 'product-purchase-name';
export const CLASS_PURCHASE_PRICE = 'product-purchase-price';
export const CLASS_PURCHASE_QUANTITY = 'product-purchase-quantity';
export const DATA_PRODUCT_NAME = 'data-product-name';
export const DATA_PRODUCT_PRICE = 'data-product-price';
export const DATA_PRODUCT_QUANTITY = 'data-product-quantity';

// placeholder, button values
const PLACEHOLDER_CHARGE_INPUT = '투입할 금액';
const VAL_CHARGE_SUBMIT = '투입하기';
export const STRING_CHARGE_AMOUNT_LABEL = '투입한 금액: ';
const STRING_COIN_NAMES_HEADER = '동전';
const STRING_COIN_QUANTITY_HEADER = '갯수';
const STRING_COIN_500 = '500';
const STRING_COIN_100 = '100';
const STRING_COIN_50 = '50';
const STRING_COIN_10 = '10';
const STRING_PRODUCT_NAME = '상품명';
const STRING_PRODUCT_PRICE = '가격';
const STRING_PRODUCT_QUANTITY = '수량';
const STRING_PURCHASE_BUTTON = '구매';
export const VAL_PRODUCT_GRID_COLUMN_SIZE = '200px 100px 100px 100px';
export const VAL_COIN_GRID_COLUMN_SIZE = '100px 100px';

// item object for form container
export const CHARGE_MACHINE_FORM_CONTAINER_ITEMS = [
  {
    tag: 'h2',
    value: TITLE_FORM,
  },
  {
    tag: 'input',
    attributes: {
      id: ID_PURCHASE_CHARGE_INPUT,
      type: 'text',
      placeholder: PLACEHOLDER_CHARGE_INPUT,
    },
  },
  {
    tag: 'button',
    attributes: {
      id: ID_PURCHASE_CHARGE_SUBMIT,
    },
    value: VAL_CHARGE_SUBMIT,
  },
];

// item object for purchase grid
export const PURCHASE_GRID_HEADERS = [
  {
    tag: 'div',
    value: STRING_PRODUCT_NAME,
  },
  {
    tag: 'div',
    value: STRING_PRODUCT_PRICE,
  },
  {
    tag: 'div',
    value: STRING_PRODUCT_QUANTITY,
  },
  {
    tag: 'div',
    value: STRING_PURCHASE_BUTTON,
  },
];

// item objects for coin return grid
export const COIN_RETURN_ITEMS = [
  {
    tag: 'div',
    value: STRING_COIN_NAMES_HEADER,
  },
  {
    tag: 'div',
    value: STRING_COIN_QUANTITY_HEADER,
  },
  {
    tag: 'div',
    value: STRING_COIN_500,
  },
  {
    tag: 'div',
    attributes: {
      id: ID_RETURN_COIN_500_QUANTITY,
    },
  },
  {
    tag: 'div',
    value: STRING_COIN_100,
  },
  {
    tag: 'div',
    attributes: {
      id: ID_RETURN_COIN_100_QUANTITY,
    },
  },
  {
    tag: 'div',
    value: STRING_COIN_50,
  },
  {
    tag: 'div',
    attributes: {
      id: ID_RETURN_COIN_50_QUANTITY,
    },
  },
  {
    tag: 'div',
    value: STRING_COIN_10,
  },
  {
    tag: 'div',
    attributes: {
      id: ID_RETURN_COIN_10_QUANTITY,
    },
  },
];
