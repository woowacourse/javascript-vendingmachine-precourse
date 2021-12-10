import { SELECTOR, COMMENT } from '../constants/constant.js';
import { createElementWithId } from '../utils/dom.js';

export default class Menu {
  constructor($target) {
    this.$product_menu = this.createProductMenu($target);
    this.$coin_menu = this.createCoinMenu($target);
    this.$purchase_menu = this.createPurchaseMenu($target);
    this.bindEvents();
  }

  bindEvents() {
    this.$product_menu.addEventListener('click', () =>
      console.log('product menu')
    );
    this.$coin_menu.addEventListener('click', () => console.log('coin menu'));
    this.$purchase_menu.addEventListener('click', () =>
      console.log('purchase menu')
    );
  }

  createProductMenu($target) {
    const $product_menu = createElementWithId(
      'button',
      COMMENT.PRODUCT_MENU,
      SELECTOR.ID.PRODUCT_MENU
    );
    $target.appendChild($product_menu);
    return $product_menu;
  }

  createCoinMenu($target) {
    const $coin_menu = createElementWithId(
      'button',
      COMMENT.COIN_MENU,
      SELECTOR.ID.COIN_MENU
    );
    $target.appendChild($coin_menu);
    return $coin_menu;
  }

  createPurchaseMenu($target) {
    const $purchase_menu = createElementWithId(
      'button',
      COMMENT.PURCHASE_MENU,
      SELECTOR.ID.PURCHASE_MENU
    );
    $target.appendChild($purchase_menu);
    return $purchase_menu;
  }
}
