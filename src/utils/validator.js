import { USER_INPUT_ALERT } from './constant.js';

export const ProductNameCheckMethods = [
  (value) => {
    const isAllBlank = value.trim().length === 0;
    if (isAllBlank) {
      alert(USER_INPUT_ALERT.blankNameError);
    }
    return !isAllBlank;
  },
];

export function isProductNameValid(value) {
  return ProductNameCheckMethods.every((ProductNameCheckMethod) => ProductNameCheckMethod(value));
}

export const PriceCheckMethods = [
  (value) => {
    const isOver100 = value < 100;
    if (isOver100) {
      alert(USER_INPUT_ALERT.over100Error);
    }
    return !isOver100;
  },
];

export function isPriceValid(value) {
  return PriceCheckMethods.every((PriceCheckMethod) => PriceCheckMethod(value));
}
