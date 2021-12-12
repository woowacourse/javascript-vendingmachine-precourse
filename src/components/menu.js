import { $ } from '../utils/selector.js';
import { SELECTOR, COMMENT } from '../constants/constant.js';
import { setLocalStorage } from '../utils/localStorage.js';
import Product_Menu from './product_menu.js';
import Coin_Menu from './coin_menu.js';
import Purchase_Menu from './purchase_menu.js';

export default class Menu {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    $(`#${SELECTOR.ID.PRODUCT_MENU}`).addEventListener('click', () => {
      setLocalStorage('menu', SELECTOR.ID.PRODUCT_MENU);
      console.log(`product`);
      this.$product_menu = new Product_Menu();
    });

    $(`#${SELECTOR.ID.COIN_MENU}`).addEventListener('click', () => {
      setLocalStorage('menu', SELECTOR.ID.COIN_MENU);
      console.log(`coin`);
      new Coin_Menu();
    });

    $(`#${SELECTOR.ID.PURCHASE_MENU}`).addEventListener('click', () => {
      setLocalStorage('menu', SELECTOR.ID.PURCHASE_MENU);
      console.log(`purchase`);
      new Purchase_Menu();
    });
  }

  render() {
    this.$target.innerHTML += `
      <h1>${COMMENT.VENDING_MACHINE}</h1>
      <div id="${SELECTOR.ID.HEADER}">   
        <button id="${SELECTOR.ID.PRODUCT_MENU}">${COMMENT.PRODUCT_MENU}</button>
        <button id="${SELECTOR.ID.COIN_MENU}">${COMMENT.COIN_MENU}</button>
        <button id="${SELECTOR.ID.PURCHASE_MENU}">${COMMENT.PURCHASE_MENU}</button>
      </div>
      <div id="${SELECTOR.ID.BODY}"></div>
    `;
  }
}
