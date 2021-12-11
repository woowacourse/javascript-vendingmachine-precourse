import {
  COINS_PRICE_MIN,
  PRODUCT_PRICE_MIN,
  PRODUCT_PRICE_MOD,
} from '../constants/index.js';

export const INVALID_LOCALSTORAGE_DATA = 'INVALID_LOCALSTORAGE_DATA';
export const INPUT_EMPTY = 'INPUT_EMPTY';
export const INPUT_NO_NATURAL_NUMBER = 'INPUT_NO_NATURAL_NUMBER';
export const INPUT_PRODUCT_MANAGE_PRICE_RULE_VIOLATED =
  'INPUT_PRODUCT_MANAGE_PRICE_RULE_VIOLATED';
export const INPUT_CHARGE_AMOUNT_RULE_VIOLATED =
  'INPUT_CHARGE_AMOUNT_RULE_VIOLATED';
export const BUTTON_PRODUCT_PURCHASE_NOT_ENOUGH_CHARGE =
  'BUTTON_PRODUCT_PURCHASE_NOT_ENOUGH_CHARGE';

const DEFAULT_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다.';

const errorMessagesRecord = {
  [INVALID_LOCALSTORAGE_DATA]: '잘못된 데이터를 불러왔습니다.',
  [INPUT_EMPTY]: '값이 입력되지 않았습니다.',
  [INPUT_NO_NATURAL_NUMBER]: `입력된 값이 자연수가 아닙니다`,
  [INPUT_PRODUCT_MANAGE_PRICE_RULE_VIOLATED]: `상품 가격은 ${PRODUCT_PRICE_MIN}원 이상이어야 하고, ${PRODUCT_PRICE_MOD}원으로 나누어 떨어져야 합니다.`,
  [INPUT_CHARGE_AMOUNT_RULE_VIOLATED]: `입력 금액은 ${COINS_PRICE_MIN}원으로 나누어 떨어져야 합니다.`,
  [BUTTON_PRODUCT_PURCHASE_NOT_ENOUGH_CHARGE]: `투입 금액이 부족합니다.`,
};

export const handleError = (errorType) => {
  const errorMessage = errorMessagesRecord[errorType] || DEFAULT_ERROR_MESSAGE;

  // eslint-disable-next-line no-alert
  window.alert(errorMessage);
};
