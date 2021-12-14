import { NUMBER, ERROR_MESSAGE } from '../utils/constant.js';

export default class ValidationInputCoin {
  constructor(render, element) {
    this.render = render;
    this.$targetElement = document.querySelector(element);
  }

  getInput = () => Number(this.$targetElement.value);

  isBlank = ($element) => {
    if ($element.value.length < NUMBER.BLANK_CHECK_LENGTH) {
      this.render.alertMessage(ERROR_MESSAGE.PRODUCT_BLANK($element.placeholder));
      this.render.inputFocus($element);

      return true;
    }

    return false;
  };

  isPositiveInteger = ($element) => {
    const productNumber = Number($element.value);
    if (!Number.isInteger(productNumber) || productNumber <= NUMBER.ZERO) {
      this.render.alertMessage(ERROR_MESSAGE.PRODUCT_POSITIVE_INTEGER);
      this.render.inputFocus($element);

      return false;
    }

    return true;
  };

  isUnitOfTen = () => {
    if (Number(this.$targetElement.value) % NUMBER.UNIT_CHECK_TEN !== NUMBER.ZERO) {
      this.render.alertMessage(ERROR_MESSAGE.UNIT_OF_TEN(this.$targetElement.placeholder));
      this.render.inputFocus(this.$targetElement);

      return false;
    }

    return true;
  };

  isValidInput = () =>
    !this.isBlank(this.$targetElement) && this.isPositiveInteger(this.$targetElement) && this.isUnitOfTen();
}
