import { EMPTY, ERROR_MESSAGES, DIVIDE_CHARGING, ZERO } from '../constants/index.js';

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
 * 이벤트 등록
 *
 * @param {HTMLElement} $element
 * @param {string} eventType
 * @param {function} listenser
 */
export const addEvent = ($element, eventType, listenser) => {
  $element.addEventListener(eventType, listenser);
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

/**
 * 내림 값을 반환합니다.
 *
 * @param {number} value
 * @returns
 */
export const roundDown = value => Math.floor(value / +DIVIDE_CHARGING) * +DIVIDE_CHARGING;

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
