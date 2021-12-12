export const MENU_TYPE = {
  'product-purchase-menu': 'PRODUCT_PURCHASE',
  'vending-machine-manage-menu': 'MACHINE_MANAGEMENT',
  'product-add-menu': 'PRODUCT_MANAGEMENT',
};

export const MENU = {
  PRODUCT_PURCHASE: 'PRODUCT_PURCHASE',
  MACHINE_MANAGEMENT: 'MACHINE_MANAGEMENT',
  PRODUCT_MANAGEMENT: 'PRODUCT_MANAGEMENT',
};

export const MESSAGE = {
  EXISTED_PRODUCT: '이미 존재하는 상품입니다.',
  INVALID_PRICE: '최소가격은 100원이며, 10원 단위로 나누어떨어져야 합니다.',
  INVALID_CHARGING_CHANGES:
    '충전가능한 금액은 최소 10원이며, 10원 단위로 나누어 떨어져야 합니다.',
  INVALID_CHARGING_MONEY:
    '투입 가능한 금액은 최소 10원이며, 10원 단위로 나누어 떨어져야 합니다.',
};

export const RULE = {
  MINIMUN_PRICE: 100,
  DIVISIBLE_BY: 10,
};

export const COIN_UNITS = [500, 100, 50, 10];
