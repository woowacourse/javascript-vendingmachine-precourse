export const TITLE_TEXT = "🥤자판기🥤";
export const INPUT_WITDH = "150px";
export const MARGIN_SIZE = "1px";

export const PRODUCT_TABLE = {
  collapse: "collapse",
  border: "1px solid black",
  padding: "10px",
  paddingWidth: "40px",
  textAlign: "center",
};

export const COIN_TABLE = {
  collapse: "collapse",
  border: "1px solid black",
  padding: "10px",
  paddingWidth: "20px",
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

export const COINS = [500, 100, 50, 10];

export const ERROR_MESSAGE = {
  emptyInput: "빈칸 없이 입력해 주세요.",
  lessThanStandard: "금액을 100원 이상으로 입력해 주세요.",
  notDivideByTen: "금액을 10원으로 나누어 떨어지는 값으로 입력해 주세요.",
  negativeInput: "음수가 아닌 숫자로 입력해 주세요.",
};

export const MANAGE_PRODUCT_TAP = {
  addProductTitle: "상품 추가하기",
  addProductInputs: [
    ["상품명", "product-name-input", "text"],
    ["가격", "product-price-input", "number"],
    ["수량", "product-quantity-input", "number"],
  ],
  addButtonInformation: ["submit", "추가하기", "product-add-button"],

  productStateTitle: "상품 현황",
  productStateTableHeader: ["상품명", "가격", "수량"],
  productTableRawClass: "product-manage-item",
  productNameClass: "product-manage-name",
  productPriceClass: "product-manage-price",
  productQuantityClass: "product-manage-quantity",
};

export const CHARGE_CHANGE_TAP = {
  chargeChangeTitle: "자판기 동전 충전하기",
  chargeInputInformation: [
    "자판기가 보유할 금액",
    "vending-machine-charge-input",
    "number",
  ],
  chargeButtonInformation: [
    "submit",
    "충전하기",
    "vending-machine-charge-button",
  ],
  changeAmountHeader: "보유 금액: ",
  changeAmountId: "vending-machine-charge-amount",

  changeStateTitle: "자판기가 보유한 동전",
  changeStateTableHeader: ["동전", "개수"],
  changeStateTableRaws: [
    ["500원", "vending-machine-coin-500-quantity"],
    ["100원", "vending-machine-coin-100-quantity"],
    ["50원", "vending-machine-coin-50-quantity"],
    ["10원", "vending-machine-coin-10-quantity"],
  ],
};
