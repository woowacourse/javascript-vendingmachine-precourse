export const DISPLAY = Object.freeze({
  // 공통
  TITLE_APP: '🥤자판기🥤',
  UNIT_MONEY: '원',
  UNIT_QUANTITY: '개',

  // 데이터 타입
  TEXT_PRODUCT_NAME: '상품명',
  TEXT_PRODUCT_PRICE: '가격',
  TEXT_PRODUCT_QUANTITY: '수량',

  TEXT_COIN: '동전',
  TEXT_COIN_QUANTITY: '개수',

  // 상품 관리 페이지
  TITLE_PRODUCT_ADD: '상품 추가하기',
  TITLE_PRODUCT_STATE: '상품 현황',

  BUTTON_PRODUCT_ADD: '추가하기',

  // 동전 관리 페이지
  TITLE_COIN_CHARGE: '자판기 동전 충전하기',
  TITLE_COIN_STATE: '자판기가 보유한 동전',

  TEXT_COIN_TOTAL: '보유 금액',

  BUTTON_COIN_CHARGE: '충전하기',

  // 상품 구매 및 반환 페이지
  TITLE_AMOUNT_CHARGE: '금액 투입',
  TITLE_PURCHASE_LIST: '구매할 수 있는 상품 현황',
  TITLE_PURCHASE_BALANCE: '잔돈',

  TEXT_AMOUNT_INPUT: '투입할 금액',
  TEXT_AMOUNT_CHARGE: '투입한 금액',
  TEXT_PURCHASE: '구매',

  BUTTON_AMOUNT_CHARGE: '투입하기',
  BUTTON_PURCHASE: '구매하기',
  BUTTON_AMOUNT_RETURN: '반환하기',
});

export const SELECTOR = Object.freeze({
  APP: '#app',
  PRODUCT_NAME_INPUT: '#product-name-input',
  PRODUCT_PRICE_INPUT: '#product-price-input',
  PRODUCT_QUANTITY_INPUT: '#product-quantity-input',
  PRODUCT_ADD_BUTTON: '#product-add-button',

  CHARGE_AMOUNT_INPUT: '#charge-input',
  CHARGE_AMOUNT_BUTTON: '#charge-button',

  PURCHASE_BUTTON: '.purchase-button',

  COIN_RETURN_BUTTON: '#coin-return-button',
});
