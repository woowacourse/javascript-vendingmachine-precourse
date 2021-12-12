export const MINIMUM_COIN_TYPE = 10; // 최소 동전 단위
export const MINIMUM_PRODUCT_AMOUNT = 100; // 상품 최소 금액

export const CONFIG = Object.freeze({
  // 스토리지 키
  STORAGE_KEY_PRODUCT: 'VENDING_MACHINE_PRODUCT',
  STORAGE_KEY_COINS: 'VENDING_MACHINE_COINS',
  STORAGE_KEY_CHARGE_AMOUNT: 'VENDING_MACHINE_CHARGE_AMOUNT',

  // 메뉴 설정
  APP_MAIN_MENU: [
    {
      id: 'product-add-menu',
      name: '상품 관리',
    },
    {
      id: 'vending-machine-manage-menu',
      name: '잔돈 충전',
    },
    {
      id: 'product-purchase-menu',
      name: '상품 구매',
    },
  ],
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
  CHARGE_AMOUNT: 0,
});
