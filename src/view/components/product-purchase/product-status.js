import { CLASS, DATASET } from '../../../constant/attributes.js';
import { TABLE, TD } from '../../../constant/style.js';
import { PRODUCT } from '../../../constant/text.js';
import {
  createElement,
  createTr,
  createTrByClass,
  createTrIncludesButton,
  includeTrData,
} from '../../../utils/dom-utils.js';

export default class ProductStatus {
  constructor() {
    this.classList = [
      CLASS.PURCHASE.NAME,
      CLASS.PURCHASE.PRICE,
      CLASS.PURCHASE.QUANTITY,
      CLASS.PURCHASE.BUY_BUTTON,
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
    this.$table.appendChild(createTr(PRODUCT.NAME, PRODUCT.PRICE, PRODUCT.QUANTITY, PRODUCT.BUY));
    this.$table.style.border = TD.BORDER;
    this.$table.style.borderCollapse = TABLE.COLLAPSE;
  }

  render(menu) {
    this.createTable();
    const dataset = Object.values(DATASET);
    menu.forEach((item) => {
      let $tr = createTrByClass(this.classList, ...item);
      $tr = includeTrData($tr, dataset);
      const $td = createTrIncludesButton(this.classList[3], item[0], '구매하기');
      $tr.appendChild($td);
      this.$table.appendChild($tr);
    });
    this.$container.replaceChild(this.$table, this.$container.lastElementChild);
  }

  addItem(item) {
    const $tr = createTrByClass(this.classList, ...Object.values(item));
    this.$table.appendChild($tr);
  }

  get component() {
    return this.$container;
  }
}
