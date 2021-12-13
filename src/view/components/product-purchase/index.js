import { createElement } from '../../../utils/dom-utils.js';
import ChangeStatus from './change-status.js';
import MoneyInput from './input.js';
import ProductStatus from './product-status.js';

export default class ProductPurchase {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$element = createElement('div');
    this.$moneyInput = new MoneyInput();
    this.$productStatus = new ProductStatus();
    this.$changeStatus = new ChangeStatus();
  }

  appendChildren() {
    this.$element.append(
      this.$moneyInput.component,
      this.$productStatus.component,
      this.$changeStatus.component
    );
  }

  insertMoney(money) {
    this.$moneyInput.chargeMoney(money);
  }

  renderMenu(menu) {
    this.$productStatus.render(menu);
  }

  renderChage(coins) {
    this.$changeStatus.render(coins);
  }

  get component() {
    return this.$element;
  }
}
