import { SELECTOR, COMMENT } from '../constants/constant.js';
import { $ } from '../utils/selector.js';

export default class Purchase_Menu {
  constructor() {
    this.render();
  }

  render() {
    $(`#${SELECTOR.ID.BODY}`).innerHTML = `
    <div id="${SELECTOR.ID.PURCHASE_MENU_CONTAINER}">
      <br />
      <h2>${COMMENT.PURCHASE_MENU_CHARGE}</h2>
      <form>
        <input
          type="number"
          id="${SELECTOR.ID.PURCHASE_CHARGE_INPUT}"
          placeholder="${COMMENT.PURCHASE_CHARGE_INPUT}"
        />
        <button type="button" id="${SELECTOR.ID.PURCHASE_CHARGE_BUTTON}">
          ${COMMENT.PURCHASE_CHARGE_BUTTON}
        </button>
      </form>
      <div>
        ${COMMENT.PURCHASE_CHARGE_AMOUNT}:
        <span id="${SELECTOR.ID.PURCHASE_CHARGE_AMOUNT}"></span>
      </div>
      <br />
      <h2>${COMMENT.PURCHASE_MENU_ITEM}</h2>
      <table border="1">
        <th>${COMMENT.PURCHASE_ITEM_NAME}</th>
        <th>${COMMENT.PURCHASE_ITEM_PRICE}</th>
        <th>${COMMENT.PURCHASE_ITEM_QUANTITY}</th>
        <th>${COMMENT.PURCHASE_ITEM_BUY}</th>
      </table>
      <br />
      <h2>${COMMENT.PURCHASE_MENU_EXCHANGE}</h2>
      <button id="${SELECTOR.ID.PURCHASE_RETURN_BUTTON}">
        ${COMMENT.PURCHASE_RETURN_BUTTON}
      </button>
      <table border="1">
        <th>${COMMENT.COIN_MENU_TABLE_COIN}</th>
        <th>${COMMENT.COIN_MENU_TABLE_AMOUNT}</th>
        <tr>
          <td>${COMMENT.PURCHASE_COIN_500}</td>
          <td id="${SELECTOR.ID.PURCHASE_COIN_500}"></td>
        </tr>
        <tr>
          <td>${COMMENT.PURCHASE_COIN_100}</td>
          <td id="${SELECTOR.ID.PURCHASE_COIN_100}"></td>
        </tr>
        <tr>
          <td>${COMMENT.PURCHASE_COIN_50}</td>
          <td id="${SELECTOR.ID.PURCHASE_COIN_50}"></td>
        </tr>
        <tr>
          <td>${COMMENT.PURCHASE_COIN_10}</td>
          <td id="${SELECTOR.ID.PURCHASE_COIN_10}"></td>
        </tr>
      </table>
    </div>
    `;
  }
}
