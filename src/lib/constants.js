export const DOM = Object.freeze({
  APP: 'app',
  /** TAB */
  TAB_MENU_SECTION: 'tab-menu-section',
  PRODUCT_ADD_MENU: 'product-add-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  MAIN_SECTION: 'main-section',
  /** PRODUCT_ADD_MENU */
  PRODUCT_ADD_FORM: 'product-add-form',
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',

  PRODUCT_LIST_TABLE: 'product-list-table',
  PRODUCT_MANAGE_ITEM_CLASS: 'product-manage-item',
  PRODUCT_MANAGE_NAME_CLASS: 'product-manage-name',
  PRODUCT_MANAGE_PRICE_CLASS: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY_CLASS: 'product-manage-quantity',

  /** VENDING MACHINE CHARGE MENU */
  VENDING_MACHINE_CHARGE_FORM: 'vending-machine-charge-form',
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-input',
  VENDING_MACHINE_CHARGE_BUTTON: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  VENDING_MACHINE_COINS_TABLE: 'vending-machine-coins-table',
  VENDING_MACHINE_COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
  VENDING_MACHINE_COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
  VENDING_MACHINE_COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
  VENDING_MACHINE_COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',

  /** PRODUCT CHARGE MENU */
  CHARGE_FORM: 'charge-form',
  CHARGE_INPUT: 'charge-input',
  CHARGE_BUTTON: 'charge-button',
  CHARGE_AMOUNT: 'charge-amount',
  PRODUCT_PURCHASE_LIST_TABLE: 'product-purchase-list-table',
  COIN_RETURN_BUTTON: 'coin-return-button',
  COIN_500_QUANTITY: 'coin-500-quantity',
  COIN_100_QUANTITY: 'coin-100-quantity',
  COIN_50_QUANTITY: 'coin-50-quantity',
  COIN_10_QUANTITY: 'coin-10-quantity',

  /** PRODUCT LIST CLASS */
  PRODUCT_PURCHASE_ITEM_CLASSNAME: 'product-purchase-item',
  PURCHASE_BUTTON_CLASSNAME: 'purchase-button',
  PRODUCT_PURCHASE_NAME_CLASSNAME: 'product-purchase-name',
  PRODUCT_PURCHASE_PRICE_CLASSNAME: 'product-purchase-price',
  PRODUCT_PURCHASE_QUANTITY_CLASSNAME: 'product-purchase-quantity',

  DATASET_PRODUCT_NAME: 'data-product-name',
  DATASET_PRODUCT_PRICE: 'data-product-price',
  DATASET_PRODUCT_QUNATITY: 'data-product-quantity',
});
export const TAB = Object.freeze({
  PRODUCT_ADD_MENU: '상품 관리',
  VENDING_MACHINE_MANAGE_MENU: '잔돈 충전',
  PRODUCT_PURCHASE_MENU: '상품 구매',
});
export const PLAIN_TEXT = '';

export const INPUT_TYPE = Object.freeze({
  TEXT: 'text',
  NUMBER: 'number',
});

export const ERROR_MESSAGE = Object.freeze({
  PRODUCT_ADD_ERROR_HAS_EMPTY_VALUE: '모든 입력 창에 값을 입력해주세요',
  PRODUCT_ADD_ERROR_PRICE_IS_NEGATIVE_NUMBER: '가격에는 음수 값이 입력될 수 없습니다.',
  PRODUCT_ADD_ERROR_QUANTITY_IS_NEGATIVE_NUMBER: '수량에는 음수 값이 입력될 수 없습니다.',
  PRODUCT_ADD_ERROR_PRICE_DIVIDE_BY_10: '가격은 10으로 나누어 떨어져야합니다.',
  VENDING_MACHINE_ERROR_CHARGE_IS_NEGATIVE_NUMBER: '금액은 음수일 수 없습니다.',
  VENDING_MACHINE_ERROR_CHARGE_DEVIDE_BY_10: '금액은 10으로 나누어 떨어져야합니다.',
  PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_UNDEFINED: '그런 상품은 존재하지 않습니다.',
  PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_ZERO: '상품이 품절 되었습니다.',
  PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_TOO_EXPENSIVE: '투입 금액으로는 구매할 수 없습니다.',
});

export const CHARGE_AMOUNT_TEXT = '투입한 금액 : ';

export const FIVE_HUNDRED = 500;
export const ONE_HUNDRED = 100;
export const FIFTY = 50;
export const TEN = 10;

export const COIN_KEYS = [FIVE_HUNDRED, ONE_HUNDRED, FIFTY, TEN];

export const PRODUCT_ID_LENGTH = 6;
export const ID_RANGE = {
  MIN: 0,
  MAX: 9,
};
export const DATA_MODEL_KEYS = {
  TAB: 'tab',

  PRODUCT_ADD_INPUTS_VALUE: 'productAddInputsValue',
  PRODUCT_LIST: 'productList',

  VENDING_MACHINE_CHARGE_INPUTS_VALUE: 'vendingMachineChargeInputsValue',
  VENDING_MACHINE_CHARGE: 'vendingMachineCharge',
  COINS: 'coins',

  CHARGE_INPUTS_VALUE: 'chargeInputsValue',
  CHARGE_AMOUNT: 'chargeAmount',
  RETURN_COINS: 'returnCoins',
};

export const LOCALSTORAGE_DATA_MODEL_KEY = 'data-model';
