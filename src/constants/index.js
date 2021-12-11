export const coinList = [500, 100, 50, 10];

export const MIN_UNIT_OF_MONEY = Math.min(...coinList);
export const MIN_PRICE = 100;
export const ZERO = 0;

export const ERROR_MESSAGE = {
  PRODUCT: {
    NAME_EMPTY: '상품명을 입력하세요.',
    NAME_SPACE_BEFORE_OR_AFTER: '상품명의 앞뒤에 공백이 올 수 없습니다.',
    PRICE_LESS_THAN_MIN: `상품 가격은 최소 ${MIN_PRICE}원 이상입니다.`,
    PRICE_MIN_UNIT_OF_MONEY: `상품 가격의 최소 단위는 ${MIN_UNIT_OF_MONEY}원 입니다`,
    QUANTITY_INTEGER: '상품 수량은 정수여야 합니다',
    QUANTITY_GREATER_THAN_ZERO: `상품 수량은 ${ZERO}보다 커야합니다.`,
  },
};
