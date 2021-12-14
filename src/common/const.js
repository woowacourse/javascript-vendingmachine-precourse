export const APP = "app";

export const PRDUCT_PURCHASE_MEMU = "product-purchase-menu";
export const VENDING_MACHINE_MANAGE_MEMU = "vending-machine-manage-menu";
export const PRODUCT_ADD_MEMU = "product-add-menu";

export const PRDUCT_NAME_INPUT = "product-name-input";
export const PRDUCT_PRICE_INPUT = "product-price-input";
export const PRDUCT_QUANTITY_INPUT = "product-quantity-input";

export const PRDUCT_ADD_BUTTON = " product-add-button";
export const PRDUCT_MANAGE_ITEM = "product-manage-item";
export const PRDUCT_MANAGE_NAME = "product-manage-name";
export const PRDUCT_MANAGE_PRICE = "product-manage-price";
export const PRDUCT_MANAGE_QUANTITY = "product-manage-quantity";

export const VENDING_MACHINE_CHARGE_INPUT = "vending-machine-charge-input";
export const VENDING_MACHINE_CHARGE_BUTTON = "vending-machine-charge-button";
export const VENDING_MACHINE_CHARGE_AMOUNT = "vending-machine-charge-amount ";

export const VENDING_MACHINE_COIN_500_QUANTITY =
  "vending-machine-coin-500-quantity";
export const VENDING_MACHINE_COIN_100_QUANTITY =
  "vending-machine-coin-100-quantity";
export const VENDING_MACHINE_COIN_50_QUANTITY =
  "vending-machine-coin-50-quantity";
export const VENDING_MACHINE_COIN_10_QUANTITY =
  "vending-machine-coin-10-quantity";

export const COIN_500_QUANTITY = "coin-500-quantity";
export const COIN_100_QUANTITY = "coin-100-quantity";
export const COIN_50_QUANTITY = "coin-50-quantity";
export const COIN_10_QUANTITY = "coin-10-quantity";

export const CHARGE_INPUT = "charge-input";
export const CHARGE_BUTTON = "charge-button";
export const CHARGE_AMOUNT = "charge-amount";
export const COIN_RETURN_BUTTON = "coin-return-button";

export const PRDUCT_PURCHASE_ITEM = "product-purchase-item";
export const PURCHASE_BUTTON = "purchase-button";
export const PRDUCT_PURCHASE_NAME = "product-purchase-name";
export const PRDUCT_PURCHASE_PRICE = "product-purchase-price";
export const PRDUCT_PURCHASE_QUANTITY = "product-purchase-quantity";
export const DATA_PRODUCT_NAME = "data-product-name ";
export const DATA_PRODUCT_PRICE = "data-product-price ";
export const DATA_PRODUCT_QUANTITY = "data-product-quantity";

export const ALERT_MESSAGE = Object.freeze({
  PRODUCT_NAME_DUPLICATED: "중복된 상품은 추가할 수 없습니다.",
  PRODUCT_NAME_BLANK: "상품명을 입력해주세요.",
  PRODUCT_PRICE_LESS_THAN_100: "상품 가격은 100원 이상으로 입력해주세요.",
  PRODUCT_PRICE_DOES_NOT_DIVIDED_BY_10:
    "상품 가격은 10원으로 나누어 떨어지는 수로 입력해주세요.",
  PRODUCT_QUANTITY_LESS_THAN_1: "상품 수량은 최소 1개 입력해주세요.",
  PRODUCT_QUANTITY_IS_FLOAT: "상품 수량은 1 이상의 정수만 입력 가능합니다.",
  CHANGE_INPUT_LESS_THAN_10: "10원 이상의 금액만 충전 가능합니다.",
  CHANGE_INPUT_DOES_NOT_DIVIDED_BY_10:
    "10원으로 나누어 떨어지는 금액만 충전 가능합니다.",
  PURCHASE_INPUT_DOES_NOT_DIVIDED_BY_10:
    "10원으로 나누어 떨어지는 금액만 투입 가능합니다.",
  PURCHASE_MONEY_INPUT_LESS_THAN_0: "마이너스 금액은 투입할 수 없습니다.",
  PURCHASE_MONEY_INPUT_BLANK: "투입할 금액을 입력해주세요.",
  PURCHASE_LACK_OF_MONEY: "잔액이 부족합니다.",
  PURCHASE_IS_SOLD_OUT: "해당 상품은 품절입니다.",
});

export const PRODUCT = Object.freeze({
  MINIMUM_PRICE: 100,
  MINIMUM_QUANTITY: 1,
  DIVISIBLE_NUMBER: 10,
  REMAINDER_IS_0: 0,
});

export const CHANGE = Object.freeze({
  MINIMUM_INPUT: 10,
  DIVISIBLE_NUMBER: 10,
  REMAINDER_IS_0: 0,
});

export const PURCHASE = Object.freeze({
  DIVISIBLE_NUMBER: 10,
  INPUT_IS_0: 0,
  QUANTITY_IS_0: 0,
  REMAINDER_IS_0: 0,
  ONE_OF_ITEM: 1,
});

export const COIN = Object.freeze({
  MIN_VALUE: 10,
  ADD_1: 1,
  VALUE_500: 500,
  VALUE_100: 100,
  VALUE_50: 50,
  VALUE_10: 10,
});
