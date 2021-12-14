import { isEmpty, isInValidInteger, isNotDividedBy10, isSameOrLessZero } from './common.js';

export const isValidVendingMachineChargeData = (vendingMachineChargeInput) => {
  if (isEmpty(vendingMachineChargeInput)) {
    alert('충전할 금액을 입력해주세요.  ex) 450');
    return false;
  }

  if (isInValidInteger(vendingMachineChargeInput)) {
    alert('충전할 금액은 소수 값을 가지고 있어서는 안됩니다.  ex) 450');
    return false;
  }

  if (isSameOrLessZero(vendingMachineChargeInput)) {
    alert('충전할 금액은 0보다 큰 값이어야 합니다.  ex) 450');
    return false;
  }

  if (isNotDividedBy10(vendingMachineChargeInput)) {
    alert('충전할 금액은 10으로 나누어 떨어져야 합니다.  ex) 450');
    return false;
  }

  return true;
};
