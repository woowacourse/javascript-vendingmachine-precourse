export const PURCHASE_TAP = {
  FORM: {
    TITLE: "금액 투입",
    INPUT: ["투입할 금액", "charge-input", "number"],
    BUTTON: ["submit", "투입하기", "charge-button"],
    AMOUNT_HEADER: "투입한 금액: ",
    AMOUNT_ID: "charge-amount",
  },
  PRODUCT_STATE_TITLE: "구매할 수 있는 상품 현황",
  PRODUCT_STATE_TABLE_HEADERS: ["상품명", "가격", "수량", "구매"],
  PRODUCT_STATE_CLASSES: [
    "product-purchase-name",
    "product-purchase-price",
    "product-purchase-quantity",
  ],
  PRODUCT_STATE_DATASET: [
    "data-product-name",
    "data-product-price",
    "data-product-quantity",
  ],
  PRODUCT_STATE_BUTTON: ["button", "구매하기", "purchase-button"],
  CHANGE_STATE_TITLE: "잔돈",
  CHANGE_STATE_BUTTON: ["button", "반환하기", "coin-return-button"],
  CHANGE_STATE_TABLE_HEADERS: ["동전", "개수"],
  CHANGE_STATE_TABLE_RAWS: [
    ["500원", "coin-500-quantity"],
    ["100원", "coin-100-quantity"],
    ["50원", "coin-50-quantity"],
    ["10원", "coin-10-quantity"],
  ],
};
