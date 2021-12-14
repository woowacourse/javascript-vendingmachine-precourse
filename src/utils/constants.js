export const RULES = {
  MIN_PRICE: 100,
  MIN_PRICE_UNIT: 10,
  MIN_QUANTITY: 1,
};

export const ERROR_MSG = {
  PRODUCT_ADD: `상품 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.\n상품 수량은 1개 이상부터 입력 가능합니다.`,
  VENDING_MACHINE_MANAGE: `충전 금액은 10원부터 시작하며, 10원으로 나누어 떨어져야 합니다.`,
  PRODUCT_PURCHASE: `투입 금액은 10원부터 시작하며, 10원으로 나누어 떨어져야 합니다.`,
};

export const LS_KEY = {
  RECENT_MENU: 'recentMenu',
  PRODUCT_ADD_PRODUCTS: 'products',
  VENDING_MACHINE_MANAGE_CHARGES: 'charges',
  PRODUCT_PURCHASE_CHARGE_AMOUNT: 'chargeAmount',
};

export const MENU_INDEX = {
  PRODUCT_ADD: '0',
  VENDING_MACHINE_MANAGE: '1',
  PRODUCT_PURCHASE: '2',
};

export const COIN = {
  FIVE_HUNDRED: 500,
  A_HUNDRED: 100,
  FIFTY: 50,
  TEN: 10,
};

export const CHARGE_INIT = [
  { coinType: COIN.FIVE_HUNDRED, quantity: 0 },
  { coinType: COIN.A_HUNDRED, quantity: 0 },
  { coinType: COIN.FIFTY, quantity: 0 },
  { coinType: COIN.TEN, quantity: 0 },
];
