export const RULE = Object.freeze({
  MIN_LENGTH: 0,
  MIN_PRICE: 100,
  MIN_QUANTITY: 1,
  MIN_DIVISOR: 10,
});

export const ERROR = Object.freeze({
  MIN_LENGTH: '공백은 입력할 수 없습니다.',
  MONEY: '금액은 최소 100원 이상의 0원으로 나누어 떨어지는 수로 입력해주세요.',
  QUANTITY: '수량은 1개 이상의 자연수로 입력해주세요.',
});
