import { isEmpty, isInValidInteger, isNotDividedBy10, isSameOrLessZero } from './common.js';

export const isValidChargeData = (chargeInput) => {
  if (isEmpty(chargeInput)) {
    alert('투입할 금액을 입력해주세요.  ex) 3000');
    return false;
  }

  if (isInValidInteger(chargeInput)) {
    alert('투입할 금액은 소수 값을 가지고 있어서는 안됩니다.  ex) 3000');
    return false;
  }

  if (isSameOrLessZero(chargeInput)) {
    alert('투입할 금액은 0보다 큰 값이어야 합니다.  ex) 3000');
    return false;
  }

  if (isNotDividedBy10(chargeInput)) {
    alert('투입할 금액은 10으로 나누어 떨어져야 합니다.  ex) 3000');
    return false;
  }

  return true;
};
