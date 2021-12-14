import {
  DIVIDE_CHARGING,
  MINIMUN_CHARGING,
  ZERO,
  ADDITIONAL_CONDITION,
  EMPTY,
} from '../constants/index.js';
import {
  setErrorMessage,
  isEmpty,
  isIncludes,
  isPositiveInteger,
  isEquals,
  isNull,
} from './helper.js';

const { PRICE_INPUT, CHARGE_INPUT } = ADDITIONAL_CONDITION;

/**
 * 중복 여부를 검사합니다.
 *
 * @param {string} value
 * @param {any[]} items
 * @returns {boolean}
 */
const isDuplicate = (value, items) => !isNull(items.find(({ name }) => name === value));

/**
 * 최소 값을 검사합니다.
 *
 * @param {number} number
 * @param {string} placeholder
 * @returns {number}
 */
const checkedMinimum = (number, placeholder) => {
  if (!isEquals(placeholder, PRICE_INPUT)) return number;
  if (number < MINIMUN_CHARGING) return setErrorMessage('minimumError', placeholder);

  return number;
};

/**
 * 나누기 값을 검사합니다.
 *
 * @param {number} number
 * @param {string} placeholder
 * @returns {number}
 */
const checkedDivisble = (number, placeholder) => {
  if (!isIncludes(placeholder, [PRICE_INPUT, CHARGE_INPUT])) return number;
  if (!isEquals(number % DIVIDE_CHARGING, ZERO))
    return setErrorMessage('InDivisibleError', placeholder);

  return number;
};

/**
 * 숫자형에 대한 유효성을 검사합니다.
 *
 * @param {number} value
 * @param {string} placeholder
 * @returns {number}
 */
const numbersValidate = (value, placeholder) => {
  const parsed = isPositiveInteger(value, placeholder);
  if (isEmpty(parsed)) return EMPTY;
  if (isEmpty(checkedMinimum(parsed, placeholder))) return EMPTY;
  if (isEmpty(checkedDivisble(parsed, placeholder))) return EMPTY;
  return parsed;
};

/**
 * 모든 입력에 대한 유효성을 검사합니다.
 *
 * @param {object} param
 * @param {any[]} items
 * @returns {boolean}
 */
export const isValidate = ({ type, placeholder, value }, items = []) => {
  if (type === 'number') return numbersValidate(value, placeholder);
  const trimedValue = value.trim();
  if (isEmpty(trimedValue)) return setErrorMessage('notDefined', placeholder);
  if (isDuplicate(value, items)) return setErrorMessage('dupError', `${placeholder}: [${value}]`);
  return value;
};

/**
 * 상품 구매 시 유효성을 검사합니다.
 *
 * @param {object[]} values
 * @param {string} name
 * @returns
 */
export const purchaseValidate = (values, name) =>
  Object.keys(values).every(key => {
    if (key === 'quantity' && values[key] < 1) return setErrorMessage('isSoldOutError', name);
    if (key === 'changes' && values[key] < ZERO) return setErrorMessage('isExpensiveError', name);
    return true;
  });

/**
 * input에 대한 유효성을 검사하고, 옳은 input만 반환합니다.
 *
 * @param {HTMLInputElement[]} targets
 * @param {object} items
 * @returns {HTMLInputElement[]}
 */
export const isValidateInput = (targets, items) =>
  Array.from(targets).reduce((result, target, _, array) => {
    if (isValidate(target, items)) return [...result, target];
    array.splice(1);
    return result;
  }, []);

/**
 * 반환된 잔돈이 존재하는지 확인합니다.
 *
 * @param {object[]} changes
 * @returns
 */
export const hasChangesCoin = changes => {
  const result = [...new Set(changes.map(({ count }) => count))];
  if (isEquals(result.length, 1) && isEquals(result[ZERO], ZERO))
    return setErrorMessage('hasNoReturnCoin');
  return true;
};
