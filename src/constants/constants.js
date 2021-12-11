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

export const MENU_ELEMENT = {
  adminName: '상품 관리',
  adminId: 'product-add-menu',
  chargeName: '잔돈 충전',
  chargeId: 'vending-machine-manage-menu',
  purchaseName: '상품 구매',
  purchaseId: 'product-purchase-menu',
};
