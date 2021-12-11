import { CLASS, ID } from '../../../constant/attributes.js';
import { CURRENCY, kindsOfCoins } from '../../../constant/constant.js';
import { TABLE, TD } from '../../../constant/style.js';
import { createElement, createTr } from '../../../utils/dom-utils.js';

export default class CoinStatus {
  constructor() {
    this.content = [];
    this.sort = kindsOfCoins.map((kind) => `${kind}${CURRENCY}`);
    this.create();
    this.createTable();
    this.appendChildren();
  }

  create() {
    this.$container = createElement('div');
    this.$title = createElement('h2', '자판기가 보유한 동전');
  }

  appendChildren() {
    this.$container.append(this.$title, this.$table);
  }

  createTable() {
    this.$table = createElement('table');
    this.$table.classList.add(CLASS.PRODUCT.MANAGE_ITEM);
    this.$table.appendChild(createTr('동전', '개수'));
    this.$table.style.border = TD.BORDER;
    this.$table.style.borderCollapse = TABLE.COLLAPSE;
    this.buildTable();
  }

  buildTable() {
    const idList = [
      ID.VENDING_MACHINE.COIN_QUANTITY.FIVE_HUNDREDS,
      ID.VENDING_MACHINE.COIN_QUANTITY.ONE_HUNDRED,
      ID.VENDING_MACHINE.COIN_QUANTITY.FIFTY,
      ID.VENDING_MACHINE.COIN_QUANTITY.TEN,
    ];
    this.sort.forEach((item, idx) => {
      const $tr = createTr(item, 0);
      $tr.lastElementChild.id = idList[idx];
      this.content.push($tr.lastElementChild);
      this.$table.appendChild($tr);
    });
  }

  render(coins) {
    coins.forEach((item, idx) => {
      this.content[idx].textContent = Object.values(item)[0];
    });
  }

  get component() {
    return this.$container;
  }
}
