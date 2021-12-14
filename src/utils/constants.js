export const PRODUCT_NAME = Object.freeze({
  EMPTY_ERROR_MESSAGE: '상품명을 입력해주세요.  올바른 예) 사이다',
  BLANK_ERROR_MESSAGE: '공백이 아닌 상품명을 입력해주세요.  올바른 예) 사이다',
  TYPE_ERROR_MESSAGE: '숫자 타입이 아닌 상품명을 입력해주세요.  올바른 예) 사이다',
});

export const PRODUCT_PRICE = Object.freeze({
  EMPTY_ERROR_MESSAGE: '상품의 가격을 입력해주세요.  올바른 예) 1500',
  TYPE_ERROR_MESSAGE:
    '상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  올바른 예) 1500',
  RANGE_ERROR_MESSAGE:
    '상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  올바른 예) 1500',
  DIVIDED_ERROR_MESSAGE:
    '상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  올바른 예) 1500',
});

export const PRODUCT_QUANTITY = Object.freeze({
  EMPTY_ERROR_MESSAGE: '상품의 수량을 입력해주세요.  올바른 예) 20',
  TYPE_ERROR_MESSAGE: '소수 값이 아닌 상품의 수량을 입력해주세요.  올바른 예) 20',
  RANGE_ERROR_MESSAGE: '0보다 큰 상품의 수량을 입력해주세요.  올바른 예) 20',
});

export const CHARGE_DATA = Object.freeze({
  EMPTY_ERROR_MESSAGE: '투입할 금액을 입력해주세요.  올바른 예) 3000',
  TYPE_ERROR_MESSAGE: '투입할 금액은 소수 값을 가지고 있어서는 안됩니다.  올바른 예) 3000',
  RANGE_ERROR_MESSAGE: '투입할 금액은 0보다 큰 값이어야 합니다.  올바른 예) 3000',
  DIVIDED_ERROR_MESSAGE: '투입할 금액은 10으로 나누어 떨어져야 합니다.  올바른 예) 3000',
});

export const VENDING_MACHINE_CHARGE_DATA = Object.freeze({
  EMPTY_ERROR_MESSAGE: '충전할 금액을 입력해주세요.  ex) 450',
  TYPE_ERROR_MESSAGE: '충전할 금액은 소수 값을 가지고 있어서는 안됩니다.  올바른 예) 450',
  RANGE_ERROR_MESSAGE: '충전할 금액은 0보다 큰 값이어야 합니다.  올바른 예) 450',
  DIVIDED_ERROR_MESSAGE: '충전할 금액은 10으로 나누어 떨어져야 합니다.  올바른 예) 450',
});

export const PRODUCT_PURCHASE = Object.freeze({
  QUANTITY_LIMIT_ERROR_MESSAGE: '해당 물품이 품절이 되어, 구매할 수 없습니다',
  NOT_ENOUGH_MONEY_ERROR_MESSAGE: '투입한 금액이 부족하여, 해당 물품을 구매할 수 없습니다',
});

export const COIN_LIST = Object.freeze([500, 100, 50, 10]);

export const STANDARD_NUMBER = Object.freeze({
  ZERO: 0,
  MIN_PRICE: 100,
  DIVISOR: 10,
});

export const ID = Object.freeze({
  APP: 'app',
  CONTENT: 'content',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_ADD_MENU: 'product-add-menu',
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',
  PRODUCT_STATUS_TABLE: 'product-status-table',
  PRODUCT_ADD_FORM: 'product-add-form',
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-input',
  VENDING_MACHINE_CHARGE_BUTTON: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  VENDING_MACHINE_CHARGE_FORM: 'vending-machine-charge-form',
  VENDING_MACHINE_COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
  VENDING_MACHINE_COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
  VENDING_MACHINE_COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
  VENDING_MACHINE_COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',
  VENDING_MACHINE_COIN_LIST: 'vending-machine-coin-list',
  CHARGE_INPUT: 'charge-input',
  CHARGE_BUTTON: 'charge-button',
  CHARGE_AMOUNT: 'charge-amount',
  CHARGE_FORM: 'charge-form',
  COIN_RETURN_TABLE: 'coin-return-table',
  COIN_RETURN_BUTTON: 'coin-return-button',
  COIN_500_QUANTITY: 'coin-500-quantity',
  COIN_100_QUANTITY: 'coin-100-quantity',
  COIN_50_QUANTITY: 'coin-50-quantity',
  COIN_10_QUANTITY: 'coin-10-quantity',
});

export const CLASS = Object.freeze({
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE_NAME: 'product-manage-name',
  PRODUCT_MANAGE_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',
  PRODUCT_PURCHASE_ITEM: 'product-purchase-item',
  PURCHASE_BUTTON: 'purchase-button',
  PRODUCT_PURCHASE_NAME: 'product-purchase-name',
  PRODUCT_PURCHASE_PRICE: 'product-purchase-price',
  PRODUCT_PURCHASE_QUANTITY: 'product-purchase-quantity',
});

export const TAB_MENU = Object.freeze({
  PRODUCT_ADD_MENU: 'product_add_menu',
  PRODUCT_PURCHASE_MENU: 'product_purchase_menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending_machine_manage_menu',
});
