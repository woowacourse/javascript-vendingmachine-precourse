import { ERROR } from './constants.js';
import { default as UT } from './utils.js';

const validators = {
  isValidProductName: string => {
    if (UT.isBlank(string)) return alert(ERROR.PRODUCT_NAME_BLANK_SUBMIT);

    return true;
  },
};

export default validators;
