export const CHARGE_TITLE = '금액 투입';
export const PURCHASE_TITLE = '구매할 수 있는 상품 현황';
export const CHANGES_TITLE = '잔돈';

export const INPUT = {
  ID: 'charge-input',
  TYPE: 'number',
  TEXT: '투입할 금액',
};

export const BUTTON = {
  CHARGE: {
    ID: 'charge-button',
    TEXT: '투입하기',
  },
  PURCHASE: {
    CLASS: 'purchase-button',
    TEXT: '구매하기',
  },
  CHANGES: {
    ID: 'coin-return-button',
    TEXT: '반환하기',
  },
};

export const CHARGE_AMOUNT = {
  ID: 'charge-amount',
  TEXT: '투입한 금액: ',
};

export const PUCHASE_TABLE = {
  HEADER: ['상품명', '가격', '수량', '구매'],
  BODY: {
    CLASS: 'product-purchase-item',
    ITEM: {
      NAME: {
        CLASS: 'product-purchase-name',
        DATA: 'data-product-name',
      },
      PRICE: {
        CLASS: 'product-purchase-price',
        DATA: 'data-product-price',
      },
      QUANTITY: {
        CLASS: 'product-purchase-quantity',
        DATA: 'data-product-quantity',
      },
    },
  },
};

export const CHANGES_TABLE = {
  HEADER: ['동전', '개수'],
  BODY: [
    {
      ID: 'vending-machine-coin-500-quantity',
      TEXT: '500원',
    },
    {
      ID: 'vending-machine-coin-100-quantity',
      TEXT: '100원',
    },
    {
      ID: 'vending-machine-coin-50-quantity',
      TEXT: '50원',
    },
    {
      ID: 'vending-machine-coin-10-quantity',
      TEXT: '10원',
    },
  ],
};
