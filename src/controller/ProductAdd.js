import { DOM, NUMBER } from '../utils/constant.js';

export default class ProductAdd {
  constructor() {
    this.$productPriceInput = document.querySelector(DOM.$PRODUCT_PRICE_INPUT);
    this.$productNameInput = document.querySelector(DOM.$PRODUCT_NAME_INPUT);
  }

  isBlank = ($element) => $element.value.length < NUMBER.MIN_LENGTH;

  isValidPriceInput = () => !this.isBlank(this.$productPriceInput);

  isValidNameInput = () => !this.isBlank(this.$productNameInput);

  isValidInputs = () => {
    const isValidInput = this.isValidNameInput() && this.isValidPriceInput();
    console.log(isValidInput);
  };
}
