import { SELECTOR, COMMENT } from '../constants/constant.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';
import { $ } from '../utils/selector.js';
import { isValidCoinCharge } from '../utils/valid.js';

export default class Coin_Menu {
  constructor(coins) {
    this.render();
    this.coins = coins;
    this.bindClickEvents();
  }

  getAmountInput() {
    return Number($(`#${SELECTOR.ID.COIN_CHARGE_INPUT}`).value);
  }

  calculateRandomCoins(amount) {
    const coinList = [500, 100, 50, 10];
    let randomCoinQuantity = [0, 0, 0, 0];
    let idx = 0;
    let randomCoin;

    while (amount > 0) {
      if (coinList[idx] > amount) {
        idx++;
        continue;
      }
      randomCoin = MissionUtils.Random.pickNumberInList(coinList.slice(idx));
      randomCoinQuantity[coinList.indexOf(randomCoin)]++;
      amount -= randomCoin;
    }
    return randomCoinQuantity;
  }

  addRandomCoinsToLocal(randomCoinQuantity) {
    if (this.coins.length === 0) {
      this.coins = [0, 0, 0, 0];
    }
    this.coins.forEach((key, idx) => {
      this.coins[idx] += randomCoinQuantity[idx];
    });
    setLocalStorage('coins', JSON.stringify(this.coins));
  }

  clearAmountInput() {
    $(`#${SELECTOR.ID.COIN_CHARGE_INPUT}`).value = '';
  }

  setCoinChargeAmount() {
    let amount = 0;
    const coinList = [500, 100, 50, 10];
    this.coins.forEach((key, idx) => {
      amount += coinList[idx] * key;
    });
    $(`#${SELECTOR.ID.COIN_CHARGE_AMOUNT}`).innerHTML = `${amount}원`;
  }

  chargeCoins() {
    const amount = this.getAmountInput();
    const validation = isValidCoinCharge(amount);
    if (!validation.valid) {
      alert(validation.errorMessage);
      return;
    }
    const randomCoinQuantity = this.calculateRandomCoins(amount);
    this.addRandomCoinsToLocal(randomCoinQuantity);
    this.clearAmountInput();
    this.setCoinChargeAmount();
    console.log(this.coins);
    // this.addProductItemToTable(product);
  }

  bindClickEvents() {
    $(`#${SELECTOR.ID.COIN_CHARGE_BUTTON}`).addEventListener('click', () => {
      this.chargeCoins();
    });
  }

  render() {
    $(`#${SELECTOR.ID.BODY}`).innerHTML = `
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
    `;
  }
}
