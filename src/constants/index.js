export const APP_TITLE = '🥤자판기🥤';
export const APP_MENU = Object.freeze([
  { component: 'product-add-menu', text: '상품 관리' },
  { component: 'vending-machine-manage-menu', text: '잔돈 충전' },
  { component: 'product-purchase-menu', text: '상품 구매' },
]);

export const EMPTY = '';
export const BLANK = ' ';
export const ZERO = 0;

export const MINIMUN_CHARGING = 100;
export const DIVIDE_CHARGING = 10;

export const ADDITIONAL_CONDITION = Object.freeze({
  PRICE_INPUT: '가격', // 100 이상, 10으로 나누어 떨어지는 정수
  MACHINE_CHARGE: '자판기가 보유할 금액',
  CHARGE_INPUT: '투입할 금액', // 10으로 나누어 떨어지는 정수
});

export const ERROR_MESSAGES = Object.freeze({
  notDefined: '을(를) 입력해 주세요.',
  dupError: '은(는) 이미 존재합니다.',
  zeroError: '은(는) 0이 아닌 양의 정수입니다.',
  negativeError: '은(는) 음수가 아닌 양의 정수입니다.',
  decimalError: '은(는) 소수가 아닌 양의 정수입니다.',
  minimumError: `은(는) 최소 ${MINIMUN_CHARGING}원부터 입력해주세요.`,
  InDivisibleError: `은(는) ${DIVIDE_CHARGING}으로 나누어 떨어져야 합니다.`,
});

export const CHARGE_UNIT = [500, 100, 50, 10];
export const DEFAULT_VALUES = Object.freeze({
  'vending-machine-manage-menu': CHARGE_UNIT.map(unit => ({ description: unit, count: 0 })),
});
