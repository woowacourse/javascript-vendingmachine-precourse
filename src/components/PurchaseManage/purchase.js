import { SELECTOR, COMMENT, ERROR } from '../../constants/constant.js';
import { setStateToLocalStorage } from '../../utils/localStorage.js';
import { $, $$ } from '../../utils/selector.js';
import { isValidCoinCharge } from '../../utils/valid.js';
import { Component } from '../component.js';
import {
  getMoneyInput,
  setPurchaseProductTable,
  isAbleToPurchase,
  addCoinToReturnTable,
  setChargeAmount,
  getClickedProduct,
  handleQuantity,
  getReturnCoins,
} from './purchaseProduct.js';

export default class Purchase extends Component {
  constructor($state) {
    super($state);
    this.$state = $state;
    this.render();
  }

  setStateOfProduct(product) {
    this.getProducts().map((item) =>
      handleQuantity(item, product, this.getProducts())
    );
    this.render();
    setStateToLocalStorage(this.$state);
  }

  chargeMoney() {
    const charge = getMoneyInput();
    const validation = isValidCoinCharge(charge);
    if (!validation.valid) {
      alert(validation.errorMessage);
      return;
    }
    this.setStateOfCharge(charge);
  }

  purchaseProduct(e) {
    const clickProduct = getClickedProduct(e, this.getProducts());
    if (!isAbleToPurchase(clickProduct, this.getCharge())) {
      alert(ERROR.PURCHASE);
      return;
    }

    this.setStateOfCharge(-clickProduct.price);
    this.setStateOfProduct(clickProduct);
  }

  returnAmount() {
    const returnCoins = getReturnCoins(
      this.getAmount(),
      this.getCharge(),
      this.getCoins()
    );
    this.$state.charge = 0;
    this.render();
    setStateToLocalStorage(this.$state);
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
          step="10"
          min="0"
        />
        <button type="button" id="${SELECTOR.ID.PURCHASE_CHARGE_BUTTON}">
          ${COMMENT.PURCHASE_CHARGE_BUTTON}
        </button>
      </form>
      <div id="${SELECTOR.ID.PURCHASE_CHARGE_AMOUNT_DIV}">
        ${COMMENT.PURCHASE_CHARGE_AMOUNT}:
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

    setChargeAmount(this.getCharge());
    setPurchaseProductTable(this.getProducts());
    this.setEvent();
  }
}
