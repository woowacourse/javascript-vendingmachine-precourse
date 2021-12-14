export const ELEMENT_SHOW = ("display: block");
export const ELEMENT_HIDE = ("display: none");
export const NOTHING = "";

export const ERROR_MESSAGE = {
  PRODUCT_NOEMPTY_INPUT: "상품 정보를 모두 기입해주세요",
  PRODUCT_PRICE_OVER100: "상품 가격을 100원 이상으로 기입해주세요",
  PRODUCT_PRICE_10UNIT: "상품 가격을 10원 단위 이상으로 기입해주세요",
  PRODUCT_COUNT_DECIMAL: "상품 수량에 소수점을 기입하지 말아주세요",
  PRODUCT_COUNT_NATURALNUM: "상품 수량을 자연수로 기입해주세요",
  CHARGE_NOEMPTY_INPUT: "추가할 금액을 기입해주세요",
  CHARGE_NATURALNUM: "자연수를 기입해주세요",
  MONEY_NOEMPTY_INPUT: "추가할 금액을 기입해주세요",
  MONEY_NATURALNUM: "자연수를 기입해주세요",
  NOCOIN_IN_MACHINE: "자판기에 동전이 없습니다",
  SHORT_MONEY: "투입 금액보다 바싼 상품은 구매할 수 없습니다",
}

export const NUMBER = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  TEN: 10,
  FIFTY: 50,
  ONEHUN: 100,
  FIVEHUN: 500,
}

export const PRODUCT = {
  NAME: 0,
  PRICE: 1,
  COUNT: 2,
}

export const COIN_TYPE = {
  FIVEHUN: 0,
  ONEHUN: 1,
  FIFTY: 2,
  TEN: 3,
}

export const ELEMENT_ID = {
  PRODUCT_MENU: "#product-menu",
  PRODUCT_ADD_MENU: "product-add-menu",
  MACHINE_MAMAGE_MENU: "vending-machine-manage-menu",
  PRODUCT_PURCHASE_MENU: "product-purchase-menu",
  MACHINE_500_QUANTITY: "#vending-machine-coin-500-quantity",
  MACHINE_100_QUANTITY: "#vending-machine-coin-100-quantity",
  MACHINE_50_QUANTITY: "#vending-machine-coin-50-quantity",
  MACHINE_10_QUANTITY: "#vending-machine-coin-10-quantity",
  CHARGE_500_QUANTITY: "#coin-500-quantity",
  CHARGE_100_QUANTITY: "#coin-100-quantity",
  CHARGE_50_QUANTITY: "#coin-50-quantity",
  CHARGE_10_QUANTITY: "#coin-10-quantity",
}