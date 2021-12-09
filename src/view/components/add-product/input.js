import { ID, HINT } from '../../../constant/attributes.js';
import { createElement, createInput } from '../../../utils/dom-utils.js';
import { PRODUCT } from '../../../constant/text.js';

export default class AddProductInput {
  constructor($element) {
    this.$container = $element;
    this.create();
    this.appendChildren();
  }

  create() {
    this.$title = createElement('h2', PRODUCT.ADD);
    this.$form = createElement('form', null, ID.PRODUCT.INPUT_FORM);
    this.$nameInput = createInput(ID.PRODUCT.NAME_INPUT, HINT.NAME);
    this.$priceInput = createInput(ID.PRODUCT.PRICE_INPUT, HINT.PRICE, 'number');
    this.$quantityInput = createInput(ID.PRODUCT.QUANTITY_INPUT, HINT.QUANTITY, 'number');
    this.$submitButton = createElement('button', PRODUCT.ADD_BUTTON, ID.PRODUCT.ADD_BUTTON);
    this.$submitButton.type = 'submit';
  }

  appendChildren() {
    this.$form.append(this.$nameInput, this.$priceInput, this.$quantityInput, this.$submitButton);
    this.$container.append(this.$title, this.$form);
  }
}
