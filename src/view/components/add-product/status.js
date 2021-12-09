import { CLASS } from '../../../constant/attributes.js';
import { TABLE, TD } from '../../../constant/style.js';
import { PRODUCT } from '../../../constant/text.js';
import { createElement, createTr } from '../../../utils/dom-utils.js';

export default class ProductStatus {
  constructor() {
    this.local = [['콜라', 5000, 20]];
    this.create();
    this.appendChildren();
    this.render(this.local);
  }

  create() {
    this.$container = createElement('div');
    this.$title = createElement('h2', PRODUCT.STATUS);
  }

  appendChildren() {
    const $empty = createElement('div');
    this.$container.append(this.$title, $empty);
  }

  createTable() {
    this.$table = createElement('table');
    this.$table.classList.add(CLASS.PRODUCT.MANAGE_ITEM);
    this.$table.appendChild(createTr(null, PRODUCT.NAME, PRODUCT.PRICE, PRODUCT.QUANTITY));
    this.$table.style.border = TD.BORDER;
    this.$table.style.borderCollapse = TABLE.COLLAPSE;
  }

  render(menu) {
    this.createTable();
    const classList = [
      CLASS.PRODUCT.MANGAE_NAME,
      CLASS.PRODUCT.MANAGE_PRICE,
      CLASS.PRODUCT.MANAGE_QUANTITY,
    ];
    menu.forEach((item) => {
      const $tr = createTr(classList, ...item);
      this.$table.appendChild($tr);
    });
    this.$container.replaceChild(this.$table, this.$container.lastElementChild);
  }

  get components() {
    return this.$container;
  }
}
