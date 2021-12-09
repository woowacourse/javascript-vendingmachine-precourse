export const APP_TITLE = '🥤자판기🥤';

export const TAB_INFO_LIST = [
  { id: 'product-add-menu', title: '상품관리' },
  { id: 'vending-machine-manage-menu', title: '잔돈충전' },
  { id: 'product-purchase-menu', title: '상품구매' },
];

export const DRINK_STORAGE_NAME = 'drink';
export const VENDINGCOIN_STORGAE_NAME = 'vendingCoin';
export const USERMONEY = 'userMoney';

export const NOW_PRODUCT_TABLE_TITLE = ['상품명', '가격', '수량'];

export const EMPTY_ERROR = 'empty-error';
export const PRICE_ERROR = 'price-error';
export const DIVIDE_ERROR = 'divide-error';
export const MINUS_ERROR = 'minus-error';
export const NOINTEGER_ERROR = 'nointeger-error';
export const NOTNUMBER_ERROR = 'notnumber-error';

export const ALERT_MSG = {
  'empty-error': '빈값을 입력하셨습니다 다시 입력해주세요',
  'price-error': '상품가격의 경우 100 이상이여야 합니다. 다시 입력해주세요',
  'divide-error':
    '상품가격의 경우 10으로 나누어 떨어져야 합니다. 다시 입력해주세요',
  'minus-error': '0이하의 값을 입력하셨습니다 다시 입력해주세요',
  'nointeger-error':
    '가격 수량 등 에는 소수점 값은 입력하실 수 없습니다 다시 입력해주세요',
  'notnumber-error':
    '가격 수량 등 에는 숫자가 아닌 값은 입력하실 수 없습니다 다시 입력해주세요',
};
