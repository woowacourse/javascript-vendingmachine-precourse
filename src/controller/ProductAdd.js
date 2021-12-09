import { DOM, ERROR_MESSAGE, NUMBER } from '../utils/constant.js';

export default class ProductAdd {
  constructor() {
    this.$productNameInput = document.querySelector(DOM.$PRODUCT_NAME_INPUT);
  }

  isBlank = () => this.$productNameInput.value.length < NUMBER.MIN_LENGTH;

  getNameInput = () => {
    if (this.isBlank()) {
      console.log(ERROR_MESSAGE.PRODUCT_NAME_IS_BLANK);

      return;
    }

    return this.$productNameInput.value;
  };
}
