import {
  KEY_PRODUCT_NAME,
  KEY_PRODUCT_PRICE,
  KEY_PRODUCT_QUANTITY,
  DICT_KEY_PRODUCT,
} from '../../../const.js';

// ================= [ input 태그 관리하는 KEY 상수 ] =========================
export const KEY_INPUT_NAME = KEY_PRODUCT_NAME;
export const KEY_INPUT_PRICE = KEY_PRODUCT_PRICE;
export const KEY_INPUT_QUANTITY = KEY_PRODUCT_QUANTITY;

export const LIST_KEY_INPUT = [
  KEY_INPUT_NAME,
  KEY_INPUT_PRICE,
  KEY_INPUT_QUANTITY,
];

// =================== [ input 태그 id 상수 ] ===============================
const ID_PREFIX = 'product';

const getInputIdByKey = (inputKey) => `${ID_PREFIX}-${inputKey}-input`;

export const DICT_ID_INPUT = LIST_KEY_INPUT.reduce(
  (acc, cur) => ({ ...acc, [cur]: getInputIdByKey(cur) }),
  {}
);

// =================== [ input 태그 type 상수 ] ===============================

export const DICT_TYPE_INPUT = {
  [KEY_INPUT_NAME]: 'text',
  [KEY_INPUT_PRICE]: 'number',
  [KEY_INPUT_QUANTITY]: 'number',
};

// =================== [ input 태그 placeholder 상수 ] ===============================
export const DICT_PLACEHOLDER_INPUT = { ...DICT_KEY_PRODUCT };

// =================== 기타 상수 ======================================================
export const ID_FORM_ADD = `${ID_PREFIX}-add-form`;
export const ID_BUTTON_ADD = `${ID_PREFIX}-add-button`;
export const TEXT_BUTTON_ADD = '추가하기';
