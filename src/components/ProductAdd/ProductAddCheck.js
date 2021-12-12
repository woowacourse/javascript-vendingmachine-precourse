import {
  ZERO,
  NOT_EXIST,
  MIN_PRODUCT_PRICE,
  MIN_PRODUCT_QUANTITY,
  DIVISOR_NUMBER,
} from '../../utils/constants.js';

export default class ProductAddCheck {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  checkEmpty() {
    return this.name !== '' && this.price !== '' && this.quantity !== '';
  }

  checkName() {
    return this.name.indexOf(' ') === NOT_EXIST;
  }

  checkPrice() {
    return (
      this.price >= MIN_PRODUCT_PRICE && this.price % DIVISOR_NUMBER === ZERO
    );
  }

  checkQuantity() {
    return (
      this.quantity >= MIN_PRODUCT_QUANTITY &&
      this.quantity.indexOf('.') === NOT_EXIST
    );
  }

  checkAll() {
    return (
      this.checkEmpty() &&
      this.checkName() &&
      this.checkPrice() &&
      this.checkQuantity()
    );
  }
}
