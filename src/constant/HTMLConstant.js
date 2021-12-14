const VANDING_MACHINE_MENU = {
  PRODUCT_ADD: "product-add-menu",
  COIN: "vending-machine-manage-menu",
  PURCHASE: "product-purchase-menu",
};

const ADD_PRODUCT = {
  NAME: "product-name-input",
  PRICE: "product-price-input",
  QUANTITY: "product-quantity-input",
  BUTTON: "product-add-button",
  PRODUCT_ITEM: "product-manage-item",
  PRODUCT_NAME: "product-manage-name",
  PRODUCT_PRICE: "product-manage-price",
  PRODUCT_QUANTITY: "product-manage-quantity",
};

const CHARGE_COIN = {
  INPUT: "vending-machine-charge-input",
  BUTTON: "vending-machine-charge-button",
  AMOUNT: "vending-machine-charge-amount",
  QUANTITY: [
    "vending-machine-coin-500-quantity",
    "vending-machine-coin-100-quantity",
    "vending-machine-coin-50-quantity",
    "vending-machine-coin-10-quantity",
  ],
};

const PURCHASE = {
  INPUT: "charge-input",
  ADD: "charge-button",
  AMOUNT: "charge-amount",
  RETURN: "coin-return-button",
  ITEM: "product-purchase-item",
  NAME: "product-purchase-name",
  PRICE: "product-purchase-price",
  QUANTITY: "product-purchase-quantity",
  PURCHASE: "purchase-button",
  DATASET_NAME: "data-product-name",
  DATASET_PRICE: "data-product-price",
  DATASET_QUANTITY: "data-product-quantity",
  LEFT_COIN: [
    "coin-500-quantity",
    "coin-100-quantity",
    "coin-50-quantity",
    "coin-10-quantity",
  ],
};

export { VANDING_MACHINE_MENU, ADD_PRODUCT, CHARGE_COIN, PURCHASE };
