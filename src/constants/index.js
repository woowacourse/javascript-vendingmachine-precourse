export const ID = {
  PRDCT_ADD: 'product-add-menu',
  MCHNE_MANAGE: 'vending-machine-manage-menu',
  PRDCT_PURCHASE: 'product-purchase-menu',
};

export const TABS = [
  {
    id: ID.PRDCT_ADD,
    title: '상품 관리',
  },
  {
    id: ID.MCHNE_MANAGE,
    title: '잔돈 충전',
  },
  {
    id: ID.PRDCT_PURCHASE,
    title: '상품 구매',
  },
];

export const COINS = [500, 100, 50, 10];

export const PRICE_MINIMUM = 100;
export const CHARGE_MININUM = 10;
export const DIVIDE_MININUM = 10;

export const ERROR_MSG = {
  enterName: '상품명을 입력해주세요.',
  enterPrice: '가격을 입력해주세요.',
  enterQuantity: '수량을 입력해주세요.',
  enterCharge: '금액을 입력해주세요.',
  duplicateName: '중복된 상품명이 있습니다.',
  hasSpace: '상품명에는 공백이 없어야합니다.',
  isPriceDivisible: `상품 가격은 ${DIVIDE_MININUM}으로 나눠떨어져야 합니다.`,
  isChargeDivisible: `금액은 ${DIVIDE_MININUM}으로 나눠떨어져야 합니다.`,
  priceMinUpper: `상품 가격은 ${PRICE_MINIMUM}보다 큰 수여야 합니다.`,
  chargeMinUpper: `금액은 ${CHARGE_MININUM}보다 큰 수여야 합니다.`,
  pricePositive: '수량은 양의 정수 값이어야 합니다.',
};
