import { CHARGE_MINIMUM, DIVIDE_MININUM } from '../constants/index.js';

const isNonEmpty = value => value !== '';
const isNumber = value => !Number.isNaN(value);
const isValidLength = (value, size) => value.length === size;
const isPositiveNumber = number => number > 0 && Number.isInteger(number);
const isDuplicate = (value, items) => {
  if (items.length == 0) return false;
  return items.find(name => value === name);
};
const isMinUpper = number => number < CHARGE_MINIMUM;
const isDivisible = number => number % DIVIDE_MININUM !== 0;
const hasSpace = value => removeSpace(value).length !== value.length;
const removeSpace = text => text.replace(/ /gi, '');

export const isValidProduct = ({ name, price, quantity }, items) => {
  price = Number(price);
  quantity = Number(quantity);
  if (!isNonEmpty(name)) return alert('상품명을 입력해주세요.');
  if (!isNonEmpty(price)) return alert('가격을 입력해주세요.');
  if (!isNonEmpty(quantity)) return alert('수량을 입력해주세요.');
  if (isDuplicate(name, items)) return alert('중복된 상품명이 있습니다.');
  if (hasSpace(name)) return alert('상품명에는 공백이 없어야합니다.');
  if (isDivisible(price)) return alert(`상품 가격은 ${DIVIDE_MININUM}으로 나눠떨어져야 합니다.`);
  if (isMinUpper(price)) return alert(`상품 가격은 ${CHARGE_MINIMUM}보다 큰 수여야 합니다.`);
  if (!isPositiveNumber(quantity)) return alert(`수량은 양의 정수 값이어야 합니다.`);
  return true;
};

// export const isInvalid = (value, size) => {
//   if (!isValidLength(value, size)) {
//     return ALERT_MESSAGE['SIZE_ERROR'];
//   }
//   if (isNaN(value)) {
//     return ALERT_MESSAGE['TYPE_ERROR'];
//   }
//   if (isValueDuplicate(value)) {
//     return ALERT_MESSAGE['DUPLICATE_ERROR'];
//   }

//   return false;
// };
