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
