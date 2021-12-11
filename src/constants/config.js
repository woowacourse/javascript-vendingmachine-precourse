export const CONFIG = Object.freeze({
  // 스토리지 키
  STORAGE_KEY_PRODUCT: 'VENDING_MACHINE_PRODUCT',
  STORAGE_KEY_COINS: 'VENDING_MACHINE_COINS',
  STORAGE_KEY_CHARGE_AMOUNT: 'VENDING_MACHINE_CHARGE_AMOUNT',
});

export const DEFAULT_VALUE = Object.freeze({
  // 자판기 초기 상품 보유 값
  PRODUCT: [],

  // 자판기 초기 동전 보유 값
  COINS: [
    { coin: 500, quantity: 0 },
    { coin: 100, quantity: 0 },
    { coin: 50, quantity: 0 },
    { coin: 10, quantity: 0 },
  ],

  // 사용자가 초기 보유한 금액 값
  CHARGE: 0,
});
