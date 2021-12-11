import { createElement } from '../../../utils/dom-utils.js';
import ChangeInput from './input.js';
import CoinStatus from './status.js';

export default class ChargeChage {
  constructor(updateChange) {
    this.init();
    this.appendChildren();
    this.updateChange = updateChange;
  }

  init() {
    this.$element = createElement('div');
    this.$changeInput = new ChangeInput(this.updateChange.bind(this));
    this.$status = new CoinStatus();
  }

  appendChildren() {
    this.$element.append(this.$changeInput.component, this.$status.component);
  }

  updateChange() {
    this.$element.replaceChild(this.$element.firstElementChild, this.$changeInput.component);
    this.updateChange();
  }

  get component() {
    return this.$element;
  }
}
