export const SELECTOR = {
  addMenu: 'product-add-menu',
  vendingMenu: 'vending-machine-manage-menu',
  purchaseMenu: 'product-purchase-menu',

  productNameInput: 'product-name-input',
  productPriceInput: 'product-price-input',
  productQuantityInput: 'product-quantity-input',
  productAddButton: 'product-add-button',
  productItem: 'product-manage-item',
  productName: 'product-manage-name',
  productPrice: 'product-manage-price',
  productQuantity: 'product-manage-quantity',

  vendingChargeInput: 'vending-machine-charge-input',
  vendingChargeButton: 'vending-machine-charge-button',
  vendingChargeAmount: 'vending-machine-charge-amount',
  vendingCoin500: 'vending-machine-coin-500-quantity',
  vendingCoin100: 'vending-machine-coin-100-quantity',
  vendingCoin50: 'vending-machine-coin-500-quantity',
  vendingCoin10: 'vending-machine-coin-10-quantity',

  chargeInput: 'charge-input',
  chargeButton: 'charge-button',
  chargeAmount: 'charge-amount',
  purchaseItem: 'product-purchase-item',
  purchaseButton: 'purchase-button',
  purchaseName: 'product-purchase-name',
  purchasePrice: 'product-purchase-price',
  purchaseQuantity: 'product-purchase-quantity',
  returnButton: 'coin-return-button',
  coin500: 'coin-500-quantity',
  coin100: 'coin-100-quantity',
  coin50: 'coin-50-quantity',
  coin10: 'coin-10-quantity',
};

export const KEY = {
  product: 'products',
  vending: 'vending',
  charge: 'charge',
};

export const ALERT_MESSAGE = {
  isNotPositiveNumber: '1이상의 정수를 입력해주세요.',
  isBlank: '공백을 제거해주세요',
  isNotMultipleOf10: '10의 배수를 입력해주세요.',
  isNotOver100: '100원 이상을 입력해주세요.',
  isAlreadyExistProduct: '이미 존재하는 상품입니다.',
  isNotEnoughCoin: '금액이 부족합니다.',
  isNotEnoughQuantity: '수량이 부족합니다.',
};

export const COIN_ARRAY = [500, 100, 50, 10];

export const COIN_X_QUANTITY = x => `coin-${x}-quantity`;

export const VENDING_MACHINE_COIN_X_QUANTITY = x => `vending-machine-coin-${x}-quantity`;
