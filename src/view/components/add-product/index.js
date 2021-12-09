import { createElement } from '../../../utils/dom-utils.js';
import AddProductInput from './input.js';
import ProductStatus from './status.js';

export default class AddProduct {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$element = createElement('div');
    this.$inputContainer = createElement('div');
    this.$input = new AddProductInput(this.$inputContainer);
    this.$status = new ProductStatus();
  }

  appendChildren() {
    this.$element.append(this.$inputContainer, this.$status.components);
  }

  get component() {
    return this.$element;
  }
}
