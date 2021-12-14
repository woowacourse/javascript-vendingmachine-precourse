export const TITLE = "🥤자판기🥤";
export const PRODUCT = "Product";
export const VENDING_MACHINE_COIN = "VendingMachineCoin";
export const USER_COIN = "UserCoin";

export const PRODUCT_MANAGE = {
  BUTTON: "상품 관리",
  ADD_PRODUCT_TEXT: "상품 추가하기",
  PRODUCT_NAME: { TEXT: "상품명", ID: "product-name-input" },
  PRICE: { TEXT: "가격", ID: "product-price-input" },
  QUANTITY: { TEXT: "수량", ID: "product-quantity-input" },
  ADD_BUTTON: { TEXT: "추가하기", ID: "product-add-button" },
  TABLE_TEXT: "상품 현황",
  COLUMNS: ["제품명", "가격", "수량"],
  NEW_PRODUCT_ID: "product-manage-item",
  NEW_PRODUCT_COLUMNS_ID: [
    "product-manage-name",
    "product-manage-price",
    "product-manage-quantity",
  ],
};

export const COIN_MANAGE = {
  BUTTON: "잔돈 충전",
  CURRENT_COIN_AMOUNT: "자판기가 보유한 동전",
  COLUMNS: ["동전", "개수"],
  COIN_TO_USE: [
    { TEXT: "500원", QUANTITY_ID: "vending-machine-coin-500-quantity" },
    { TEXT: "100원", QUANTITY_ID: "vending-machine-coin-100-quantity" },
    { TEXT: "50원", QUANTITY_ID: "vending-machine-coin-50-quantity" },
    { TEXT: "10원", QUANTITY_ID: "vending-machine-coin-10-quantity" },
  ],
  TEXT: {
    INPUT_FORM_TITLE: "자판기 동전 충전하기",
    PRINT_LABEL: "보유 금액: ",
    PRINT_AMOUNT_ID: "vending-machine-charge-amount",
  },
  INPUT: {
    PLACE_HOLDER: "자판기가 보유할 금액",
    ID: "vending-machine-charge-input",
  },
  CHARGE_BUTTON: {
    INNER_TEXT: "충전하기",
    ID: "vending-machine-charge-button",
  },
};

export const PURCHASE_MANAGE = {
  BUTTON: "상품 구매",
  CURRENT_PRODUCT_TO_BUY: "구매할 수 있는 상품 현황",
  COLUMNS: ["제품명", "가격", "수량", "구매"],
  PURCHASE_BUTTON: { TEXT: "구매하기", CLASS: "purchase-button" },
  MENU_TBODY_ID: "product-menu-table-body",
  PRODUCT_ITEM_CLASS: "product-purchase-item",
  PRODUCT_COLUMNS_CLASS: [
    "product-purchase-name",
    "product-purchase-price",
    "product-purchase-quantity",
  ],
  DATA_SET: ["data-product-name", "data-product-price", "data-product-quantity"],
  CHARGE: "잔돈",
  RETURN_BUTTON: { TEXT: "반환하기", ID: "coin-return-button" },
  COIN_TO_USE: [
    { TEXT: "500원", QUANTITY_ID: "coin-500-quantity" },
    { TEXT: "100원", QUANTITY_ID: "coin-100-quantity" },
    { TEXT: "50원", QUANTITY_ID: "coin-50-quantity" },
    { TEXT: "10원", QUANTITY_ID: "coin-10-quantity" },
  ],
  TEXT: {
    INPUT_FORM_TITLE: "금액 투입",
    PRINT_LABEL: "투입한 금액: ",
    PRINT_AMOUNT_ID: "charge-amount",
  },
  INPUT: {
    PLACE_HOLDER: "투입할 금액",
    ID: "charge-input",
  },
  INSERT_BUTTON: {
    INNER_TEXT: "투입하기",
    ID: "charge-button",
  },
};
