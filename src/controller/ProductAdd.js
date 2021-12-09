import { DOM, ERROR_MESSAGE, NUMBER } from '../utils/constant.js';

export default class ProductAdd {
  constructor(render) {
    this.render = render;
    this.$productPriceInput = document.querySelector(DOM.$PRODUCT_PRICE_INPUT);
    this.$productNameInput = document.querySelector(DOM.$PRODUCT_NAME_INPUT);
  }

  isBlank = ($element) => {
    if ($element.value.length < NUMBER.BLANK_CHECK_LENGTH) {
      this.render.alertMessage(ERROR_MESSAGE.PRODUCT_BLANK($element.placeholder));
      return true;
    }

    return false;
  };

  isPositiveInteger = ($element) => {
    const productPriceNumber = Number($element.value);
    return Number.isInteger(productPriceNumber) && productPriceNumber > NUMBER.ZERO;
  };

  isUnitOfTen = () => Number(this.$productPriceInput.value) % NUMBER.UNIT_CHECK_TEN === NUMBER.ZERO;

  isValidPriceInput = () =>
    !this.isBlank(this.$productPriceInput) && this.isPositiveInteger(this.$productPriceInput) && this.isUnitOfTen();

  isValidNameInput = () => !this.isBlank(this.$productNameInput);

  isValidInputs = () => {
    const isValidInput = this.isValidNameInput() && this.isValidPriceInput();
    console.log(isValidInput);
  };
}
