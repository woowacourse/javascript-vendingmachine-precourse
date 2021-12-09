import { DOM, ERROR_MESSAGE, NUMBER } from '../utils/constant.js';

export default class ProductAdd {
  isBlank = ($element) => $element.value.length < NUMBER.MIN_LENGTH;

  getPriceInput = () => {
    const $productPriceInput = document.querySelector(DOM.$PRODUCT_PRICE_INPUT);
    if (this.isBlank($productPriceInput)) {
      console.log(ERROR_MESSAGE.PRODUCT_PRICE_BLANK);
      return;
    }

    return $productPriceInput.value;
  };

  getNameInput = () => {
    const $productNameInput = document.querySelector(DOM.$PRODUCT_NAME_INPUT);
    if (this.isBlank($productNameInput)) {
      console.log(ERROR_MESSAGE.PRODUCT_NAME_BLANK);

      return;
    }

    return $productNameInput.value;
  };
}
