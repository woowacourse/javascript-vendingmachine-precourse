export const STORAGE_NAME = 'vending-machine';
export const COINAGE = [500, 100, 50, 10];
export const EMPTY_COINS = { '500': 0, '100': 0, '50': 0, '10': 0 };
export const PRODUCT_NAME_LENGTH_RANGE = {
  MIN: 1,
  MAX: 20,
};
export const PRODUCT_PRICE_RANGE = {
  MIN: 100,
  MAX: Number.MAX_SAFE_INTEGER,
};
export const PRODUCT_QUNATITY_RANGE = {
  MIN: 1,
  MAX: Number.MAX_SAFE_INTEGER,
};
export const CHARGE_AMOUNT_RANGE = {
  MIN: 10,
  MAX: Number.MAX_SAFE_INTEGER,
};
export const INIT_DATA = {
  'items': [],
  'coins': { '500': 0, '100': 0, '50': 0, '10': 0 },
  'chargedAmount': 0,
};
export const TAB = {
  PRODUCT_ADD_MENU: '/add',
  PRODUCT_PURCHASE_MENU: '/purchase',
  VENDING_MACHINE_MANAGE_MENU: '/manage',
};
export const EXCEPTIONS = {
  OUT_OF_STOCK: new Error('재고가 없습니다.'),
  NO_SUCH_ITEM: new Error('아이템 조회에 실패했습니다.'),
  NOT_ENOUGH_MONEY: new Error('금액이 부족합니다.'),
  WRONG_CHARGE_AMOUNT: new Error('올바른 금액을 투입해주세요.'),
  WRONG_ITEM: new Error('잘못된 상품 정보입니다.'),
};
