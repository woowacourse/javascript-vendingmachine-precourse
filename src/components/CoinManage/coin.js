import { SELECTOR, COMMENT } from '../../constants/constant.js';
import { $ } from '../../utils/selector.js';
import { isValidCoinCharge } from '../../utils/valid.js';
import { Component } from '../component.js';
import {
  addCoinToTable,
  getAmountInput,
  getRandomCoins,
  clearAmountInput,
  setAmountHTML,
} from './coinCharge.js';

export default class Coin extends Component {
  constructor($state) {
    super($state);
    this.$state = $state;
    this.render();
  }

  chargeCoins() {
    const amountInput = getAmountInput();
    const validation = isValidCoinCharge(amountInput);
    if (!validation.valid) {
      alert(validation.errorMessage);
      return;
    }
    const coinState = getRandomCoins(amountInput, this.getCoins());
    this.setStateOfCoin(coinState);
    clearAmountInput();
  }

  setEvent() {
    $(`#${SELECTOR.ID.COIN_CHARGE_BUTTON}`).addEventListener('click', () => {
      this.chargeCoins();
    });
  }

  template() {
    return `
      <br />
      <h2>${COMMENT.COIN_MENU_ADD}</h2>
      <form>
        <input
          type="number"
          id="${SELECTOR.ID.COIN_CHARGE_INPUT}"
          placeholder="${COMMENT.COIN_CHARGE_INPUT}"
          step="10"
          min="0"
        />
        <button type="button" id="${SELECTOR.ID.COIN_CHARGE_BUTTON}">
          ${COMMENT.COIN_CHARGE_BUTTON}
        </button>
      </form>
      <div id="${SELECTOR.ID.COIN_CHARGE_AMOUNT_DIV}">
        ${COMMENT.COIN_CHARGE_AMOUNT}: 
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
    `;
  }

  render() {
    $(`#${SELECTOR.ID.BODY}`).innerHTML = this.template();

    setAmountHTML(this.getAmount());
    addCoinToTable(this.getCoins(), this.getAmount());

    this.setEvent();
  }
}
