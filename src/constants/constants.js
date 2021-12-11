export const MINIMUM_COIN_TYPE = 10; // 최소 동전 단위
export const MINIMUM_PRODUCT_AMOUNT = 100; // 상품 최소 금액

export const DONE = Object.freeze({
  PRODUCT_VAILD: Symbol(''),
  CHARGE_VAILD: Symbol(''),
});

export const ERROR = Object.freeze({
  PRODUCT_INPUT: Symbol('상품의 입력란 중 빈 입력란이 있습니다.'),
  PRODUCT_PRICE: Symbol(
    `상품의 가격을 정확히 입력해주세요.\n최소 ${MINIMUM_PRODUCT_AMOUNT}원 이상, ${MINIMUM_COIN_TYPE}원 단위로 숫자만 입력하여야 합니다.`
  ),
  PRODUCT_ONLY_NUMBER: Symbol('상품 가격 및 수량은 숫자만 입력할 수 있습니다.'),

  CHARGE_POSITIVE_NUMBER: Symbol(
    `충전할 금액은 숫자만 입력 가능하며, ${MINIMUM_COIN_TYPE}원 단위로 입력하여야 합니다.`
  ),

  CHARGE_MINIMUM_NUMBER: Symbol(
    `충전할 금액을 ${MINIMUM_COIN_TYPE}원 단위로 입력해주세요.`
  ),

  PURCHASE_NEED_BALANCE: Symbol('잔액이 부족합니다.\n금액을 투입하여주세요.'),

  RETURN_AMOUNT_NO_BALANCE: Symbol('충전 금액이 0원입니다.'),
});

export const CONSTANTS = Object.freeze({
  // 반환 코인 기본 데이터 템플릿
  COIN_LIST: [
    { coin: 500, quantity: 0 },
    { coin: 100, quantity: 0 },
    { coin: 50, quantity: 0 },
    { coin: 10, quantity: 0 },
  ],

  COIN_TYPE: [10, 50, 100, 500], // 동전 종류 설정
});
