export const DOM_ID_SELECTOR = {
  productAddMenu: 'product-add-menu',
  productPurchaseMenu: 'product-purchase-menu',
  vendingMachineManageMenu: 'vending-machine-manage-menu',
  content: 'content',
  productNameInput: 'product-name-input',
  productPriceInput: 'product-price-input',
  productQuantityInput: 'product-quantity-input',
  productAddButton: 'product-add-button',
  productManageTable: 'product-manage-table',
  vendingMachineChargeInput: 'vending-machine-charge-input',
  vendingMachineChargeButton: 'vending-machine-charge-button',
  vendingMachineChargeAmount: 'vending-machine-charge-amount',
  vendingMachineChargeTable: 'vending-machine-charge-table',
  vendingMachineCoin500Quantity: 'vending-machine-coin-500-quantity',
  vendingMachineCoin100Quantity: 'vending-machine-coin-100-quantity',
  vendingMachineCoin50Quantity: 'vending-machine-coin-50-quantity',
  vendingMachineCoin10Quantity: 'vending-machine-coin-10-quantity',
  chargeInput: 'charge-input',
  chargeButton: 'charge-button',
  chargeAmount: 'charge-amount',
  productPurchaseTable: 'product-purchase-table',
  coinReturnButton: 'coin-return-button',
  coin500Quantity: 'coin-500-quantity',
  coin100Quantity: 'coin-100-quantity',
  coin50Quantity: 'coin-50-quantity',
  coin10Quantity: 'coin-10-quantity',
};

export const DOM_CLASS_SELECTOR = {
  productManageItem: 'product-manage-item',
  productManageName: 'product-manage-name',
  productManagePrice: 'product-manage-price',
  productManageQuantity: 'product-manage-quantity',
  purchaseItem: 'purchase-item',
  productPurchaseName: 'product-purchase-name',
  productPurchasePrice: 'product-purchase-price',
  productPurchaseQuantity: 'product-purchase-quantity',
  purchaseButton: 'purchase-button',
};

export const BUTTON_MESSAGE = {
  productAddMenu: '상품 관리',
  productPurchaseMenu: '상품 구매',
  vendingMachineManageMenu: '잔돈 충전',
};

export const TITLE_MESSAGE = '🥤자판기🥤';

export const PRODUCT_MANAGE_MESSAGE = {
  productAdd: '상품 추가하기',
  productStatus: '상품 현황',
  productAddButton: '추가하기',
  productName: '상품명',
  productPrice: '가격',
  productQuantity: '수량',
};

export const VENDING_MACHINE_CHARGE_MESSAGE = {
  chargeVendingMachine: '자판기 동전 충전하기',
  vendingMachineAmount: '자판기가 보유한 동전',
  willChargeAmount: '자판기가 보유할 금액',
  charge: '충전하기',
  amount: '보유 금액: ',
  coin: '동전',
  quantity: '개수',
  500: '500원',
  100: '100원',
  50: '50원',
  10: '10원',
};

export const PRODUCT_PURCHASE_MESSAGE = {
  chargeAmount: '금액 투입',
  productStatus: '구매할 수 있는 상품 현황',
  change: '잔돈',
  willChargeAmount: '투입할 금액',
  productName: '상품명',
  productPrice: '가격',
  productQuantity: '수량',
  productPurchase: '구매',
  purchase: '구매하기',
  charge: '투입하기',
  amount: '투입한 금액: ',
  return: '반환하기',
  coin: '동전',
  quantity: '개수',
  500: '500원',
  100: '100원',
  50: '50원',
  10: '10원',
};

export const ERROR_MESSAGE = {
  productName: '상품 이름을 확인해주세요.',
  productPrice: '상품 가격을 확인해주세요.',
  productQuantity: '상품 수량을 확인해주세요.',
  vendingCharge: '충전할 금액을 확인해주세요.',
  insertPrice: '투입 가격을 확인해주세요.',
  lackOfMoney: '금액이 부족합니다.',
  lackOfCoin: '잔돈이 부족합니다. 관리자에게 연락하세요.',
  noMoney: '반환할 금액이 없습니다.',
};

export const COIN_LIST = [500, 100, 50, 10];

export const COIN_UNIT = '개';

export const PRICE_DIVIDER = 10;

export const STORAGE_KEY = {
  menu: 'menu',
  product: 'product',
  coin: 'coin',
  vendingMachine: 'vendingMachine',
};
