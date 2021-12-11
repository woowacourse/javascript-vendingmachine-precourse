import { createElement } from '../../../utils/dom-utils.js';
import ChangeInput from './input.js';
import CoinStatus from './status.js';

export default class ChargeChage {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$element = createElement('div');
    this.$changeInput = new ChangeInput();
    this.$status = new CoinStatus();
  }

  appendChildren() {
    this.$element.append(this.$changeInput.component, this.$status.component);
  }

  updateChange() {
    this.$element.replaceChild(this.$element.firstElementChild, this.$changeInput.component);
    this.updateChange();
  }

  renderMoney(money) {
    this.$changeInput.chargeMoney(money);
  }

  renderCoins(coins) {
    this.$status.render(coins);
  }

  get component() {
    return this.$element;
  }
}
