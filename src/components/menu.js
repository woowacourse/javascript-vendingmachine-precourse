import { $ } from '../utils/selector.js';
import { SELECTOR, COMMENT } from '../constants/constant.js';
import { getStateFromLocalStorage } from '../utils/localStorage.js';
import Product from './ProductManage/product.js';
import Coin from './CoinManage/coin.js';
import Purchase from './PurchaseManage/purchase.js';

export default class Menu {
  constructor($target) {
    this.$target = $target;
    this.$state;
    this.setup();
    this.render();
  }

  setup() {
    this.$state = getStateFromLocalStorage();
  }

  setEvent() {
    $(`#${SELECTOR.ID.PRODUCT_MENU}`).addEventListener('click', () => {
      this.$state = new Product(this.$state).$state;
    });

    $(`#${SELECTOR.ID.COIN_MENU}`).addEventListener('click', () => {
      this.$state = new Coin(this.$state).$state;
    });

    $(`#${SELECTOR.ID.PURCHASE_MENU}`).addEventListener('click', () => {
      this.$state = new Purchase(this.$state).$state;
    });
  }

  template() {
    return `
      <h1>${COMMENT.VENDING_MACHINE}</h1>
      <div id="${SELECTOR.ID.HEADER}">   
        <button id="${SELECTOR.ID.PRODUCT_MENU}">${COMMENT.PRODUCT_MENU}</button>
        <button id="${SELECTOR.ID.COIN_MENU}">${COMMENT.COIN_MENU}</button>
        <button id="${SELECTOR.ID.PURCHASE_MENU}">${COMMENT.PURCHASE_MENU}</button>
      </div>
      <div id="${SELECTOR.ID.BODY}"></div>
    `;
  }

  render() {
    this.$target.innerHTML += this.template();
    this.setEvent();
  }
}
