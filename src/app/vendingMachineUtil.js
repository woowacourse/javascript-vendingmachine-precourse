import { DOM, ERROR_MESSAGE } from '../lib/constants.js';
import {
  hasSomeEmptyString,
  isNumberStringIsNegative,
  isNumberStringNotDivideBy10,
} from '../lib/utils.js';

/** Util */
class VendingMachineUtil {
  static isValidProduct(inputsValue) {
    if (hasSomeEmptyString(Object.values(inputsValue))) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_HAS_EMPTY_VALUE);
    }
    if (isNumberStringIsNegative(inputsValue[DOM.PRODUCT_PRICE_INPUT])) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_PRICE_IS_NEGATIVE_NUMBER);
    }
    if (isNumberStringIsNegative(inputsValue[DOM.PRODUCT_QUANTITY_INPUT])) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_QUANTITY_IS_NEGATIVE_NUMBER);
    }
    if (isNumberStringNotDivideBy10(inputsValue[DOM.PRODUCT_PRICE_INPUT])) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_PRICE_DIVIDE_BY_10);
    }

    return true;
  }
}
export default VendingMachineUtil;
