import { SELECTOR, COMMENT, ERROR } from '../../constants/constant.js';
import { setStateToLocalStorage } from '../../utils/localStorage.js';
import { $, $$ } from '../../utils/selector.js';
import { isValidCoinCharge } from '../../utils/valid.js';
import {
  getMoneyInput,
  setPurchaseProductTable,
  isAbleToPurchase,
  addCoinToReturnTable,
} from './chargeMoney.js';

export default class Purchase {
  constructor($state) {
    this.$state = $state;
    this.render();
  }

  getProducts() {
    return this.$state.products;
  }

  getCharge() {
    return this.$state.charge;
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

  setStateOfCharge(newState) {
    this.$state.charge += newState;
    this.render();
    setStateToLocalStorage(this.$state);
  }

  getClickedProduct(e) {
    const clickProductName = e.path[2].children[0].dataset.productName;
    const products = this.getProducts();
    const clickProduct = products.find(
      (item) => item.name === clickProductName
    );
    return clickProduct;
  }

  removeProduct(item) {
    const idx = this.getProducts().indexOf(item);
    this.getProducts().splice(idx, 1);
  }

  setQuantity(item, product) {
    if (item.name == product.name) {
      item.quantity--;
      if (item.quantity == 0) {
        this.removeProduct(item);
      }
    }
  }

  setStateOfProduct(product) {
    this.getProducts().map((item) => this.setQuantity(item, product));
    this.render();
    setStateToLocalStorage(this.$state);
  }

  chargeMoney() {
    const money = getMoneyInput();
    const validation = isValidCoinCharge(money);
    if (!validation.valid) {
      alert(validation.errorMessage);
      return;
    }
    this.setStateOfCharge(money);
  }

  purchaseProduct(e) {
    const clickProduct = this.getClickedProduct(e);
    if (!isAbleToPurchase(clickProduct, this.getCharge())) {
      alert(ERROR.PURCHASE);
      return;
    }

    this.setStateOfCharge(-clickProduct.price);
    this.setStateOfProduct(clickProduct);
  }

  returnAmount() {
    console.log(this.getCoins(), this.getAmount(), this.getCharge());
    let amount = this.getAmount();
    let charge = this.getCharge();
    let coins = this.getCoins();
    let coinList = [500, 100, 50, 10];
    let returnCoins = { 500: 0, 100: 0, 50: 0, 10: 0 };
    let idx = 0;
    while (amount > 0 && charge > 0) {
      // 해당 동전이 충전금보다 크거나 개수가 없으면 다음으로,,
      if (coinList[idx] > charge || coins[coinList[idx]] == 0) {
        idx++;
      }
      if (idx > coinList.length) {
        break;
      }
      returnCoins[coinList[idx]]++;
      charge -= coinList[idx];
      coins[coinList[idx]]--;
      amount -= coinList[idx];
    }
    this.$state.charge = charge > 0 ? charge : 0;
    this.render();
    setStateToLocalStorage(this.$state);
    console.log(returnCoins);
    addCoinToReturnTable(returnCoins);
  }

  setEvent() {
    $(`#${SELECTOR.ID.PURCHASE_CHARGE_BUTTON}`).addEventListener(
      'click',
      () => {
        this.chargeMoney();
      }
    );

    const purchaseButtons = $$(`.${SELECTOR.CLASS.PURCHASE_BUTTON}`);
    for (const purchaseButton of purchaseButtons) {
      purchaseButton.addEventListener('click', (e) => {
        this.purchaseProduct(e);
      });
    }

    $(`#${SELECTOR.ID.PURCHASE_RETURN_BUTTON}`).addEventListener(
      'click',
      () => {
        this.returnAmount();
      }
    );
  }

  template() {
    return `
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
      <table id="${SELECTOR.ID.PURCHASE_TABLE}" border="1">
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
    `;
  }

  render() {
    $(`#${SELECTOR.ID.BODY}`).innerHTML = this.template();

    if (this.getCharge() != 0) {
      $(
        `#${SELECTOR.ID.PURCHASE_CHARGE_AMOUNT}`
      ).innerHTML = `${this.getCharge()}원`;
    }

    setPurchaseProductTable(this.getProducts());

    this.setEvent();
  }
}
