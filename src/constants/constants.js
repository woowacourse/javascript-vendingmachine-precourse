export const ERROR = {
  PRODUCT_NAME_BLANK_SUBMIT: '상품명을 빈칸으로 제출하실 수 없습니다.',
  PRODUCT_NAME_INCLUDE_SPACE: '상품명에 공백을 입력하실 수 없습니다.',
  PRODUCT_NAME_DUPLICATED: '동일한 상품명이 이미 존재합니다.',

  PRODUCT_PRICE_BLANK_SUBMIT: '상품가격을 빈칸으로 제출하실 수 없습니다.',
  PRODUCT_PRICE_INCLUDE_SPECIAL: '상품가격에 특수문자를 입력하실 수 없습니다.',
  PRODUCT_PRICE_UNDER_HUNDRED: '상품가격은 100원 미만일 수 없습니다.',
  PRODUCT_PRICE_NOT_TEN_MULTIPLE: '상품가격은 10의 배수만 입력 가능합니다.',

  PRODUCT_QUANTITY_BLANK_SUBMIT: '상품수량은 빈칸으로 제출하실 수 없습니다.',
  PRODUCT_QUANTITY_INCLUDE_SPECIAL: '상품수량에 특수문자를 입력하실 수 없습니다.',
  PRODUCT_QUANTITY_NOT_POSIVITE_INT: '상품수량은 양의 정수 입력만 가능합니다.',

  CHARGE_BLANK_SUBMIT: '금액을 빈칸으로 제출하실 수 없습니다.',
  CHARGE_INCLUDE_SPECIAL: '금액에 특수문자를 입력하실 수 없습니다.',
  CHARGE_UNDER_TEN: '금액은 10원 미만일 수 없습니다.',
  CHARGE_NOT_TEN_MULTIPLE: '금액은 10의 배수만 입력 가능합니다.',

  CHARGE_UNDER_PRODUCT_PRICE: '투입한 금액이 원하는 상품 가격 이상이어야 합니다.',
  PRODUCT_OUT_OF_STOCK: '구매를 원하시는 상품은 품절상태 입니다.',

  CHARGE_IS_ZERO: '투입한 금액이 0원이라 잔돈을 반환할 수 없습니다.',
  COINS_ARE_ZERO: '자판기가 보유한 잔돈이 없습니다.',
};

export const REGEX = {
  IS_INCLUDE_SPACE: /\s/g,
  HAS_SPECIAL: /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/g,
  HAS_NUMBER: /[^0-9]/g,
};

export const STORAGE = {
  INVENTORY: {
    NAME: 'inventory',
    INIT: [],
  },
  COIN: {
    NAME: 'coin',
    INIT: { coin500: 0, coin100: 0, coin50: 0, coin10: 0 },
  },
  CHARGE: {
    NAME: 'charge',
    INIT: 0,
  },
};

export const COIN_ARRAY = [500, 100, 50, 10];

export const WORD = {
  INPUT: 'INPUT',
  BLOCK: 'block',
  WON: '원',
  EA: '개',
  HYPHEN: '-',
  HASH: '#',
  COMPONENT: 'component',
};

export const NUMBER = {
  HUNDRED_MULTIPLE: 100,
  TEN_MULTIPLE: 10,
  TARGET_INDEX: 4,
};
