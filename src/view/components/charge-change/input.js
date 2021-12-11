import { ID, HINT } from '../../../constant/attributes.js';
import { createElement, createInput } from '../../../utils/dom-utils.js';
import { CHARGE } from '../../../constant/text.js';

export default class ChangeInput {
  constructor(updateChange, holding) {
    this.$container = createElement('div');
    this.holdingAmount = holding || 0;
    this.updateChage = updateChange;
    this.create();
    this.appendChildren();
    this.bindEvents();
  }

  create() {
    this.$title = createElement('h2', CHARGE.TITLE);
    this.$form = createElement('form', null, ID.PRODUCT.INPUT_FORM);
    this.$changeInput = createInput(ID.VENDING_MACHINE.CHARGE.INPUT, HINT.CHANGE, 'number');
    this.$submitButton = createElement('button', CHARGE.BUTTON, ID.VENDING_MACHINE.CHARGE.BUTTON);
    this.$submitButton.type = 'submit';
    this.$holdingContainer = createElement('div', CHARGE.HODLING);
    this.$holdingSpan = createElement('span', this.holdingAmount, ID.VENDING_MACHINE.CHARGE.AMOUNT);
  }

  appendChildren() {
    this.$holdingContainer.append(this.$holdingSpan);
    this.$form.append(this.$changeInput, this.$submitButton);
    this.$container.append(this.$title, this.$form, this.$holdingContainer);
  }

  bindEvents() {
    this.$submitButton.addEventListener('click', this.charge.bind(this));
  }

  charge(event) {
    event.preventDefault();
    this.holdingAmount += Number(this.$changeInput.value);
    this.$holdingSpan = createElement('span', this.holdingAmount);
    this.$holdingContainer.replaceChild(this.$holdingSpan, this.$holdingContainer.lastElementChild);
    this.$container.replaceChild(this.$holdingContainer, this.$container.lastElementChild);
    // this.updateChage();
  }

  get component() {
    return this.$container;
  }
}
