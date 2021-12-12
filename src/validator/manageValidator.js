import { items } from '../model/store.js';
import { ALERT_MESSAGE, PRODUCT } from '../constants/index.js';

class ManageValidator {
  static isProudctNameDuplicated(name) {
    if (items.some((item) => item.name === name)) {
      alert(ALERT_MESSAGE.PRODUCT_NAME_DUPLICATED);
      return true;
    }
  }

  static isProductNameBlank(name) {
    if (name === '') {
      alert(ALERT_MESSAGE.PRODUCT_NAME_BLANK);
      return true;
    }
  }

  static isProductPriceLessThan100(price) {
    if (price < PRODUCT.MINIMUM_PRICE) {
      alert(ALERT_MESSAGE.PRODUCT_PRICE_LESS_THAN_100);
      return true;
    }
  }

  static isProductPriceDoesNotDivideBy10(price) {
    if (price % PRODUCT.DIVISIBLE_NUMBER !== PRODUCT.REMAINDER_IS_0) {
      alert(ALERT_MESSAGE.PRODUCT_PRICE_DOES_NOT_DIVIDED_BY_10);
      return true;
    }
  }

  static isProductQuantityLessThan1(quantity) {
    if (quantity < PRODUCT.MINIMUM_QUANTITY) {
      alert(ALERT_MESSAGE.PRODUCT_QUANTITY_LESS_THAN_1);
      return true;
    }
  }

  static isProductQuantityFloat(quantity) {
    if (!Number.isInteger(quantity)) {
      alert(ALERT_MESSAGE.PRODUCT_QUANTITY_IS_FLOAT);
      return true;
    }
  }

  static isInvalidAddItemInput({ name, price, quantity }) {
    if (this.isProudctNameDuplicated(name)) return true;
    if (this.isProductNameBlank(name)) return true;
    if (this.isProductPriceLessThan100(price)) return true;
    if (this.isProductPriceDoesNotDivideBy10(price)) return true;
    if (this.isProductQuantityLessThan1(quantity)) return true;
    if (this.isProductQuantityFloat(quantity)) return true;
    return false;
  }
}

export default ManageValidator;
