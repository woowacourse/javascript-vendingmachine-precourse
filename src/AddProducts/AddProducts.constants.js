// title
const TITLE_FORM = '상품 추가하기';
export const TITLE_CURRENT_STATUS = '상품 현황';

// element id, class, dataset strings
export const ID_PRODUCT_ADD_TAB = 'product-add-section';
export const ID_PRODUCT_NAME_INPUT = 'product-name-input';
export const ID_PRODUCT_PRICE_INPUT = 'product-price-input';
export const ID_PRODUCT_QUANTITY_INPUT = 'product-quantity-input';
export const ID_PRODUCT_ADD_SUBMIT = 'product-add-button';
export const ID_PRODUCT_ADD_STATUS = 'product-add-status';
export const CLASS_PRODUCT_ITEM = 'product-manage-item';
export const CLASS_PRODUCT_NAME = 'product-manage-name';
export const CLASS_PRODUCT_PRICE = 'product-manage-price';
export const CLASS_PRODUCT_QUANTITY = 'product-manage-quantity';

// placeholders, button value, header values, column size
const STRING_PRODUCT_NAME = '상품명';
const STRING_PRODUCT_PRICE = '가격';
const STRING_PRODUCT_QUANTITY = '수량';
const VAL_PRODUCT_ADD_SUBMIT = '추가하기';
export const VAL_GRID_COLUMN_SIZE = '200px 100px 100px';
export const VAL_PRICE_ROUND_STANDARD = 10;

// error messages
export const ERROR_DUPLICATE_NAME = '이미 존재하는 상품입니다.';
export const ERROR_EMPTY_NAME = '상품명을 입력해주세요';
export const ERROR_INVALID_PRICE = '가격이 유효하지 않습니다';
export const ERROR_INVALID_QUANTITY = '수량이 유효하지 않습니다';

// item objects for form container
export const PRODUCT_TAB_FORM_CONTAINER_ITEMS = [
  {
    tag: 'h2',
    value: TITLE_FORM,
  },
  {
    tag: 'input',
    attributes: {
      id: ID_PRODUCT_NAME_INPUT,
      type: 'text',
      placeholder: STRING_PRODUCT_NAME,
    },
  },
  {
    tag: 'input',
    attributes: {
      id: ID_PRODUCT_PRICE_INPUT,
      type: 'number',
      placeholder: STRING_PRODUCT_PRICE,
    },
  },
  {
    tag: 'input',
    attributes: {
      id: ID_PRODUCT_QUANTITY_INPUT,
      type: 'number',
      placeholder: STRING_PRODUCT_QUANTITY,
    },
  },
  {
    tag: 'button',
    attributes: {
      id: ID_PRODUCT_ADD_SUBMIT,
    },
    value: VAL_PRODUCT_ADD_SUBMIT,
  },
];

// item objects for current product grid
export const CURRENT_GRID_HEADERS = [
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
];
