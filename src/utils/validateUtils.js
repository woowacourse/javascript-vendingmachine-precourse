import { ERROR, MIN_PRICE, MIN_QUANTITY, TEN } from '../utils/constants.js';

export default class ValidateUtils {
  static checkInputName(name) {
    if (!name) {
      alert(ERROR.NO_NAME);
      return false;
    }
    return true;
  }

  static checkInputPrice(price) {
    if (price % TEN) {
      alert(ERROR.CANT_PLACE);
      return false;
    }
    if (MIN_PRICE > price) {
      alert(ERROR.MIN_PRICE);
      return false;
    }
    return true;
  }

  static checkInputQuantity(quantity) {
    if (MIN_QUANTITY > quantity) {
      alert(ERROR.MIN_QUANTITY);
      return false;
    }
    return true;
  }

  static checkInputAmount(amount) {
    if (!amount) {
      alert(ERROR.NO_AMOUNT);
      return false;
    }
    if (amount % TEN) {
      alert(ERROR.CANT_PLACE);
      return false;
    }
    if (ZERO >= amount) {
      alert(ERROR.MIN_AMOUNT);
      return false;
    }
    return true;
  }
}
