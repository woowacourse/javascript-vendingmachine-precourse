import {
  ADDED_PRODUCT_CLASS,
  PRODUCT_MANAGE_NAME_CLASS,
  PRODUCT_MANAGE_PRICE_CLASS,
  PRODUCT_MANAGE_QUANTITY_CLASS,
  PRODUCT_NODE_QUANTITY_INDEX,
  PURCHASE_AMOUNT_ID,
} from '../constant/constant.js';
import $ from '../util/$.js';

export default class Product {
  constructor({ name, price, quantity }) {
    this.name = name.trim();
    this.price = +price;
    this.quantity = +quantity;
  }

  decreaseQuantity() {
    this.quantity -= 1;
  }

  addedTemplate() {
    return `
      <tr class="${ADDED_PRODUCT_CLASS}"align="center" bgcolor="white" height="40">
        <td class="${PRODUCT_MANAGE_NAME_CLASS}" align="center" width="160">${this.name}</td>
        <td class="${PRODUCT_MANAGE_PRICE_CLASS}" align="center" width="100">${this.price}</td>
        <td class="${PRODUCT_MANAGE_QUANTITY_CLASS}" align="center" width="100">${this.quantity}</td>
      </tr>
    `;
  }

  render(dom) {
    dom.insertAdjacentHTML('beforeend', this.addedTemplate());
  }

  renderUpdate($productNode, money) {
    const $tableNode = $productNode;
    const $moneyNode = $(`#${PURCHASE_AMOUNT_ID}`);

    $tableNode[PRODUCT_NODE_QUANTITY_INDEX].textContent = this.quantity;
    $moneyNode.textContent = money;
  }
}
