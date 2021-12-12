export const stringConstants = {
  ALERT: '잘못된 값을 입력하셨습니다.',
};

export const headerConstants = {
  HEADER_TITLE: '🥤자판기🥤',
  TAB_BUTTONS: ['상품 관리', '잔돈 충전', '상품 구매'],
};

export const addProductFormConstants = {
  TITLE: '상품 추가하기',
  FORM_ID: 'product-add-form',
  INPUT_PLACEHOLDERS: ['상품명', '가격', '수량'],
  INPUT_IDS: [
    'product-name-input',
    'product-price-input',
    'product-quantity-input',
  ],
  BUTTON_ID: 'product-add-button',
  BUTTON_VALUE: '추가하기',
};

export const chargeChangesFormConstants = {
  TITLE: '자판기 동전 충전하기',
  FORM_ID: 'vending-machine-charge-form',
  INPUT_PLACEHOLDERS: ['자판기가 보유할 금액'],
  INPUT_IDS: ['vending-machine-charge-input'],
  BUTTON_ID: 'vending-machine-charge-button',
  BUTTON_VALUE: '충전하기',
};

export const inputAmountFormConstants = {
  TITLE: '금액 투입',
  FORM_ID: 'charge-form',
  INPUT_PLACEHOLDERS: ['투입할 금액'],
  INPUT_IDS: ['charge-input'],
  BUTTON_ID: 'charge-button',
  BUTTON_VALUE: '투입하기',
};

export const productItemsTableConstants = {
  TITLE: '상품 현황',
  TH_IDS: [
    'product-items-name',
    'product-items-price',
    'product-items-quantity',
  ],
  TH_VALUE: ['상품명', '가격', '수량'],
};

export const coinItemsTableConstants = {
  TITLE: '자판기가 보유한 동전',
  TH_IDS: ['', ''],
  TH_VALUE: ['동전', '개수'],
};

export const changesCoinItemsTableConstants = {
  TITLE: '잔돈',
  TH_IDS: ['', ''],
  TH_VALUE: ['동전', '개수'],
  THEAD_ID: 'changes-coins-table-head',
  TBODY_ID: 'changes-coins-table-body',
};

export const purchasableProductItemsTableConstants = {
  TITLE: '구매할 수 있는 상품 현황',
  TH_IDS: ['', '', '', ''],
  TH_VALUE: ['상품명', '가격', '수량', '구매'],
  THEAD_ID: 'purchasable-product-table-head',
  TBODY_ID: 'purchasable-product-table-body',
};
