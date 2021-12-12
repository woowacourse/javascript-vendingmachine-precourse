export const TITLE_TEXT = "🥤자판기🥤";
export const NAME = 0;
export const ID = 1;
export const QUANTITY = 2;
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
