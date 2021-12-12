import { SELECTOR, COMMENT } from '../constants/constant.js';
import { $ } from '../utils/selector.js';

export default class Coin_Menu {
  constructor() {
    this.render();
  }

  render() {
    $(`#${SELECTOR.ID.BODY}`).innerHTML = `
      <div id="${SELECTOR.ID.COIN_MENU_CONTAINER}">
        <br />
        <h2>${COMMENT.COIN_MENU_ADD}</h2>
        <form>
          <input
            type="number"
            id="${SELECTOR.ID.COIN_CHARGE_INPUT}"
            placeholder="${COMMENT.COIN_CHARGE_INPUT}"
          />
          <button type="button" id="${SELECTOR.ID.COIN_CHARGE_BUTTON}">
            ${COMMENT.COIN_CHARGE_BUTTON}
          </button>
        </form>
        <div>${COMMENT.COIN_CHARGE_AMOUNT}: 
          <span id="${SELECTOR.ID.COIN_CHARGE_AMOUNT}"></span>
        </div>
        <br />
        <h2>${COMMENT.COIN_MENU_TABLE}</h2>
        <table border="1">
          <th>${COMMENT.COIN_MENU_TABLE_COIN}</th>
          <th>${COMMENT.COIN_MENU_TABLE_AMOUNT}</th>
          <tr>
            <td>${COMMENT.COIN_500}</td>
            <td id="${SELECTOR.ID.COIN_500}"></td>
          </tr>
          <tr>
            <td>${COMMENT.COIN_100}</td>
            <td id="${SELECTOR.ID.COIN_100}"></td>
          </tr>
          <tr>
            <td>${COMMENT.COIN_50}</td>
            <td id="${SELECTOR.ID.COIN_50}"></td>
          </tr>
          <tr>
            <td>${COMMENT.COIN_10}</td>
            <td id="${SELECTOR.ID.COIN_10}"></td>
          </tr>
        </table>
      </div>
    `;
  }
}
