import $ from '../util/domSelector.js';
import header from '../templates/header.js';
import { HEADER } from '../constants/selector.js';
import ProductManagement from '../routes/productManagement.js';
import ChangeCharge from '../routes/changeCharge.js';
import PurchaseProduct from '../routes/purchaseProduct.js';

export default class Header {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  setEvent() {
    $(`#${HEADER.PRODUCT_ADD_MENU}`).addEventListener('click', () => {
      new ProductManagement();
    });

    $(`#${HEADER.VENDING_MACHINE_MANAGE_MENU}`).addEventListener('click', () => {
      new ChangeCharge();
    });

    $(`#${HEADER.PRODUCT_PURCHASE_MENU}`).addEventListener('click', () => {
      new PurchaseProduct();
    });
  }

  template() {
    return `
    ${header()}
    <div id="${HEADER.CONTENT_CONTAINER}"></div>
    `;
  }

  render() {
    this.$target.innerHTML += this.template();
    this.setEvent();
  }
}
