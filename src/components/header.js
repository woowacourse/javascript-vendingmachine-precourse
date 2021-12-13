import $ from '../util/domSelector.js';
import header from '../templates/header.js';
import { HEADER } from '../constants/selector.js';

export default class Header {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  setEvent() {
    $(`#${HEADER.PRODUCT_ADD_MENU}`).addEventListener('click', () => {
      console.log('PRODUCT_MENU');
    });

    $(`#${HEADER.VENDING_MACHINE_MANAGE_MENU}`).addEventListener('click', () => {
      console.log('COIN_MENU');
    });

    $(`#${HEADER.PRODUCT_PURCHASE_MENU}`).addEventListener('click', () => {
      console.log('PURCHASE_MENU');
    });
  }

  template() {
    return header();
  }

  render() {
    this.$target.innerHTML += this.template();
    this.setEvent();
  }
}
