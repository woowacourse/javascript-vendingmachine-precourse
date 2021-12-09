export const TITLE_TEXT = "🥤자판기🥤";
export const INPUT_WITDH = "125px";
export const MARGIN_SIZE = "1px";

export const PRODUCT_TABLE = {
  collapse: "collapse",
  border: "1px solid black",
  padding: "10px",
  paddingWidth: "40px",
  textAlign: "center",
};

export const MENU_TAP_INFORMATION = [
  ["상품 관리", "product-add-menu"],
  ["잔돈 충전", "vending-machine-manage-menu"],
  ["상품 구매", "product-purchase-menu"],
];

export const STANDARD_PRICE = {
  minimum: 100,
  divideNumber: 10,
};

export const ERROR_MESSAGE = {
  emptyInput: "빈칸 없이 입력해 주세요.",
  notInteger: "가격, 수량 칸을 숫자로 입력해 주세요",
  lessThanStandard: "상품의 가격을 100원 이상으로 입력해 주세요.",
  notDivideByTen: "상품의 가격을 10원으로 나누어 떨어진 값으로 입력해 주세요.",
  negativeInput: "상품의 수량을 음수가 아닌 숫자로 입력해 주세요.",
};

export const MANAGE_PRODUCT_TAP = {
  addProductTitle: "상품 추가하기",
  addProductInputs: [
    ["상품명", "product-name-input", "text"],
    ["가격", "product-price-input", "number"],
    ["수량", "product-quantity-input", "number"],
  ],
  addProductButton: ["추가하기", "product-add-button"],

  productStateTitle: "상품 현황",
  productStateTableHeader: ["상품명", "가격", "수량"],
  productTableRawClass: "product-manage-item",
  productNameClass: "product-manage-name",
  productPriceClass: "product-manage-price",
  productQuantityClass: "product-manage-quantity",
};
