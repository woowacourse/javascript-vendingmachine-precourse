import { convertArrayToObjectKeys } from './general.js';

export const MENU_ELEMENT = {
  PURCHASE: 'product-purchase-menu',
  MACHINE: 'vending-machine-manage-menu',
  PRODUCT: 'product-add-menu',
};

export const MACHINE_ELEMENT = {
  CHARGE_INPUT: 'vending-machine-charge-input',
  CHARGE_BUTTON: 'vending-machine-charge-button',
  CHARGE_AMOUNT: 'vending-machine-charge-amount',
  COIN_QUANT: unit => `vending-machine-coin-${unit}-quantity`,
};

export const PRODUCT_ELEMENT = {
  NAME_INPUT: 'product-name-input',
  PRICE_INPUT: 'product-price-input',
  QUANT_INPUT: 'product-quantity-input',
  ADD_BUTTON: 'product-add-button',
  MANAGE_ITEM: 'product-manage-item',
  MANAGE_NAME: 'product-manage-name',
  MANAGE_PRICE: 'product-manage-price',
  MANAGE_QUANT: 'product-manage-quantity',
};

export const PURCHASE_ELEMENT = {
  CHARGE_INPUT: 'charge-input',
  CHARGE_AMOUNT: 'charge-amount',
  CHARGE_BUTTON: 'charge-button',
  RETURN_BUTTON: 'coin-return-button',
  PRODUCT_ITEM: 'product-purchase-item',
  PRODUCT_NAME: 'product-purchase-name',
  PRODUCT_PRICE: 'product-purchase-price',
  PRODUCT_QUANT: 'product-purchase-quantity',
  PURCHASE_BUTTON: 'purchase-button',
  COIN_QUANT: unit => `coin-${unit}-quantity`,
};

export const SELECTOR = {
  VENDING_MACHINE_CHARGE_INPUT: `#${MACHINE_ELEMENT.CHARGE_INPUT}`,
  PRODUCT_NAME_INPUT: `#${PRODUCT_ELEMENT.NAME_INPUT}`,
  PRODUCT_PRICE_INPUT: `#${PRODUCT_ELEMENT.PRICE_INPUT}`,
  PRODUCT_QUANT_INPUT: `#${PRODUCT_ELEMENT.QUANT_INPUT}`,
  CHARGE_INPUT: `#${PURCHASE_ELEMENT.CHARGE_INPUT}`,
  PURCHASE_ITEM: `.${PURCHASE_ELEMENT.PRODUCT_ITEM}`,
  PURCHASE_NAME: `.${PURCHASE_ELEMENT.PRODUCT_NAME}`,
  PURCHASE_PRICE: `.${PURCHASE_ELEMENT.PRODUCT_PRICE}`,
};

export const RULE = {
  MINIMUN_PRICE: 100,
  DIVISIBLE_BY: 10,
};

export const COIN_UNITS = [500, 100, 50, 10];

export const DEFAULT_VALUES = {
  CHANGES: 0,
  CHARGED_MONEY: 0,
  PRODUCTS: [],
  COINS: () => convertArrayToObjectKeys(COIN_UNITS),
};

export const MENU_TYPE = {
  [MENU_ELEMENT.PURCHASE]: 'PRODUCT_PURCHASE',
  [MENU_ELEMENT.MACHINE]: 'MACHINE_MANAGEMENT',
  [MENU_ELEMENT.PRODUCT]: 'PRODUCT_MANAGEMENT',
};

export const MENU = {
  PRODUCT_PURCHASE: 'PRODUCT_PURCHASE',
  MACHINE_MANAGEMENT: 'MACHINE_MANAGEMENT',
  PRODUCT_MANAGEMENT: 'PRODUCT_MANAGEMENT',
};

export const MESSAGE = {
  ASK_CHANGE_PRICE: '이미 존재하는 상품입니다. 가격을 변경하시겠습니까?',
  INVALID_PRODUCT: '상품을 추가할 수 없습니다.',
  INVALID_PRICE: `최소가격은 ${RULE.MINIMUN_PRICE}원이며, ${RULE.DIVISIBLE_BY}원 단위로 나누어떨어져야 합니다.`,
  INVALID_CHARGING_CHANGES: `충전가능한 금액은 최소 ${RULE.DIVISIBLE_BY}원 단위로 나누어 떨어져야 합니다.`,
  INVALID_CHARGING_MONEY: `투입 가능한 금액은 ${RULE.DIVISIBLE_BY}원 단위로 나누어 떨어져야 합니다.`,
  INVALID_RETURN_REQUEST: '반환할 금액이 없습니다.',
  NOT_ENOUGH_CHANGES: '자판기에 잔돈이 없습니다! 관리자를 부르세요!',
};

export const REDUCER_RESULT = {
  SUCCESS: (data = null) => {
    return { SUCCESS: true, data, error: null };
  },
  FAIL: error => {
    return { SUCCESS: false, error };
  },
};
