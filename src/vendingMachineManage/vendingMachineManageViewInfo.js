export const MANAGE_TITLE = '자판기 동전 충전하기';
export const STATUS_TITLE = '자판기가 보유한 동전';

export const INPUT = {
  TYPE: 'number',
  ID: 'vending-machine-charge-input',
  TEXT: '자판기가 보유할 금액',
};

export const BUTTON = {
  ID: 'vending-machine-charge-button',
  TEXT: '충전하기',
};

export const AMOUNT = {
  ID: 'vending-machine-charge-amount',
  TEXT: '보유 금액: ',
};

export const TABLE = {
  HEADER: ['동전', '개수'],
  BODY: [
    {
      TEXT: '500원',
      ID: 'vending-machine-coin-500-quantity',
    },
    {
      TEXT: '100원',
      ID: 'vending-machine-coin-100-quantity',
    },
    {
      TEXT: '50원',
      ID: 'vending-machine-coin-50-quantity',
    },
    {
      TEXT: '10원',
      ID: 'vending-machine-coin-10-quantity',
    },
  ],
};
