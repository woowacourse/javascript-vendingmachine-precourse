const STORAGE_NAME = 'product';

const STANDARD_NUMBER = 1;

const STANDARD_PRICE = {
  MINIMUM: 100,
  DIVIDE_NUMBER: 10,
};

const ERROR_MESSAGE = {
  CANNOT_BE_BLANK: '빈칸 없이 입력해 주세요.',
  LESS_THAN_STANDARD: `상품의 가격을 ${STANDARD_PRICE.MINIMUM}원 이상으로 입력해 주세요.`,
  NOT_DIVIDE_BY_TEN: `${STANDARD_PRICE.DIVIDE_NUMBER}원으로 나누어 떨어진 값으로 입력해 주세요.`,
  COUNT_TOO_SMALL: `${STANDARD_NUMBER} 이상의 숫자로 입력해 주세요.`,
  CAN_NOT_OVERLAP: '상품명은 중복될 수 없습니다.',
};

export { STORAGE_NAME, STANDARD_NUMBER, STANDARD_PRICE, ERROR_MESSAGE };
