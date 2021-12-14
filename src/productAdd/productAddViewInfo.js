export const ADD_TITLE = '상품 추가하기';
export const STATUS_TITLE = '상품 현황';

export const INPUT = {
  NAME: {
    TEXT: '상품명',
    ID: 'product-name-input',
    TYPE: 'text',
  },
  PRICE: {
    TEXT: '가격',
    ID: 'product-price-input',
    TYPE: 'number',
  },
  QUANTITY: {
    TEXT: '수량',
    ID: 'product-quantity-input',
    TYPE: 'number',
  },
};

export const BUTTON = {
  ID: 'product-add-button',
  TEXT: '추가하기',
};

export const TABLE = {
  ID: '#table',
  HEADER: ['상품명', '가격', '수량'],
  BODY: {
    CLASS: 'product-manage-item',
    ITEM: {
      NAME_CLASS: 'product-manage-name',
      PRICE_CLASS: 'product-manage-price',
      QUANTITY_CLASS: 'product-manage-quantity',
    },
  },
};
