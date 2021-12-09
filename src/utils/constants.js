export const ERROR = {
  PRODUCT_NAME_BLANK_SUBMIT: '상품명을 빈칸으로 제출하실 수 없습니다.',
  PRODUCT_NAME_INCLUDE_SPACE: '상품명에 공백을 입력하실 수 없습니다.',

  PRODUCT_PRICE_BLANK_SUBMIT: '상품가격을 빈칸으로 제출하실 수 없습니다.',
  PRODUCT_PRICE_INCLUDE_SPECIAL: '상품가격에 특수문자를 입력하실 수 없습니다.',
  PRODUCT_PRICE_UNDER_HUNDRED: '상품가격은 100원 미만일 수 없습니다.',
  PRODUCT_PRICE_NOT_TEN_MULTIPLE: '상품가격은 10의 배수만 입력 가능합니다.',
};

export const REGEX = {
  IS_INCLUDE_SPACE: /\s/g,
  HAS_SPECIAL: /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/g,
};
