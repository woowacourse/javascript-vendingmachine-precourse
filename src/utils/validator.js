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
