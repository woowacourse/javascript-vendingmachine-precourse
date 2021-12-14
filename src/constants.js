export const ERROR_MESSAGE = {
  NO_SELECTOR: '선택자를 입력해주세요',
  INCORRECT_NUMBER: '올바른 숫자를 입력해주세요.',
  NO_TEXT: '텍스트를 입력해주세요.',
  INCORRECT_TEN_DIGITS: '10의 자리 숫자로 입력해주세요.',
  NOT_ENOUGH_MONEY: '금액이 부족합니다.',
  MORE_THAN_ONE_HUNDRED: '최소 충전 금액이 100원 이상입니다.',
  DUPLICATE_PRODUCT_NAME: '이미 등록된 상품이 있습니다.',
};

export const NUMBER_FALLS_BY_TEN = 10;
export const MINIMUM_PRODUCT_PRICE = 100;

export const STYLE_DISPLAY = {
  BLOCK: 'block',
  INLINE_BLOCK: 'inline-block',
  NONE: 'none',
}

export const EVENT_LISTENER_TYPE = {
  CLICK: 'click',
  DOM_CONTENT_LOADED: 'DOMContentLoaded',
}

export const COIN_LIST = {
  FIVE_HUNDRED: 500,
  ONE_HUNDRED: 100,
  FIFTY: 50,
  TEN: 10,
};

export const INITIAL_COIN_LIST = {
  500: 0,
  100: 0,
  50: 0,
  10: 0,
};

export const LOCAL_STORAGE_KEY = {
  PRODUCT_LIST: 'productList',
  CHANGE_LIST: 'changeList',
  PUTTED_MONEY: 'puttedMoney',
};

export const CUSTOM_EVENT_NAME = {
  CHARGE_CHANGES: '@chargeChanges',
  ADD_PRODUCT: '@addProduct',
  RETURN_EXCHANGES: '@returnExchanges',
  ADD_PUTTED_MONEY: '@addPuttedMoney',
  PURCHASE_PRODUCT: '@purchaseProduct',
  SHOW_PRODUCT_PURCHASE_MENU: '@showProductPurchaseMenu',
  SHOW_VENDING_MACHINE_MANAGE_MENU: '@showVendingMachineManageMenu',
  SHOW_PRODUCT_ADD_MENU: '@showProductAddMenu',
};

export const SELECTOR = {
  APP: 'app',

  TAB_BUTTONS: 'tab-buttons',
  PRODUCT_MENU: 'product-add-menu',
  COIN_MENU: 'vending-machine-manage-menu',
  PURCHASE_MENU: 'product-purchase-menu',

  PRODUCT_PURCHASE_VIEW: 'product-purchase-view',
  VENDING_MACHINE_MANAGE_VIEW: 'vending-machine-manage-view',
  PRODUCT_ADD_VIEW: 'product-add-view',

  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE_NAME: 'product-manage-name',
  PRODUCT_MANAGE_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',

  COIN_CHARGE_INPUT: 'vending-machine-charge-input',
  COIN_CHARGE_BUTTON: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  COIN_500: 'vending-machine-coin-500-quantity',
  COIN_100: 'vending-machine-coin-100-quantity',
  COIN_50: 'vending-machine-coin-50-quantity',
  COIN_10: 'vending-machine-coin-10-quantity',

  PURCHASE_CHARGE_INPUT: 'charge-input',
  PURCHASE_CHARGE_BUTTON: 'charge-button',
  PURCHASE_CHARGE_AMOUNT: 'charge-amount',
  COIN_RETURN_BUTTON: 'coin-return-button',
  COIN_500_QUANTITY: 'coin-500-quantity',
  COIN_100_QUANTITY: 'coin-100-quantity',
  COIN_50_QUANTITY: 'coin-50-quantity',
  COIN_10_QUANTITY: 'coin-10-quantity',
  PRODUCT_PURCHASE_ITEM: 'product-purchase-item',
  PURCHASE_ITEM_BUTTON: 'purchase-button',
  PRODUCT_PURCHASE_NAME: 'product-purchase-name',
  PRODUCT_PURCHASE_PRICE: 'product-purchase-price',
  PURCHASE_ITEM_QUANTITY: 'product-purchase-quantity',
};

export const TAB_TYPE = {
  PRODUCT_MANAGEMENT: SELECTOR.PRODUCT_MENU,
  CHARGING_CHANGE: SELECTOR.COIN_MENU,
  PURCHASING_PRODUCT: SELECTOR.PURCHASE_MENU,
};

export const TAB_LABEL = {
  [TAB_TYPE.PRODUCT_MANAGEMENT]: '상품 관리',
  [TAB_TYPE.CHARGING_CHANGE]: '잔돈 충전',
  [TAB_TYPE.PURCHASING_PRODUCT]: '상품 구매',
};
