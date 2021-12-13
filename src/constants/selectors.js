export const SELECTOR = {
  APP: '#app',
  TAB_MENU: '#tab-menu',
  COMPONENT: '#component',

  COIN_MENU: '#vending-machine-manage-menu',
  COIN_CHARGE_INPUT: '#vending-machine-charge-input',
  COIN_CHARGE_BUTTON: '#vending-machine-charge-button',
  COIN_CHARGE_AMOUNT: '#vending-machine-charge-amount',
  COIN_CHARGE_UNIT: '#vending-machine-monetary-unit',

  COIN_500: '#vending-machine-coin-500-quantity',
  COIN_100: '#vending-machine-coin-100-quantity',
  COIN_50: '#vending-machine-coin-50-quantity',
  COIN_10: '#vending-machine-coin-10-quantity',

  PRODUCT_MENU: '#product-add-menu',
  PRODUCT_NAME_INPUT: '#product-name-input',
  PRODUCT_PRICE_INPUT: '#product-price-input',
  PRODUCT_QUANTITY_INPUT: '#product-quantity-input',
  PRODUCT_ADD_BUTTON: '#product-add-button',
  PRODUCT_ADD_FORM: '#product-add-form',
  PRODUCT_INVENTORY: '#product-inventory',

  PURCHASE_MENU: '#product-purchase-menu',
  PURCHASE_CHARGE_INPUT: '#charge-input',
  PURCHASE_CHARGE_AMOUNT: '#charge-amount',
  PURCHASE_CHARGE_UNIT: '#monetary-unit',
  PURCHASE_CHARGE_BUTTON: '#charge-button',
  PURCHASE_ITEM_BUTTON: '.purchase-button',
  PURCHASE_ITEM_QUANTITY: '.product-purchase-quantity',
  PURCHASE_INVENTORY: '#product-purchase-inventory',
  COIN_RETURN_BUTTON: '#coin-return-button',

  MAKE_COIN_ID: coinType => {
    return `#vending-machine-${coinType}-quantity`;
  },

  MAKE_COIN_QUANTITY_ID: coinType => {
    return `#${coinType}-quantity`;
  },
};
