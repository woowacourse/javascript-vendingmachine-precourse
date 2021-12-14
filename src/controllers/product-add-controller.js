import VendingMachineSharedModel from '../models/vending-machine-shared-model.js';
import ProductAddView from '../views/product-add/index.js';
import { isEmptyString, isNaturalNum } from '../utils.js';
import {
  VALIDATION_MESSAGES,
  MIN_PRODUCT_PRICE,
  PRODUCT_PRICE_UNIT,
  ELEMENT_CLASSES,
} from '../constants.js';

class ProductAddController {
  constructor() {
    this.model = new VendingMachineSharedModel();
  }

  mountView() {
    const $tabContent = document.querySelector(`.${ELEMENT_CLASSES.TAB_CONTENT}`);
    this.$view = new ProductAddView($tabContent).mount();
    this.registerEventListener();
  }

  unmountView() {
    this.$view.unmount();
  }

  registerEventListener() {
    const { $addButton } = this.$view.$form;
    $addButton.addEventListener('click', () => this.handleSubmitProductItem());
  }

  handleSubmitProductItem() {
    const { $nameInput, $priceInput, $quantityInput } = this.$view.$form;
    const values = [$nameInput.value, $priceInput.value, $quantityInput.value].map((v) => v.trim());
    const [name, priceString, quantityString] = values;
    const { isValid, message } = this.isValid(name, priceString, quantityString);
    if (isValid) {
      this.model.addProductItem({
        name,
        price: parseInt(priceString, 10),
        quantity: parseInt(quantityString, 10),
      });
      return;
    }
    alert(message);
  }

  isValid(name, priceString, quantityString) {
    const resultOfNameValidation = this.isValidName(name);
    if (!resultOfNameValidation.isValid) {
      return resultOfNameValidation;
    }
    const resultOfPriceValidation = this.isValidPrice(priceString);
    if (!resultOfPriceValidation.isValid) {
      return resultOfPriceValidation;
    }
    const resultOfQuantityValidation = this.isValidQuantity(quantityString);
    if (!resultOfQuantityValidation.isValid) {
      return resultOfQuantityValidation;
    }
    return { isValid: true, message: null };
  }

  isValidName(name) {
    const { NAME } = VALIDATION_MESSAGES.PRODUCT_ADD;
    let [isValid, message] = [true, null];
    if (isEmptyString(name)) {
      isValid = false;
      message = NAME;
    }
    return { isValid, message };
  }

  isValidPrice(priceString) {
    const { PRICE } = VALIDATION_MESSAGES.PRODUCT_ADD;
    let [isValid, message] = [true, null];
    if (!isEmptyString(priceString) && isNaturalNum(priceString)) {
      const price = parseInt(priceString, 10);
      if (price < MIN_PRODUCT_PRICE || price % PRODUCT_PRICE_UNIT !== 0) {
        isValid = false;
        message = PRICE;
      }
    } else {
      isValid = false;
      message = PRICE;
    }
    return { isValid, message };
  }

  isValidQuantity(quantityString) {
    const { QUANTITY } = VALIDATION_MESSAGES.PRODUCT_ADD;
    let [isValid, message] = [true, null];
    if (isEmptyString(quantityString) || !isNaturalNum(quantityString)) {
      isValid = false;
      message = QUANTITY;
    }
    return { isValid, message };
  }
}

export default ProductAddController;
