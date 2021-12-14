import { CHARGE_DATA } from '../constants.js';
import { isEmpty, isInValidInteger, isNotDividedBy10, isSameOrLessZero } from './common.js';

const showErrorMessage = (message) => {
  alert(message);
  return false;
};

export const isValidChargeData = (chargeInput) => {
  if (isEmpty(chargeInput)) {
    return showErrorMessage(CHARGE_DATA.EMPTY_ERROR_MESSAGE);
  }
  if (isInValidInteger(chargeInput)) {
    return showErrorMessage(CHARGE_DATA.TYPE_ERROR_MESSAGE);
  }
  if (isSameOrLessZero(chargeInput)) {
    return showErrorMessage(CHARGE_DATA.RANGE_ERROR_MESSAGE);
  }
  if (isNotDividedBy10(chargeInput)) {
    return showErrorMessage(CHARGE_DATA.DIVIDED_ERROR_MESSAGE);
  }
  return true;
};
