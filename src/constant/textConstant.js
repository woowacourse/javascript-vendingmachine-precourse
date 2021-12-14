const TITLE = {
  VENDING_MACHINE: "🥤자판기🥤",
  ADD_PRODCUT: "상품 추가하기",
  NOW_PRODUCT: "상품 현황",
  CHARGE_COIN: "자판기 동전 충전하기",
  NOW_COIN: "자판기가 보유한 동전",
  ADD_MONEY: "금액 투입",
  AVAILABLE_PRODUCT: "구매할 수 있는 상품 현황",
  LEFTOVER: "잔돈",
};

const TEXT = {
  NAME: "상품명",
  PRICE: "가격",
  QUANTITIY: "수량",
  PRODUCT: ["상품명", "가격", "수량"],
  COIN: "동전",
  COUNT: "개수",
  BUY: "구매",
  COIN_WILL: "자판기가 보유할 금액",
  COIN_DONE: "보유 금액: ",
  PURCHASE_WILL: "투입할 금액",
  PURCHASE_DONE: "투입한 금액: ",
  COIN_TYPE: [500, 100, 50, 10],
};

const BUTTON = {
  MANAGE: "상품 관리",
  CHARGE_COIN: "잔돈 충전",
  BUY: "상품 구매",
  ADD: "추가하기",
  CHARGE: "충전하기",
  BILL: "투입하기",
  RETURN: "반환하기",
  PURCHASE: "구매하기",
};

const ERROR = {
  LENGTH_OVER_ONE: "🚨 1자 이상의 상품명을 입력해주세요",
  OVER100_DIV10: "🚨 10으로 나누어 떨어지는 100이상의 정수를 입력해 주세요",
  OVER10_DIV10: "🚨 10으로 나누어 떨어지는 10이상의 정수를 입력해 주세요",
  OVER_ONE: "🚨 1이상의 정수값을 입력해주세요",
  NOT_ENOUGH_MONEY: "🚨 상품을 구매하기에 돈이 부족합니다",
  NOT_SAME_PRICE: "🚨 기존의 상품과 동일한 가격을 입력해 주세요",
};

export { TITLE, TEXT, BUTTON, ERROR };
