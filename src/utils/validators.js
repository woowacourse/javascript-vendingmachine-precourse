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
    if (UT.isUnder(string, 100)) return alert(ERROR.PRODUCT_PRICE_UNDER_HUNDRED);
    if (UT.isNotTenMultiple(string)) return alert(ERROR.PRODUCT_PRICE_NOT_TEN_MULTIPLE);

    return true;
  },

  isValidProductQuantity: string => {
    if (UT.isBlank(string)) return alert(ERROR.PRODUCT_QUANTITY_BLANK_SUBMIT);
    if (UT.hasSpecial(string)) return alert(ERROR.PRODUCT_QUANTITY_INCLUDE_SPECIAL);
    if (UT.isZero(string)) return alert(ERROR.PRODUCT_QUANTITY_NOT_POSIVITE_INT);

    return true;
  },

  isValidCharge: string => {
    if (UT.isBlank(string)) return alert(ERROR.CHARGE_BLANK_SUBMIT);
    if (UT.hasSpecial(string)) return alert(ERROR.CHARGE_INCLUDE_SPECIAL);
    if (UT.isUnder(string, 10)) return alert(ERROR.CHARGE_UNDER_TEN);
    if (UT.isNotTenMultiple(string)) return alert(ERROR.CHARGE_NOT_TEN_MULTIPLE);

    return true;
  },
};

export default validators;
