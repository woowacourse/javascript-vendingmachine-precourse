export const ID = {
  APP: 'app',
  MENU: {
    CONTAINER: 'tab-menu',
    PURCHASE: 'product-purchase-menu',
    CHANGE: 'vending-machine-manage-menu',
    ADD: 'product-add-menu',
  },
  PRODUCT: {
    INPUT_FORM: 'product-add-form',
    NAME_INPUT: 'product-name-input',
    PRICE_INPUT: 'product-price-input',
    QUANTITY_INPUT: 'product-quantity-input',
    ADD_BUTTON: 'product-add-button',
  },
  VENDING_MACHINE: {
    CHARGE: {
      INPUT: 'vending-machine-charge-input',
      BUTTON: 'vending-machine-charge-button',
      AMOUNT: 'vending-machine-charge-amount',
    },
    COIN_QUANTITY: {
      FIVE_HUNDREDS: 'vending-machine-coin-500-quantity',
      ONE_HUNDRED: 'vending-machine-coin-100-quantity',
      FIFTY: 'vending-machine-coin-50-quantity',
      TEN: 'vending-machine-coin-10-quantity',
    },
  },
  CHARGE: {
    FORM: 'charge-form',
    INPUT: 'charge-input',
    BUTTON: 'charge-button',
    AMOUNT: 'charge-amount',
  },
  CHANGE: {
    BUTTON: 'coin-return-button',
    COIN_QUANTITY: {
      FIVE_HUNDREDS: 'coin-500-quantity',
      ONE_HUNDRED: 'coin-100-quantity',
      FIFTY: 'coin-50-quantity',
      TEN: 'coin-10-quantity',
    },
  },
};

export const CLASS = {
  PRODUCT: {
    MANAGE_ITEM: 'product-manage-item',
    MANGAE_NAME: 'product-manage-name',
    MANAGE_PRICE: 'product-manage-price',
    MANAGE_QUANTITY: 'product-manage-quantity',
  },
  PURCHASE: {
    ITEM: 'product-purchase-item',
    BUY_BUTTON: 'purchase-button',
    NAME: 'product-purchase-name',
    PRICE: 'product-purchase-price',
    QUANTITY: 'product-purchase-quantity',
  },
};

export const DATASET = {
  PRODUCT_NAME: 'productName',
  PRODUCT_PRICE: 'productPrice',
  PRODUCT_QUANTITY: 'productQuantity',
};

export const HINT = {
  NAME: '상품명',
  PRICE: '가격',
  QUANTITY: '수량',
  CHANGE: '자판기가 보유할 금액',
  PURCHASE: '투입할 금액',
};
