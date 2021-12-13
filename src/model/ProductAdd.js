import { DOM, ERROR_MESSAGE, LOCAL_STORAGE, NUMBER } from '../utils/constant.js';

export default class ProductAdd {
  constructor(render) {
    this.render = render;
    this.$productPriceInput = document.querySelector(DOM.$PRODUCT_PRICE_INPUT);
    this.$productNameInput = document.querySelector(DOM.$PRODUCT_NAME_INPUT);
    this.$productQuantityInput = document.querySelector(DOM.$PRODUCT_QUANTITY_INPUT);
  }

  getInputs = () => [
    this.$productNameInput.value,
    Number(this.$productPriceInput.value),
    Number(this.$productQuantityInput.value),
  ];

  isBlank = ($element) => {
    if ($element.value.trim().length < NUMBER.BLANK_CHECK_LENGTH) {
      this.render.alertMessage(ERROR_MESSAGE.PRODUCT_BLANK($element.placeholder));
      this.render.inputFocus($element);

      return true;
    }

    return false;
  };

  isDuplicateName = () => {
    const productsInformation = JSON.parse(localStorage.getItem(LOCAL_STORAGE.PRODUCTS_INFORMATION));

    if (productsInformation?.find((productInformation) => productInformation[0] === this.$productNameInput.value)) {
      this.render.alertMessage(ERROR_MESSAGE.NO_DUPLICATE_NAME);
      this.render.inputFocus(this.$productNameInput);

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
    if (Number(this.$productPriceInput.value) % NUMBER.UNIT_CHECK_TEN !== NUMBER.ZERO) {
      this.render.alertMessage(ERROR_MESSAGE.UNIT_OF_TEN(this.$productPriceInput.placeholder));
      this.render.inputFocus(this.$productPriceInput);

      return false;
    }

    return true;
  };

  isMoreThanOneHundred = () => {
    if (Number(this.$productPriceInput.value) < NUMBER.COIN_100) {
      this.render.alertMessage(ERROR_MESSAGE.PRODUCT_MORE_THAN_ONE_HUNDRED);
      this.render.inputFocus(this.$productPriceInput);

      return false;
    }

    return true;
  };

  isQuantityInput = () =>
    !this.isBlank(this.$productQuantityInput) && this.isPositiveInteger(this.$productQuantityInput);

  isValidPriceInput = () =>
    !this.isBlank(this.$productPriceInput) &&
    this.isPositiveInteger(this.$productPriceInput) &&
    this.isUnitOfTen() &&
    this.isMoreThanOneHundred();

  isValidNameInput = () => !this.isBlank(this.$productNameInput) && !this.isDuplicateName();

  isValidInputs = () => this.isValidNameInput() && this.isValidPriceInput() && this.isQuantityInput();
}
