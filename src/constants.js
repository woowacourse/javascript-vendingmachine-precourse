export const ELEMENT_IDS = Object.freeze({
  APP: 'app',
  PRODUCT_ADD: {
    MENU: 'product-add-menu',
    PANE: 'product-add-pane',
    FORM: 'product-add-form',
    TABLE: 'product-add-table',
    NAME_INPUT: 'product-name-input',
    PRICE_INPUT: 'product-price-input',
    QUANTITY_INPUT: 'product-quantity-input',
    ADD_BUTTON: 'product-add-button',
  },
  VENDING_MACHINE_MANAGE: {
    MENU: 'vending-machine-manage-menu',
    PANE: 'vending-machine-manage-pane',
    FORM: 'vending-machine-manage-form',
    TABLE: 'vending-machine-manage-table',
    CHARGE_INPUT: 'vending-machine-charge-input',
    CHARGE_BUTTON: 'vending-machine-charge-button',
    CHARGE_AMOUNT: 'vending-machine-charge-amount',
    COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
    COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
    COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
    COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',
  },
  PRODUCT_PURCHASE: {
    MENU: 'product-purchase-menu',
    PANE: 'product-purchase-pane',
    FORM: 'product-purchase-form',
    TABLE: 'product-purchase-table',
    CHARGE_INPUT: 'charge-input',
    CHARGE_BUTTON: 'charge-button',
    CHARGE_AMOUNT: 'charge-amount',
    COIN_RETURN_BUTTON: 'coin-return-button',
    COIN_500_QUANTITY: 'coin-500-quantity',
    COIN_100_QUANTITY: 'coin-100-quantity',
    COIN_50_QUANTITY: 'coin-50-quantity',
    COIN_10_QUANTITY: 'coin-10-quantity',
  },
});

export const ELEMENT_CLASSES = Object.freeze({
  TAB_MENU: 'tab-menu',
  TAB_CONTENT: 'tab-content',
  PRODUCT_ADD: {
    ITEM: 'product-manage-item',
  },
  PRODUCT_PURCHASE: {
    ITEM: 'product-purchase-item',
    PURCHASE_BUTTON: 'purchase-button',
    ITEM_NAME: 'product-purchase-name',
    ITEM_PRICE: 'product-purchase-price',
    ITEM_QUANTITY: 'product-purchase-quantity',
  },
});

export const ELEMENT_DATA_ATTRIBUTES = Object.freeze({
  PRODUCT_PURCHASE: {
    ITEM_NAME: 'data-product-name',
    ITEM_PRICE: 'data-product-price',
    ITEM_QUANTITY: 'data-product-quantity',
  },
});

export const LOCAL_STORAGE_KEY = 'vending-machine-data';

export const MIN_PRODUCT_PRICE = 100;

export const PRODUCT_PRICE_UNIT = 10;

export const VALIDATION_MESSAGES = {
  PRODUCT_ADD: {
    NAME: '상품명을 입력해주세요',
    PRICE: `상품의 최소가격은 ${MIN_PRODUCT_PRICE}원이며, ${PRODUCT_PRICE_UNIT}원 단위로 입력해주세요`,
    QUANTITY: '상품의 개수는 1개 이상 입력해주세요',
  },
  VENDING_MACHINE_MANAGE: {
    MONEY: `최소 ${PRODUCT_PRICE_UNIT}원단위만 입력 가능합니다`,
  },
  PURCHASE_PRODUCT: {
    MONEY: `최소 ${PRODUCT_PRICE_UNIT}원단위만 투입 가능합니다`,
  },
};

export const COIN_UNITS = [500, 100, 50, 10];

export const INITIAL_COINS = COIN_UNITS.reduce((acc, cur) => {
  acc[cur] = 0;
  return acc;
}, {});
