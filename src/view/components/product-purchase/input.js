import { ID, HINT } from '../../../constant/attributes.js';
import { createElement, createInput } from '../../../utils/dom-utils.js';
import { PURCHASE } from '../../../constant/text.js';
import { CURRENCY } from '../../../constant/constant.js';

export default class MoneyInput {
  constructor() {
    this.$container = createElement('div');
    this.create();
    this.appendChildren();
  }

  create() {
    this.$title = createElement('h2', PURCHASE.TITLE);
    this.$form = createElement('form', null, ID.CHARGE.FORM);
    this.$changeInput = createInput(ID.CHARGE.INPUT, HINT.PURCHASE, 'number');
    this.$submitButton = createElement('button', PURCHASE.INSERT_BUTTON, ID.CHARGE.BUTTON);
    this.$submitButton.type = 'submit';
    this.$holdingContainer = createElement('div', PURCHASE.HOLDING);
    this.$holdingSpan = createElement('span', null, ID.CHARGE.AMOUNT);
    this.$currencySpan = createElement('span', `${CURRENCY}`);
  }

  appendChildren() {
    this.$holdingContainer.append(this.$holdingSpan, this.$currencySpan);
    this.$form.append(this.$changeInput, this.$submitButton);
    this.$container.append(this.$title, this.$form, this.$holdingContainer);
  }

  chargeMoney(money) {
    this.$holdingSpan.textContent = money;
  }

  get component() {
    return this.$container;
  }
}
