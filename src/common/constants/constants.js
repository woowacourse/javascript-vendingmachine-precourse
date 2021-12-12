import {
  header,
  productMangeMenu,
  vendingMachineManageMenu,
  productPurchaseMenu,
} from '../dom/dom.js';

export const SELECTOR = {
  HEADER: header,
  PRODUCT_MANAGE: productMangeMenu,
  VENDING_MANAGE: vendingMachineManageMenu,
  PRODUCT_PURCHASE: productPurchaseMenu,
};

export const VALIDATION = {
  NAME: {
    NONE: '상품의 이름을 입력해 주십시오.',
    DUPLICATED: '상품의 이름은 중복이 될 수 없습니다.',
  },
  PRICE: {
    NONE: '가격을 입력해 주십시오.',
    NEGATIVE: '가격을 0 이상의 정수로 입력해 주십시오.',
    MULTIPLE_OF_10: '가격은 10의 배수만 입력이 가능합니다.',
  },
  QUANTITIY: {
    NONE: '수량을 입력해 주십시오.',
    NEGATIVE: '수량은 양의 정수로 입력해 주십시오',
  },
  AMOUNT: {
    NONE: '충전할 금액을 입력해 주세요.',
    MULTIPLE_OF_10: '충전할 금액은 10의 배수만 입력이 가능합니다.',
  },
  CHARGE: {
    NONE: '투입할 금액을 입력해 주세요.',
    MULTIPLE_OF_10: '투입할 금액은 10의 배수만 입력이 가능합니다.',
  },
};
