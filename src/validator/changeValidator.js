import { ALERT_MESSAGE, CHANGE } from '../constants/index.js';

class ChangeValidator {
  static isChangeInputLessThan10(changeInput) {
    if (changeInput < CHANGE.MINIMUM_INPUT) {
      alert(ALERT_MESSAGE.CHANGE_INPUT_LESS_THAN_10);
      return true;
    }
  }

  static isChangeInputDoesNotDivideBy10(changeInput) {
    if (changeInput % CHANGE.DIVISIBLE_NUMBER !== CHANGE.REMAINDER_IS_0) {
      alert(ALERT_MESSAGE.CHANGE_INPUT_DOES_NOT_DIVIDED_BY_10);
      return true;
    }
  }

  static isInvalidChangeInput(changeInput) {
    if (this.isChangeInputLessThan10(changeInput)) return true;
    if (this.isChangeInputDoesNotDivideBy10(changeInput)) return true;
    return false;
  }
}

export default ChangeValidator;
