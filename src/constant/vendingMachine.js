export const TITLE = "🥤자판기🥤";
export const PRODUCT = "Product";

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
  NEW_PRODUCT_NAME_ID: "product-manage-name",
  NEW_PRODUCT_PRICE_ID: "product-manage-price",
  NEW_PRODUCT_QUANTITY_ID: "product-manage-quantity",
};

export const COIN_MANAGE = {
  BUTTON: "잔돈 충전",
  COIN_CHARGE_TEXT: "자판기 동전 충전하기",
  INPUT: { PLACE_HOLDER: "자판기가 보유할 금액", ID: "vending-machine-charge-input" },
  CHARGE_BUTTON: { TEXT: "충전하기", ID: "vending-machine-charge-button" },
  HOLDING_AMOUNT: { TEXT: "보유 금액: ", ID: "vending-machine-charge-amount" },
  CURRENT_COIN_AMOUNT: "자판기가 보유한 동전",
  COLUMNS: ["동전", "개수"],
  COIN_500: { TEXT: "500원", QUANTITY_ID: "vending-machine-coin-500-quantity" },
  COIN_100: { TEXT: "100원", QUANTITY_ID: "vending-machine-coin-100-quantity" },
  COIN_50: { TEXT: "50원", QUANTITY_ID: "vending-machine-coin-50-quantity" },
  COIN_10: { TEXT: "10원", QUANTITY_ID: "vending-machine-coin-10-quantity" },
};

export const PRODUCT_PURCHASE_MANAGE = {
  BUTTON: "상품 구매",
  COIN_INSERT_TEXT: "금액 투입",
  INPUT: { PLACE_HOLDER: "투입할 금액", ID: "charge-input" },
  INSERT_BUTTON: { TEXT: "투입하기", ID: "charge-button" },
  INSERT_AMOUNT: { TEXT: "투입한 금액: ", ID: "charge-amount" },
  CURRENT_PRODUCT_TO_BUY: "구매할 수 있는 상품 현황",
  COLUMNS: ["제품명", "가격", "수량", "구매"],
  PURCHASE_BUTTON: { TEXT: "구매하기", ID: "purchase-button" },
  PRODUCT_NAME_ID: "product-purchase-name",
  PRODUCT_PRICE_ID: "product-purchase-price",
  PRODUCT_QUANTITY_ID: "product-purchase-quantity",
  CHARGE: "잔돈",
  CHARGE_BUTTON: { TEXT: "반환하기", ID: "coin-return-button" },
  COIN_500: { TEXT: "500원", QUANTITY_ID: "coin-500-quantity" },
  COIN_100: { TEXT: "100원", QUANTITY_ID: "coin-100-quantity" },
  COIN_50: { TEXT: "50원", QUANTITY_ID: "coin-50-quantity" },
  COIN_10: { TEXT: "10원", QUANTITY_ID: "coin-10-quantity" },
};
