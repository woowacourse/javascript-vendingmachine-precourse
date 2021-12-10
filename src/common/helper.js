import {
  EMPTY,
  ERROR_MESSAGES,
  DIVIDE_CHARGING,
  ZERO,
  PRODUCT_ADD,
  CHARGE_AMOUNT,
  CHARGE_UNIT,
  MACHINE_MANAGE,
  PURCHASE_MENU,
} from '../constants/index.js';

/* eslint-disable no-undef */
const { pickNumberInList } = MissionUtils.Random;

/**
 * 값이 null인지 검사합니다.
 *
 * @param {string|number} value
 * @returns {boolean}
 */
export const isNull = value => value === null || value === undefined;

export const $ = (selector, target = document) => target.querySelector(selector);

export const $all = (selector, target = document) => target.querySelectorAll(selector);

export const $closest = (element, selector) => {
  if (element.nodeType === 9) return false;

  let $element = element;
  while ($element) {
    if (typeof $element.matches === 'function' && $element.matches(selector)) return $element;

    $element = $element.parentNode;
  }

  return false;
};

/**
 * alert에 출력할 에러 메세지를 설정합니다.
 *
 * @param {string} type
 * @returns {undefined} : Falsy
 */
export const setErrorMessage = (type, description = '') => {
  alert(`${description}${ERROR_MESSAGES[type]}`);
  return EMPTY;
};

/**
 * 첫 번째 인자와 두 번째 인자의 값이 같은지 검사합니다.
 *
 * @param {string|number} value
 * @param {string|number} target
 * @returns {boolean}
 */
export const isEquals = (value, target) => value === target;

/**
 * 값이 비어있는지 검사합니다.
 *
 * @param {Array|number|string} value
 * @returns {boolean}
 */
export const isEmpty = value => {
  if (isNull(value)) return true;
  if (value instanceof Array) return value.length < 1 || value === [];
  if (typeof value === 'number') return value === ZERO;
  return value === EMPTY;
};

/**
 * 양의 정수인지 검사합니다.
 * 1. 값이 0일 수 없습니다.
 * 2. 값이 음수일 수 없습니다.
 * 3. 값이 소수일 수 없습니다.
 *
 * @param {number|string} target
 * @returns {number | ''}
 */
export const isPositiveInteger = (target, description) => {
  const parsed = +target;

  if (isEquals(parsed, ZERO)) return setErrorMessage('zeroError', description);

  if (parsed < ZERO) return setErrorMessage('negativeError', description);

  if (!isEquals(Number.isInteger(parsed), true))
    return setErrorMessage('decimalError', description);

  return parsed;
};

export const isIncludes = (value, items) => items.includes(value);

export const roundDown = value => Math.floor(value / +DIVIDE_CHARGING) * +DIVIDE_CHARGING;

export const generateKey = (elements, selector, type) => `${elements}-${selector}-${type}`;

export const getChangesCount = (remainCount, changes, coin) => {
  if (coin > changes) return ZERO;
  if (remainCount < 1) return ZERO;
  const count = Math.floor(changes / coin);
  return remainCount - count < ZERO ? remainCount : count;
};

export const calculateProduct = ({ name, quantity, price }, tabData) => [
  tabData[PRODUCT_ADD].map(item => {
    if (isEquals(item.name, name)) return { ...item, quantity: quantity - 1 };
    return item;
  }),
  +tabData[CHARGE_AMOUNT] - +price,
];

export const getChildInput = $element =>
  Array.from($element.childNodes).reduce((result, node) => {
    if (node instanceof HTMLInputElement) return [...result, node];
    return result;
  }, []);

export const clearInput = targets => {
  const copied = Array.from(targets);
  copied.forEach((_, index) => {
    copied[index].value = EMPTY;
  });
};

export const getParsedItem = (charge, unit, item) => [
  charge,
  item.map(({ description, count }) => {
    if (isEquals(description, unit)) return { description, count: count + 1 };
    return { description, count };
  }),
];

export const coinExchange = (changes, charges) => {
  const copied = [...charges];
  let leftChanges = changes;
  let index = 0;
  while (leftChanges > 0 && index < charges.length) {
    const { description, count } = copied[index];
    const changesCount = getChangesCount(count, leftChanges, +description);
    if (changesCount <= 0) index += 1;
    else {
      leftChanges -= +description * changesCount;
      copied[index] = { ...copied[index], count: count - changesCount };
    }
  }
  return [copied, leftChanges];
};

export const addItems = elements => {
  const [{ value: name }, { value: price }, { value: quantity }] = elements;
  return { name, price, quantity };
};

export const charging = (storageItem, element) => {
  let items = [...storageItem];
  const [{ value }] = element;
  let parsed = roundDown(value);
  while (parsed > 0) {
    const pickUnit = pickNumberInList(CHARGE_UNIT);
    const restCharge = parsed - pickUnit;
    if (restCharge >= 0) [parsed, items] = getParsedItem(restCharge, pickUnit, items);
  }
  return items;
};

export const purchase = (storageItem, elements) => {
  const [{ value: charge }] = elements;
  const currentAmount = storageItem[CHARGE_AMOUNT] || 0;
  return +charge + +currentAmount;
};

export const setStorage = {
  [PRODUCT_ADD]: (storage, elements) => storage.add(PRODUCT_ADD, addItems(elements)),
  [MACHINE_MANAGE]: (storage, elements, item) =>
    storage.create(MACHINE_MANAGE, charging(item, elements)),
  [PURCHASE_MENU]: (storage, elements, item) =>
    storage.update(PURCHASE_MENU, CHARGE_AMOUNT, purchase(item, elements)),
};
