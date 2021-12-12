export const ALERT_MESSAGE = Object.freeze({
  PRICE_NOT_UNDER_ZERO: "금액은 0이하이면 안됩니다",
  DIVIDED_BY_TEN: "10으로 나누어 떨어지는 금액을 입력해주세요",
  NO_EMPTY: "입력에 공백이 들어가서는 안됩니다",
  OVER_ZERO_QUANTITY: "수량은 1이상을 입력해주세요",
  OVER_MIN_PRICE: "100원 이상의 금액을 입력해주세요",
  LACK_CHARGED_MONEY: "충전금액이 모자릅니다",
  NO_PRODUCT_QUANTITY: "잔고가 없습니다",
  DUPLICATED_PRODUCT_NAME: "이미 동일한 상품명이 있습니다. 상품정보를 갱신하시겠습니까?",
});

export const STANDARD_NUMBER = Object.freeze({
  ZERO: 0,
  MIN_PRICE: 100,
  DIVIDE_NUMBER: 10,
});

export const ID = Object.freeze({
  PRODUCT_ADD_MENU: "product-add-menu",
  VENDING_MACHINE_MANAGE_MENU: "vending-machine-manage-menu",
  PRODUCT_PURCHASE_MENU: "product-purchase-menu",
  VENDING_MACHINE_CHARGE_INPUT: "vending-machine-charge-input",
  VENDING_MACHINE_CHARGE_BUTTON: "vending-machine-charge-button",
  VENDING_MACHINE_CHARGE_AMOUNT: "vending-machine-charge-amount",
  VENDIN_MACHINE_AMOUNT_CONTAINER: "vending-machine-amount-container",
  VENDING_MACHINE_COIN_500_QUANTITY: "vending-machine-coin-500-quantity",
  VENDING_MACHINE_COIN_100_QUANTITY: "vending-machine-coin-100-quantity",
  VENDING_MACHINE_COIN_50_QUANTITY: "vending-machine-coin-50-quantity",
  VENDING_MACHINE_COIN_10_QUANTITY: "vending-machine-coin-10-quantity",
  COIN_500_QUANTITY: "coin-500-quantity",
  COIN_100_QUANTITY: "coin-100-quantity",
  COIN_50_QUANTITY: "coin-50-quantity",
  COIN_10_QUANTITY: "coin-10-quantity",
  PRODUCT_NAME_INPUT: "product-name-input",
  PRODUCT_PRICE_INPUT: "product-price-input",
  PRODUCT_QUANTITY_INPUT: "product-quantity-input",
  PRODUCT_ADD_BUTTON: "product-add-button",
  PRODUCT_TABLE_BODY: "product-table-body",
  CHARGE_INPUT: "charge-input",
  CHARGE_BUTTON: "charge-button",
  CHARGE_AMOUNT_CONTAINER: "charge-amount-container",
  CHARGE_AMOUNT: "charge-amount",
  PURCHASE_TABLE_BODY: "purchase-table-body",
  COIN_RETURN_BUTTON: "coin-return-button",
  APP: "app",
});

export const CLASS = Object.freeze({
  PURCHASE_BUTTON: "purchase-button",
  PRODUCT_PURCHASE_ITEM: "product-purchase-item",
  PRODUCT_PURCHASE_NAME: "product-purchase-name",
  PRODUCT_PURCHASE_PRICE: "product-purchase-price",
  PRODUCT_PURCHASE_QUANTITY: "product-purchase-quantity",
  PRODUCT_MANAGE_ITEM: "product-manage-item",
  PRODUCT_MANAGE_NAME: "product-manage-name",
  PRODUCT_MANAGE_PRICE: "product-manage-price",
  PRODUCT_MANAGE_QUANTITY: "product-manage-quantity",
});

export const COIN_LIST = Object.freeze([500, 100, 50, 10]);

export const LOCAL_STORAGE_KEY = Object.freeze({
  COIN: "coin",
  CHARGE_MONEY: "charge-money",
  PRODUCT: "prodcut",
});
