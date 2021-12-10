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

const isDuplicate = (value, items) => !isNull(items.find(({ name }) => name === value));

const checkedMinimum = (number, placeholder) => {
  if (!isEquals(placeholder, PRICE_INPUT)) return number;

  if (number < MINIMUN_CHARGING) return setErrorMessage('minimumError', placeholder);

  return number;
};

const checkedDivisble = (number, placeholder) => {
  if (!isIncludes(placeholder, [PRICE_INPUT, CHARGE_INPUT])) return number;

  if (!isEquals(number % DIVIDE_CHARGING, ZERO))
    return setErrorMessage('InDivisibleError', placeholder);

  return number;
};

const numbersValidate = (value, placeholder) => {
  const parsed = isPositiveInteger(value, placeholder);
  if (isEmpty(parsed)) return EMPTY;
  if (isEmpty(checkedMinimum(parsed, placeholder))) return EMPTY;
  if (isEmpty(checkedDivisble(parsed, placeholder))) return EMPTY;
  return parsed;
};

export const isValidate = ({ type, placeholder, value }, items = []) => {
  if (type === 'number') return numbersValidate(value, placeholder);

  const trimedValue = value.trim();
  if (isEmpty(trimedValue)) return setErrorMessage('notDefined', placeholder);
  if (isDuplicate(value, items)) return setErrorMessage('dupError', `${placeholder}: [${value}]`);
  return value;
};

export const purchaseValidate = (values, name) =>
  Object.keys(values).every(key => {
    if (key === 'quantity' && values[key] < 1) return setErrorMessage('isSoldOutError', name);
    if (key === 'changes' && values[key] < 0) return setErrorMessage('isExpensiveError', name);
    return true;
  });

export const isValidateInput = (targets, storageItem) =>
  Array.from(targets).reduce((result, target, _, array) => {
    if (!isValidate(target, storageItem)) {
      array.splice(1);
      return [...result];
    }
    return [...result, target];
  }, []);
