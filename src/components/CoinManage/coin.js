import { SELECTOR, COMMENT } from '../../constants/constant.js';
import { setStateToLocalStorage } from '../../utils/localStorage.js';
import { $ } from '../../utils/selector.js';
import { isValidCoinCharge } from '../../utils/valid.js';
import {
  addCoinToTable,
  getAmountInput,
  calculateRandomCoins,
  clearAmountInput,
} from './coinCharge.js';

export default class Coin {
  constructor($state) {
    this.$state = $state;
    this.render();
  }

  getCoins() {
    return this.$state.coins;
  }

  getAmount() {
    let amount = 0;
    const coins = this.getCoins();
    for (let key in coins) {
      amount += key * coins[key];
    }
    return amount;
  }

  setAmountHTML() {
    const amount = this.getAmount();
    $(`#${SELECTOR.ID.COIN_CHARGE_AMOUNT_DIV}`).innerHTML = `
      ${COMMENT.COIN_CHARGE_AMOUNT}: 
      <span id="${SELECTOR.ID.COIN_CHARGE_AMOUNT}">${amount}</span>원
    `;
  }

  setStateOfCoin(newState) {
    this.$state.coins = newState;
    this.render();
    setStateToLocalStorage(this.$state);
  }

  chargeCoins() {
    const amount = getAmountInput();
    const validation = isValidCoinCharge(amount);
    if (!validation.valid) {
      alert(validation.errorMessage);
      return;
    }
    const coinState = calculateRandomCoins(amount, this.getCoins());
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

    if (this.getAmount() != 0) {
      this.setAmountHTML();
      addCoinToTable(this.getCoins());
    }

    this.setEvent();
  }
}
