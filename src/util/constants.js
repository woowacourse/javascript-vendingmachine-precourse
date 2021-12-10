const ERROR_MESSAGE = Object.freeze({
  sameName: '이미 같은 상품명의 음료수가 있습니다. 다른 상품명을 입력해주세요',
  basePrice:
    '상품 가격은 100원부터 시작해야 하며, 10원으로 나누어 떨어져야 합니다. 다시 입력해주세요.',
  baseQuantity: '상품 수량은 0개 이상이어야 합니다. 다시 입력해주세요.',
  baseChargingMoney:
    '충전 금액은 0원 이상이어야 하며, 10원으로 나누어 떨어져야 합니다. 다시 입력해주세요.',
  baseInsertingMoney:
    '상품 가격은 0원 이상이어야 하며, 10원으로 나누어 떨어져야 합니다. 다시 입력해주세요.',
  notEnoughMoney: '투입된 돈으로는 해당 제품을 구입하기에 부족합니다.',
  soldOut: '해당 제품은 매진되었습니다.',
});

const MINIMUM_PRICE = 100;
const DIVIDING_STANDARD = 10;
const CHARGING_UNIT_ARRAY = [500, 100, 50, 10];
const NUM_500 = 500;
const NUM_100 = 100;
const NUM_50 = 50;
const NUM_10 = 10;
const ZERO = 0;

const KEY = Object.freeze({
  productList: 'productList', // tab1
  chargedCoins: 'chargedCoins', // tab2
  chargedMoney: 'chargedMoney',
  insertedMoney: 'insertedMoney',
});

const SELECTOR = Object.freeze({
  productAddMenu: 'product-add-menu',
  vendingMachineManageMenu: 'vending-machine-manage-menu',
  productPurchaseMenu: 'product-purchase-menu',
  productAddButton: 'product-add-button',
  vendingMachineChargeButton: 'vending-machine-charge-button',
  chargeButton: 'charge-button',
  coinReturnButton: 'coin-return-button',
  tab1: '.tab1',
  tab2: '.tab2',
  tab3: '.tab3',
  purchaseButton: '.purchase-button',
});

export {
  ERROR_MESSAGE,
  MINIMUM_PRICE,
  DIVIDING_STANDARD,
  CHARGING_UNIT_ARRAY,
  NUM_500,
  NUM_100,
  NUM_50,
  NUM_10,
  ZERO,
  KEY,
  SELECTOR,
};
