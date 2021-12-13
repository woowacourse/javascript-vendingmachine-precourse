export const RULE = Object.freeze({
  MIN_LENGTH: 0,
  MIN_PRICE: 100,
  MIN_QUANTITY: 1,
  MIN_DIVISOR: 10,
  MIN_MONEY: 0,
  MIN_COIN_AMOUNT: 0,
});

export const ERROR = Object.freeze({
  MIN_LENGTH: '공백은 입력할 수 없습니다.',
  PRICE: '금액은 최소 100원 이상의 10원으로 나누어 떨어지는 수로 입력해주세요.',
  QUANTITY: '수량은 1개 이상의 자연수로 입력해주세요.',
  MONEY: '금액은 최소 0 이상의 10으로 나누어떨어지는 수로 입력해 주세요.',
  PURCHASE: '보유한 금액보다 비싼 상품은 구매할 수 없습니다.',
  RETURN: '충전된 동전이 없습니다.',
});