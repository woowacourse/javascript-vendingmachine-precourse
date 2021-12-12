export const RULES = {
  MIN_PRICE: 100,
  MIN_PRICE_UNIT: 10,
  MIN_QUANTITY: 1,
};

export const ERROR_MSG = {
  PRODUCT_ADD: `상품 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.\n상품 수량은 1개 이상부터 입력 가능합니다.`,
  VENDING_MACHINE_MANAGE: `충전 금액은 10원부터 시작하며, 10원으로 나누어 떨어져야 합니다.`,
};

export const LS_KEY = {
  PRODUCT_ADD_PRODUCTS: 'products',
  VENDING_MACHINE_MANAGE_CHARGES: 'charges',
  PRODUCT_PURCHASE_CHARGE_AMOUNT: 'chargeAmount',
};
