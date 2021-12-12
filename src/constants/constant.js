export const SELECTOR = {
  ID: {
    HEADER: 'header',
    BODY: 'body',
    PRODUCT_MENU: 'product-add-menu',
    PRODUCT_MENU_CONTAINER: 'product-menu-container',
    PRODUCT_NAME_INPUT: 'product-name-input',
    PRODUCT_PRICE_INPUT: 'product-price-input',
    PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
    PRODUCT_ADD_BUTTON: 'product-add-button',
    PRODUCT_MANAGE_TABLE: 'product-manage-table',

    COIN_MENU: 'vending-machine-manage-menu',
    COIN_MENU_CONTAINER: 'coin-menu-container',
    COIN_CHARGE_INPUT: 'vending-machine-charge-input',
    COIN_CHARGE_BUTTON: 'vending-machine-charge-button',
    COIN_CHARGE_AMOUNT: 'vending-machine-charge-amount',
    COIN_500: 'vending-machine-coin-500-quantity',
    COIN_100: 'vending-machine-coin-100-quantity',
    COIN_50: 'vending-machine-coin-50-quantity',
    COIN_10: 'vending-machine-coin-10-quantity',

    PURCHASE_MENU: 'product-purchase-menu',
    PURCHASE_MENU_CONTAINER: 'product-purchase-menu-container',
    PURCHASE_CHARGE_INPUT: 'charge-input',
    PURCHASE_CHARGE_BUTTON: 'charge-button',
    PURCHASE_CHARGE_AMOUNT: 'charge-amount',
    PURCHASE_RETURN_BUTTON: 'coin-return-button',
    PURCHASE_COIN_500: 'coin-500-quantity',
    PURCHASE_COIN_100: 'coin-100-quantity',
    PURCHASE_COIN_50: 'coin-50-quantity',
    PURCHASE_COIN_10: 'coin-10-quantity',
  },
  CLASS: {
    PRODUCT_MANAGE_ITEM: 'product-manage-item',
    PRODUCT_MANAGE_NAME: 'product-manage-name',
    PRODUCT_MANAGE_PRICE: 'product-manage-price',
    PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',
  },
};

export const LIMIT = {
  MIN_PRICE: 100,
  UNIT_PRICE: 10,
};

export const ERROR = {
  PRODUCT_NAME_ADD: '상품명을 기입해주세요.',
  PRODUCT_PRICE_ADD: '가격을 10원 단위로 100원 이상으로 기입해주세요.',
  PRODUCT_QUANTITY_ADD: '수량을 양의 정수로 기입해주세요.',
};

export const COMMENT = {
  VENDING_MACHINE: '🥤자판기🥤',
  PRODUCT_MENU: '상품 관리',
  PRODUCT_MENU_ADD: '상품 추가하기',
  PRODUCT_NAME_INPUT: '상품명',
  PRODUCT_PRICE_INPUT: '가격',
  PRODUCT_QUANTITY_INPUT: '수량',
  PRODUCT_ADD_BUTTON: '추가하기',
  PRODUCT_MENU_MANAGE: '상품 현황',
  PRODUCT_MANAGE_NAME: '상품명',
  PRODUCT_MANAGE_PRICE: '가격',
  PRODUCT_MANAGE_QUANTITY: '수량',
  COIN_MENU: '잔돈 충전',
  COIN_MENU_ADD: '자판기 동전 추가하기',
  COIN_CHARGE_INPUT: '자판기가 보유할 금액',
  COIN_CHARGE_BUTTON: '충전하기',
  COIN_CHARGE_AMOUNT: '보유 금액',
  COIN_MENU_TABLE: '자판기가 보유한 동전',
  COIN_MENU_TABLE_COIN: '동전',
  COIN_MENU_TABLE_AMOUNT: '개수',
  COIN_500: '500원',
  COIN_100: '100원',
  COIN_50: '10원',
  COIN_10: '10원',

  PURCHASE_MENU: '상품 구매',
  PURCHASE_MENU_CHARGE: '금액 투입',
  PURCHASE_CHARGE_INPUT: '투입할 금액',
  PURCHASE_CHARGE_BUTTON: '투입하기',
  PURCHASE_CHARGE_AMOUNT: '투입한 금액',
  PURCHASE_MENU_ITEM: '구매할 수 있는 상품 현황',
  PURCHASE_ITEM_NAME: '상품명',
  PURCHASE_ITEM_PRICE: '가격',
  PURCHASE_ITEM_QUANTITY: '수량',
  PURCHASE_ITEM_BUY: '구매',
  PURCHASE_ITEM_BUTTON: '구매하기',
  PURCHASE_MENU_EXCHANGE: '잔돈',
  PURCHASE_RETURN_BUTTON: '반환하기',
  PURCHASE_COIN_500: '500원',
  PURCHASE_COIN_100: '100원',
  PURCHASE_COIN_50: '50원',
  PURCHASE_COIN_10: '10원',
};
