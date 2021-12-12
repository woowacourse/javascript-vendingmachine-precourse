export const TITLE_TEXT = "🥤자판기🥤";
export const INPUT_WITDH = "150px";
export const MARGIN_SIZE = "1px";
export const IS_RENDERED_INSERTED_MONEY = "isRenderInsertedMoney";
export const IS_RENDERED_RETURN_CHANGES = "returnChanges";
export const IS_RENDERED_CHARGE_TAP = "isRenderChargeTap";
export const VIEW_CONTAINER = "view-container";

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

export const MENU_TAP = [
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
  soldOut: "제품이 모두 판매되었습니다.",
  lackMoney: "투입한 금액이 부족합니다.",
  duplicateName: "이미 동일한 이름의 제품이 있습니다.",
};

export const MANAGE_TAP = {
  addProductTitle: "상품 추가하기",
  addProductInputs: [
    ["상품명", "product-name-input", "text"],
    ["가격", "product-price-input", "number"],
    ["수량", "product-quantity-input", "number"],
  ],
  addButton: ["submit", "추가하기", "product-add-button"],

  productStateTitle: "상품 현황",
  productStateTableHeaders: ["상품명", "가격", "수량"],
  productTableRawClass: "product-manage-item",
  productTableClasses: [
    "product-manage-name",
    "product-manage-price",
    "product-manage-quantity",
  ],
};

export const CHARGE_TAP = {
  chargeChangeTitle: "자판기 동전 충전하기",
  chargeInput: [
    "자판기가 보유할 금액",
    "vending-machine-charge-input",
    "number",
  ],
  chargeButton: ["submit", "충전하기", "vending-machine-charge-button"],
  changeAmountHeader: "보유 금액: ",
  changeAmountId: "vending-machine-charge-amount",

  changeStateTitle: "자판기가 보유한 동전",
  changeStateTableHeaders: ["동전", "개수"],
  changeStateTableRaws: [
    ["500원", "vending-machine-coin-500-quantity"],
    ["100원", "vending-machine-coin-100-quantity"],
    ["50원", "vending-machine-coin-50-quantity"],
    ["10원", "vending-machine-coin-10-quantity"],
  ],
};

export const PURCHASE_TAP = {
  insertMoneyTitle: "금액 투입",
  insertMoneyInput: ["투입할 금액", "charge-input", "number"],
  insertMoneyButton: ["submit", "투입하기", "charge-button"],
  insertMoneyAmountTitle: "투입한 금액: ",
  insertMoneyAmountId: "charge-amount",

  productStateTitle: "구매할 수 있는 상품 현황",
  productStateTableHeaders: ["상품명", "가격", "수량", "구매"],
  productStateIds: [
    "product-purchase-name",
    "product-purchase-price",
    "product-purchase-quantity",
  ],
  productStateButton: ["button", "구매하기", "purchase-button"],

  changeStateTitle: "잔돈",
  changeStateButton: ["button", "반환하기", "coin-return-button"],
  changeStateTableHeaders: ["동전", "개수"],
  changeStateTableRaws: [
    ["500원", "coin-500-quantity"],
    ["100원", "coin-100-quantity"],
    ["50원", "coin-50-quantity"],
    ["10원", "coin-10-quantity"],
  ],
};
