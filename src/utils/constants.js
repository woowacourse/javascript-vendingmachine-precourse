const COIN = [500, 100, 50, 10];

const EMPTY = "";

const ERROR = {
  PRODUCT_NAME: "이름이 형식에 맞지 않습니다. 다시 입력해주세요.",
  PRODUCT_PRICE:
    "가격이 형식에 맞지 않습니다. 100원 이상의 가격을 10원 단위로 입력해주세요.",
  PRODUCT_QUANTITY: "수량이 형식에 맞지 않습니다. 다시 입력해주세요.",
  CHARGE: "10원 단위의 충전금액을 다시 입력해주세요.",
  PAY: "100원 이상의 금액을 10원 단위로 투입해주세요.",
  BUY: "상품을 살 수 없습니다. 금액이 부족하지 않은지 확인해주세요.",
};

export { COIN, EMPTY, ERROR };
