export const COIN_UNITS = [500, 100, 50, 10];

export const STORAGE_NAME = {
  PRODUCT: 'product',
  MACHINE_AMOUNT: 'machine',
  COIN: 'coin',
  USER_AMOUNT: 'user',
};

export const STANDARD = {
  PRICE_MINIMUM: 100,
  DIVIDE_NUMBER: 10,
  PRODUCT_QUANTITY: 1,
  CURRENT_MONEY: 0,
};

export const ERROR_MESSAGE = {
  CANNOT_BE_BLANK: '빈칸 없이 입력해 주세요.',
  LESS_THAN_STANDARD: `상품의 가격을 ${STANDARD.PRICE_MINIMUM}원 이상으로 입력해 주세요.`,
  NOT_DIVIDE_BY_TEN: `${STANDARD.DIVIDE_NUMBER}원으로 나누어 떨어진 값으로 입력해 주세요.`,
  COUNT_TOO_SMALL: `${STANDARD.PRODUCT_QUANTITY} 이상의 숫자로 입력해 주세요.`,
  CAN_NOT_OVERLAP: '상품명은 중복될 수 없습니다.',
  NOT_ENOUGH_MONEY: '금액이 부족합니다.',
};
