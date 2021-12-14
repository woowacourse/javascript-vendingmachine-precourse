export const ELEMENT_IDS = Object.freeze({
  APP: 'app',
  PRODUCT_ADD_MENU: 'product-add-menu',
  PRODUCT_ADD_PANE: 'product-add-pane',
  PRODUCT_ADD_FORM: 'product-add-form',
  PRODUCT_ADD_TABLE: 'product-add-table',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  VENDING_MACHINE_MANAGE_PANE: 'vending-machine-manage-pane',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  PRODUCT_PURCHASE_PANE: 'product-purchase-pane',
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-input',
  VENDING_MACHINE_CHARGE_BUTTON: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  VENDING_MACHINE_COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
  VENDING_MACHINE_COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
  VENDING_MACHINE_COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
  VENDING_MACHINE_COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',
});

export const ELEMENT_CLASSES = Object.freeze({
  TAB_MENU: 'tab-menu',
  TAB_CONTENT: 'tab-content',
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
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
};
