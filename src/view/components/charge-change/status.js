import { CLASS, ID } from '../../../constant/attributes.js';
import { TABLE, TD } from '../../../constant/style.js';
import { createElement, createTr, createTrById } from '../../../utils/dom-utils.js';

export default class CoinStatus {
  constructor() {
    this.status = [{ '500원': 18 }, { '100원': 24 }, { '50원': 20 }, { '10원': 20 }];
    this.create();
    this.appendChildren();
    this.render(this.status);
  }

  create() {
    this.$container = createElement('div');
    this.$title = createElement('h2', '자판기가 보유한 동전');
  }

  appendChildren() {
    const $empty = createElement('div');
    this.$container.append(this.$title, $empty);
  }

  createTable() {
    this.$table = createElement('table');
    this.$table.classList.add(CLASS.PRODUCT.MANAGE_ITEM);
    this.$table.appendChild(createTr('동전', '개수'));
    this.$table.style.border = TD.BORDER;
    this.$table.style.borderCollapse = TABLE.COLLAPSE;
  }

  render(coins) {
    this.createTable();
    const idList = [
      ID.VENDING_MACHINE.COIN_QUANTITY.FIVE_HUNDREDS,
      ID.VENDING_MACHINE.COIN_QUANTITY.ONE_HUNDRED,
      ID.VENDING_MACHINE.COIN_QUANTITY.FIFTY,
      ID.VENDING_MACHINE.COIN_QUANTITY.TEN,
    ];
    coins.forEach((item, idx) => {
      const $tr = createTr(...Object.keys(item), ...Object.values(item));
      $tr.lastElementChild.id = idList[idx];
      this.$table.appendChild($tr);
    });
    this.$container.replaceChild(this.$table, this.$container.lastElementChild);
  }

  get component() {
    return this.$container;
  }
}
