// ================= [ input 태그 관리하는 KEY 상수 ] =========================
const KEY_INPUT_NAME = 'name';
const KEY_INPUT_PRICE = 'price';
const KEY_INPUT_QUANTITY = 'quantity';

export const KEY_INPUTS = [KEY_INPUT_NAME, KEY_INPUT_PRICE, KEY_INPUT_QUANTITY];

// =================== [ input 태그 id 상수 ] ===============================
const ID_PREFIX = 'product';

const getInputIdByKey = (inputKey) => `${ID_PREFIX}-${inputKey}-input`;

export const DICT_ID_INPUT = KEY_INPUTS.reduce(
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
export const DICT_PLACEHOLDER_INPUT = {
  [KEY_INPUT_NAME]: '상품명',
  [KEY_INPUT_PRICE]: '가격',
  [KEY_INPUT_QUANTITY]: '수량',
};

// =================== 기타 상수 ======================================================
export const ID_FORM_ADD = `${ID_PREFIX}-add-form`;

export const ID_BUTTON_ADD = `${ID_PREFIX}-add-button`;
export const ACTION_ADD = 'onAddButtonClick';
export const TEXT_BUTTON_ADD = '추가하기';

export const HEADING_ADD = '상품 추가하기';
