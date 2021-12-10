import { ERROR } from './constants.js';
import { default as UT } from './utils.js';

const validators = {
  isValidProductName: string => {
    if (UT.isBlank(string)) return alert(ERROR.PRODUCT_NAME_BLANK_SUBMIT);
    if (UT.isIncludeSpace(string)) return alert(ERROR.PRODUCT_NAME_INCLUDE_SPACE);
    if (UT.isDuplacted(string)) return alert(ERROR.PRODUCT_NAME_DUPLICATED);

    return true;
  },

  isValidProductPrice: string => {
    if (UT.isBlank(string)) return alert(ERROR.PRODUCT_PRICE_BLANK_SUBMIT);
    if (UT.hasSpecial(string)) return alert(ERROR.PRODUCT_PRICE_INCLUDE_SPECIAL);
    if (UT.isUnderHundred(string)) return alert(ERROR.PRODUCT_PRICE_UNDER_HUNDRED);
    if (UT.isNotTenMultiple(string)) return alert(ERROR.PRODUCT_PRICE_NOT_TEN_MULTIPLE);

    return true;
  },

  isValidProductQuantity: string => {
    if (UT.isBlank(string)) return alert(ERROR.PRODUCT_QUANTITY_BLANK_SUBMIT);
    if (UT.hasSpecial(string)) return alert(ERROR.PRODUCT_QUANTITY_INCLUDE_SPECIAL);
    if (UT.isZero(string)) return alert(ERROR.PRODUCT_QUANTITY_NOT_POSIVITE_INT);

    return true;
  },
};

export default validators;
