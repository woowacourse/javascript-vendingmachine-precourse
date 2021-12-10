export const COINS_PRICE = [500, 100, 50, 10];
export const COINS_PRICE_MAX = COINS_PRICE[0];
export const COINS_PRICE_MIN = COINS_PRICE[COINS_PRICE.length - 1];

export const PRODUCT_PRICE_MIN = 100;
export const PRODUCT_PRICE_MOD = COINS_PRICE_MIN;

export const MENUS = {
  PRODUCT_MANAGE: '상품 관리',
  CHANGES_CHARGE: '잔돈 충전',
  PRODUCT_PURCHASE: '상품 구매',
};

export const ELEMENT_ID = {
  APP: 'app',
  // 탭 메뉴 버튼
  MENU_PRODUCT_MANAGE: 'product-add-menu',
  MENU_CHARGE_MANAGE: 'vending-machine-manage-menu',
  MENU_PRODUCT_PURCHASE: 'product-purchase-menu',
  // 상품 관리(추가) 메뉴
  PRODUCT_MANAGE_NAME_INPUT: 'product-name-input',
  PRODUCT_MANAGE_PRICE_INPUT: 'product-price-input',
  PRODUCT_MANAGE_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_MANAGE_ADD_BUTTON: 'product-add-button',
  // 잔돈 충전 (자판기 보유 동전) 메뉴
  CHANGES_CHARGE_CHARGE_INPUT: 'vending-machine-charge-input',
  CHANGES_CHARGE_CHARGE_BUTTON: 'vending-machine-charge-button',
  CHANGES_CHARGE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  CHANGES_CHARGE_COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
  CHANGES_CHARGE_COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
  CHANGES_CHARGE_COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
  CHANGES_CHARGE_COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',
  // 상품 구매 메뉴
  PRODUCT_PURCHASE_CHARGE_INPUT: 'charge-input',
  PRODUCT_PURCHASE_CHARGE_BUTTON: 'charge-button',
  PRODUCT_PURCHASE_CHARGE_AMOUNT: 'charge-amount',
  PRODUCT_PURCHASE_COIN_RETURN_BUTTON: 'coin-return-button',
  PRODUCT_PURCHASE_COIN_500_QUANTITY: 'coin-500-quantity',
  PRODUCT_PURCHASE_COIN_100_QUANTITY: 'coin-100-quantity',
  PRODUCT_PURCHASE_COIN_50_QUANTITY: 'coin-50-quantity',
  PRODUCT_PURCHASE_COIN_10_QUANTITY: 'coin-10-quantity',
};

export const ELEMENT_CLASS = {
  // 상품 관리(추가) 메뉴
  PRODUCT_MANAGE_TABLE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE_TABLE_ITEM_NAME: 'product-manage-name',
  PRODUCT_MANAGE_TABLE_ITEM_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_TABLE_ITEM_QUANTITY: 'product-manage-quantity',
  // 상품 구매 메뉴
  PRODUCT_PURCHASE_ITEM: 'product-purchase-item',
  PRODUCT_PURCHASE_ITEM_PURCHASE_BUTTON: 'purchase-button',
  PRODUCT_PURCHASE_ITEM_NAME: 'product-purchase-name',
  PRODUCT_PURCHASE_ITEM_PRICE: 'product-purchase-price',
  PRODUCT_PURCHASE_ITEM_QUANTITY: 'product-purchase-quantity',
};
