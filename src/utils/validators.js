import { ERROR } from './constants.js';
import { default as UT } from './utils.js';

const validators = {
  isValidProductName: string => {
    if (UT.isBlank(string)) return alert(ERROR.PRODUCT_NAME_BLANK_SUBMIT);
    if (UT.isIncludeSpace(string)) return alert(ERROR.PRODUCT_NAME_INCLUDE_SPACE);

    return true;
  },

  isValidProductPrice: string => {
    if (UT.isBlank(string)) return alert(ERROR.PRODUCT_PRICE_BLANK_SUBMIT);
  },
};

export default validators;
