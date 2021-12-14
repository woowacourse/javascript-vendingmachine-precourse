import { VENDING_MACHINE_CHARGE_DATA } from '../constants.js';
import { isEmpty, isInValidInteger, isNotDividedBy10, isSameOrLessZero } from './common.js';

const showErrorMessage = (message) => {
  alert(message);
  return false;
};

export const isValidVendingMachineChargeData = (vendingMachineChargeInput) => {
  if (isEmpty(vendingMachineChargeInput)) {
    return showErrorMessage(VENDING_MACHINE_CHARGE_DATA.EMPTY_ERROR_MESSAGE);
  }

  if (isInValidInteger(vendingMachineChargeInput)) {
    return showErrorMessage(VENDING_MACHINE_CHARGE_DATA.TYPE_ERROR_MESSAGE);
  }

  if (isSameOrLessZero(vendingMachineChargeInput)) {
    return showErrorMessage(VENDING_MACHINE_CHARGE_DATA.RANGE_ERROR_MESSAGE);
  }

  if (isNotDividedBy10(vendingMachineChargeInput)) {
    return showErrorMessage(VENDING_MACHINE_CHARGE_DATA.DIVIDED_ERROR_MESSAGE);
  }

  return true;
};
