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
    const classList = [
      CLASS.PURCHASE.NAME,
      CLASS.PURCHASE.PRICE,
      CLASS.PURCHASE.QUANTITY,
      CLASS.PURCHASE.BUY_BUTTON,
    ];
    const dataset = Object.values(DATASET);
    menu.forEach((item) => {
      let $tr = createTrByClass(classList, ...item);
      $tr = includeTrData($tr, dataset);
      const $td = createTrIncludesButton(classList[3], item[0], '구매하기');
      $tr.appendChild($td);
      this.$table.appendChild($tr);
    });
    this.$container.replaceChild(this.$table, this.$container.lastElementChild);
  }

  addItem(item) {
    const classList = [
      CLASS.PRODUCT.MANGAE_NAME,
      CLASS.PRODUCT.MANAGE_PRICE,
      CLASS.PRODUCT.MANAGE_QUANTITY,
    ];
    const $tr = createTrByClass(classList, ...Object.values(item));
    this.$table.appendChild($tr);
  }

  get component() {
    return this.$container;
  }
}
