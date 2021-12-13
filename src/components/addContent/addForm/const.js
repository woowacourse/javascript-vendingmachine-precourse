import {
  KEY_PRODUCT_NAME,
  KEY_PRODUCT_PRICE,
  KEY_PRODUCT_QUANTITY,
  DICT_KEY_PRODUCT_KOR,
} from '../../const.js';

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

export const DICT_ID_INPUT = LIST_KEY_INPUT.reduce(
  (acc, cur) => ({ ...acc, [cur]: `${ID_PREFIX}-${cur}-input` }),
  {}
);

// =================== [ input 태그 type 상수 ] ===============================

export const DICT_TYPE_INPUT = {
  [KEY_INPUT_NAME]: 'text',
  [KEY_INPUT_PRICE]: 'number',
  [KEY_INPUT_QUANTITY]: 'number',
};

// =================== [ input 태그 placeholder 상수 ] ===============================
export const DICT_PLACEHOLDER_INPUT = { ...DICT_KEY_PRODUCT_KOR };

// =================== 기타 상수 ======================================================
export const ID_FORM_ADD = `${ID_PREFIX}-add-form`;
export const ID_BUTTON_ADD = `${ID_PREFIX}-add-button`;
export const TEXT_BUTTON_ADD = '추가하기';

export const ERROR_INVALID_NAME = `상품 이름이 잘못되었습니다. 다음 사항에 해당하는지 살펴보세요.
1) 이미 있는 상품의 이름인가
2) 공백 문자가 포함되어 있는가
3) 숫자가 포함되어 있는가
4) 특수 문자가 포함되어 있는가`;
