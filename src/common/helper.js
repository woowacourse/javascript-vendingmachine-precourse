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
 * DOM 객체를 하나 선택합니다.
 *
 * @param {string} selector
 * @param {HTMLElement | Document} target
 * @returns {Node}
 */
export const $ = (selector, target = document) => target.querySelector(selector);

/**
 * DOM 객체를 여러 개 선택합니다.
 *
 * @param {string} selector
 * @param {HTMLElement | Document} target
 * @returns {NodeList}
 */
export const $all = (selector, target = document) => target.querySelectorAll(selector);

/**
 * 타겟의 형제 DOM 객체를 선택합니다.
 *
 * @param {string} selector
 * @param {HTMLElement | Document} target
 * @returns {Node}
 */
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
 * @param {string} description
 * @returns {string}
 */
export const setErrorMessage = (type, description = '') => {
  alert(`${description}${ERROR_MESSAGES[type]}`);
  return EMPTY;
};

/**
 * 값이 null인지 검사합니다.
 *
 * @param {string|number} value
 * @returns {boolean}
 */
export const isNull = value => value === null || value === undefined;

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
 * 배열에 값이 포함 되어 있는지 검사합니다.
 *
 * @param {number|string} value
 * @param {any[]} items
 * @returns {boolean}
 */
export const isIncludes = (value, items) => items.includes(value);

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

/**
 * 내림 값을 반환합니다.
 *
 * @param {number} value
 * @returns
 */
export const roundDown = value => Math.floor(value / +DIVIDE_CHARGING) * +DIVIDE_CHARGING;

/**
 * EventBus의 모듈 등록 시 사용할 key를 생성합니다.
 *
 * @param {string} elements
 * @param {string} selector
 * @param {string} type
 * @returns
 */
export const generateKey = (elements, selector, type) => `${elements}-${selector}-${type}`;

/**
 * 잔돈을 계산합니다.
 *
 * @param {number} remainCount
 * @param {number} changes
 * @param {number} coin
 * @returns
 */
export const getChangesCount = (remainCount, changes, coin) => {
  if (coin > changes) return ZERO;
  if (remainCount < 1) return ZERO;
  const count = Math.floor(changes / coin);
  return remainCount - count < ZERO ? remainCount : count;
};

/**
 * 상품 구매에 따른 잔돈과 수량을 반환합니다.
 *
 * @param {object} param
 * @param {object} tabData
 * @returns
 */
export const calculateProduct = ({ name, quantity, price }, tabData) => [
  tabData[PRODUCT_ADD].map(item => {
    if (isEquals(item.name, name)) return { ...item, quantity: quantity - 1 };
    return item;
  }),
  +tabData[CHARGE_AMOUNT] - +price,
];

/**
 * 자식 HTMLInputElement 태그를 모두 반환합니다.
 *
 * @param {string} selector
 * @returns
 */
export const getChildInput = selector =>
  Array.from($(selector).childNodes).reduce((result, node) => {
    if (node instanceof HTMLInputElement) return [...result, node];
    return result;
  }, []);

/**
 * 인자로 넘겨받은 HTMLInputElement[]을 비웁니다.
 *
 * @param {HTMLInputElement[]} targets
 */
export const clearInput = targets => {
  const copied = Array.from(targets);
  copied.forEach((_, index) => {
    copied[index].value = EMPTY;
  });
};

/**
 * 잔돈 충전 시 해당 코인의 개수를 증가시킵니다.
 *
 * @param {number} charge
 * @param {number} unit
 * @param {object[]} item
 * @returns
 */
export const getParsedCharges = (charge, unit, item) => [
  charge,
  item.map(({ description, count }) => {
    if (isEquals(description, unit)) return { description, count: count + 1 };
    return { description, count };
  }),
];

/**
 * 탐욕법을 적용하여 잔돈을 교환합니다.
 *
 * @param {number} changes
 * @param {object[]} charges
 * @returns
 */
export const coinExchange = (changes, charges) => {
  const copied = [...charges];
  let leftChanges = changes;
  let index = ZERO;
  while (leftChanges > ZERO && index < charges.length) {
    const { description, count } = copied[index];
    const changesCount = getChangesCount(count, leftChanges, +description);
    if (changesCount <= ZERO) index += 1;
    else {
      leftChanges -= +description * changesCount;
      copied[index] = { ...copied[index], count: count - changesCount };
    }
  }
  return [copied, leftChanges];
};

/**
 * 상품 관리 탭: 상품을 추가합니다.
 *
 * @param {HTMLInputElement[]} elements
 * @returns
 */
export const addItems = elements => {
  const [{ value: name }, { value: price }, { value: quantity }] = elements;
  return { name, price, quantity };
};

/**
 * 잔돈 충전 탭: 자판기에 잔돈을 충전합니다.
 *
 * @param {object} storageItem
 * @param {HTMLInputElement} element
 * @returns
 */
export const charging = (storageItem, element) => {
  let items = [...storageItem];
  const [{ value }] = element;
  let parsed = roundDown(value);
  while (parsed > ZERO) {
    const pickUnit = pickNumberInList(CHARGE_UNIT);
    const restCharge = parsed - pickUnit;
    if (restCharge >= ZERO) [parsed, items] = getParsedCharges(restCharge, pickUnit, items);
  }
  return items;
};

/**
 * 상품 구매 탭: 금액을 투입합니다.
 *
 * @param {object} storageItem
 * @param {HTMLInputElement} elements
 * @returns
 */
export const purchase = (storageItem, elements) => {
  const [{ value: charge }] = elements;
  const currentAmount = storageItem[CHARGE_AMOUNT] || ZERO;
  return +charge + +currentAmount;
};

/**
 * 상품 구매 탭: 상품을 구매하고 그 결과를 적용합니다.
 *
 * @param {HTMLTableRowElement} element
 * @param {object} tabData
 * @returns
 */
export const applyProduct = (element, tabData) => {
  const { textContent: name } = $('[data-product-name]', $closest(element, 'tr'));
  const { textContent: price } = $('[data-product-price]', $closest(element, 'tr'));
  const { textContent: quantity } = $('[data-product-quantity]', $closest(element, 'tr'));

  const productInto = { name, quantity, price };
  const [product, changes] = calculateProduct(productInto, tabData);

  return { name, quantity, product, changes };
};

/**
 * Storage에 수정된 아이템을 반영합니다.
 */
export const setStorage = {
  [PRODUCT_ADD]: (storage, elements) => storage.add(PRODUCT_ADD, addItems(elements)),
  [MACHINE_MANAGE]: (storage, elements, item) =>
    storage.create(MACHINE_MANAGE, charging(item, elements)),
  [PURCHASE_MENU]: (storage, elements, item) =>
    storage.update(PURCHASE_MENU, CHARGE_AMOUNT, purchase(item, elements)),
};
