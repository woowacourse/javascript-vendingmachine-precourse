import { CLASS } from '../../../constant/attributes.js';
import { TABLE, TD } from '../../../constant/style.js';
import { PRODUCT } from '../../../constant/text.js';
import { createElement, createTr, createTrByClass } from '../../../utils/dom-utils.js';

export default class ProductStatus {
  constructor() {
    this.classList = [
      CLASS.PRODUCT.MANGAE_NAME,
      CLASS.PRODUCT.MANAGE_PRICE,
      CLASS.PRODUCT.MANAGE_QUANTITY,
    ];
    this.create();
    this.appendChildren();
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
    this.$table.appendChild(createTr(PRODUCT.NAME, PRODUCT.PRICE, PRODUCT.QUANTITY));
    this.$table.style.border = TD.BORDER;
    this.$table.style.borderCollapse = TABLE.COLLAPSE;
  }

  render(menu) {
    this.createTable();
    menu.forEach((item) => {
      const $tr = createTrByClass(this.classList, ...item);
      this.$table.appendChild($tr);
    });
    this.$container.replaceChild(this.$table, this.$container.lastElementChild);
  }

  addItem(item) {
    const $tr = createTrByClass(this.classList, ...Object.values(item));
    this.$table.appendChild($tr);
  }

  get components() {
    return this.$container;
  }
}
