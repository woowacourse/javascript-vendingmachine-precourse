export const ID = {
  MENU_BUTTON_CONTAINER: 'menu-button-container',
  RESULT_CONTAINER: 'result-container',
  PRODUCT_ADD_MENU: 'product-add-menu',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  // product
  PRODUCT_INPUT_CONTAINER: 'prodduct-input-container',
  PRODUCT_TABLE_CONTAINER: 'prodduct-table-container',
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',
};

export const NUM = {
  PRICE_MIN_UNIT: 10,
  PRICE_MIN_COUNT: 100,
  QUANTITY_MIN_COUNT: 1,
};

export const ERROR = {
  PRODUCT_NAME_IS_BLANK: '상품 이름이 빈값입니다.',
  PRICE_IS_NOT_CORRECT: `금액은 ${NUM.PRICE_MIN_COUNT}원 이상이고, ${NUM.PRICE_MIN_UNIT}원 단위로 입력해주세요.`,
  QUANTITY_IS_NOT_CORRECT: `상품 개수를 ${NUM.QUANTITY_MIN_COUNT}이상의 정수로 입력해주세요.`,
};
