import { $ } from '../utils/selector.js';
import { SELECTOR, COMMENT } from '../constants/constant.js';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage.js';
import Product_Menu from './product_menu.js';
import Coin_Menu from './coin_menu.js';
import Purchase_Menu from './purchase_menu.js';

export default class Menu {
  constructor($target) {
    this.$target = $target;
    this.products = [];
    this.coins = [];
    window.onload = this.onload();
    this.render();
    this.bindClickEvents();
  }

  onload() {
    const products = JSON.parse(getLocalStorage('products'));
    const coins = JSON.parse(getLocalStorage('coins'));
    this.products = products || [];
    this.coins = coins || [];
    console.log(this.products, this.coins);
  }

  bindClickEvents() {
    $(`#${SELECTOR.ID.PRODUCT_MENU}`).addEventListener('click', () => {
      setLocalStorage('menu', SELECTOR.ID.PRODUCT_MENU);
      this.products = new Product_Menu(this.products).products;
    });

    $(`#${SELECTOR.ID.COIN_MENU}`).addEventListener('click', () => {
      setLocalStorage('menu', SELECTOR.ID.COIN_MENU);
      new Coin_Menu(this.coins);
      console.log(this.coins);
    });

    $(`#${SELECTOR.ID.PURCHASE_MENU}`).addEventListener('click', () => {
      setLocalStorage('menu', SELECTOR.ID.PURCHASE_MENU);
      new Purchase_Menu();
      console.log(this.products);
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
