export const MENU_BUTTON = {
  ALL: "menu-button-area",
  BUY_PRODUCT: "product-purchase-menu",
  CHANGE_MANAGE:"vending-machine-manage-menu",
  PRODUCT_MANAGE: "product-add-menu",
};

export const PRODUCT_MANAGE = {
  //input & Button ID명
  NAME_ID: "product-name-input",
  PRICE_ID: "product-price-input",
  QUANTITY_ID: "product-quantity-input",
  ADD_BUTTON_ID: "product-add-button",
};

export const CHARGE_MANAGE = {
  INPUT_ID: "vending-machine-charge-input",
  BUTTON_ID: "vending-machine-charge-button",
  AMOUNT_ID: "vending-machine-charge-amount",
  //보유 동전 개수 해당 ID
  COIN500: "vending-machine-coin-500-quantity",
  COIN100: "vending-machine-coin-100-quantity",
  COIN50: "vending-machine-coin-50-quantity",
  COIN10: "vending-machine-coin-10-quantity",
};

export const BUY_PRODUCT = {
  CHARGE_INPUT: "charge-input",
  CHARGE_BUTTON: "charge-button",
  CHARGE_AMOUNT: "charge-amount",
  COIN_RETURN_BUTTON: "coin-return-button",
  //반환 동전 개수 해당 ID
  COIN500: "coin-500-quantity",
  COIN100: "coin-100-quantity",
  COIN50: "coin-50-quantity",
  COIN10: "coin-10-quantity",
};

export const PRODUCT_PURCHASE_TABLE = {
  CLASS: "product-purchase-item",
  BUY_BUTTON: "purchase-button",
  NAME: "product-purchase-name",
  PRICE: "product-purchase-price",
  QUANTITY: "product-purchase-quantity",
};

export const PRODUCT_MANAGE_TABLE = {
  CLASS: "product-manage-item",
  NAME: "product-manage-name",
  PRICE: "product-manage-price",
  QUANTITY: "product-manage-quantity",
};

export const ERROR_MASSAGE = {
  ONLY_NUMBER: "숫자만 입력이 가능합니다.",
  IS_EMPTY: "공백은 입력할 수 없습니다. 값을 입력해주세요.",
  OVER_ZERO: "음수는 입력할 수 없습니다. 올바른 값을 입력해주세요.",
  OVER_HUNDRED: "값을 100이상 입력해주세요.",
  DEVIDE_TEN: "값은 10원 단위로 입력할 수 있습니다.",
};

export const TITLE = {
  TITLE: "🥤 자판기 🥤", 
  MANAGE_PRODUCT: "상품 관리",
  MANAGE_CHARGE: "잔돈 충전",
  BUY_PRODUCT: "상품 구매",
  ADD_PRODUCT: "상품 추가하기",
  PRODUCT_LIST: "상품 현황",
  ADD_CHARGE: "자판기 동전 충전하기",
  STORE_CHARGE: "자판기가 보유한 동전",
  SET_MONEY: "금액 투입",
  SET_MONEY_TEXT: "투입할 금액",
  CAN_BUY_LIST: "구매할 수 있는 상품 현황",
  CHARGE: "잔돈",
};

export const UNIT = {
  PRODUCT: "상품명",
  PRICE: "가격",
  COUNT: "수량",
  BUY: "구매",
  COIN: "동전",
  QUANTITY: "개수",
  COIN_500: 500,
  COIN_100: 100,
  COIN_50: 50,
  COIN_10: 10,
  HAVE: "보유 금액:",
};

export const COINS = [
  ["500원", " "],
  ["100원", " "],
  ["50원", " "],
  ["10원", " "],
]

export const COIN_TABLES = {
  HAVE: "coin-table-have",
  RETURN: "coin-table-return"
}