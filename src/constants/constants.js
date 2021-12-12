export const ADMIN_ELEMENT_CLASS = {
  productManageItem: 'product-manage-item',
  productManageName: 'product-manage-name',
  productManagePrice: 'product-manage-price',
  productManageQuantity: 'product-manage-quantity',
};

export const ADMIN_ELEMENT_ID = {
  productNameInput: 'product-name-input',
  productPriceInput: 'product-price-input',
  productQuantityInput: 'product-quantity-input',
  productAddButton: 'product-add-button',
};

export const ADMIN_ERR = {
  name: '공백을 제외한 1글자 이상의 상품명을 입력해주세요.',
  price: '100원 이상, 10원으로 나누어지는 상품 금액을 입력해주세요',
  quantity: '1개 이상의 상품 수량을 입력해주세요',
};

export const ADMIN_RULES = {
  measures: 10,
  minPrice: 100,
  minQuantity: 1,
};

export const CHARGE_ELEMENT_ID = {
  chargeInput: 'vending-machine-charge-input',
  chargeButton: 'vending-machine-charge-button',
  chargeAmount: 'vending-machine-charge-amount',
  coin500: 'vending-machine-coin-500-quantity',
  coin100: 'vending-machine-coin-100-quantity',
  coin50: 'vending-machine-coin-50-quantity',
  coin10: 'vending-machine-coin-10-quantity',
};

export const CHARGE_ERR =
  '최소 10원 이상의 10원으로 나누어떨어지는 충전 금액을 입력하세요.';

export const CHARGE_RULES = {
  measures: 10,
  minCharge: 10,
};

export const PURCHASE_ELEMENT_ID = {
  chargeInput: 'charge-input',
  chargeButton: 'charge-button',
  chargeAmount: 'charge-amount',
  coinReturnButton: 'coin-return-button',
  coin500: 'coin-500-quantity',
  coin100: 'coin-100-quantity',
  coin50: 'coin-50-quantity',
  coin10: 'coin-10-quantity',
};

export const PURCHASE_ELEMENT_CLASS = {
  productPurchaseItem: 'product-purchase-item',
  purchaseButton: 'purchase-button',
  productPurchaseName: 'product-purchase-name',
  productPurchasePrice: 'product-purchase-price',
  productPurchaseQuantity: 'product-purchase-quantity',
};

export const MENU_ELEMENT = {
  adminName: '상품 관리',
  adminId: 'product-add-menu',
  chargeName: '잔돈 충전',
  chargeId: 'vending-machine-manage-menu',
  purchaseName: '상품 구매',
  purchaseId: 'product-purchase-menu',
};
