import { COIN_MANAGE } from "../constant/vendingMachine.js";
import { clearArea } from "../Model/utils.js";
import VendingMachineCoin from "../Model/VendingMachineCoin.js";
import { makeElement, makeInputNumberFormToPrint, renderCoinTable } from "./template.js";

export default class CoinManageView {
  constructor(container) {
    this.container = container;
    this.coinStore = new VendingMachineCoin();
  }

  render() {
    clearArea(this.container);
    this.renderChargeCoinInput();
    this.renderHaveCoinTable();
    this.bindChargeButtonEvent();
    this.loadTotalCoin();
    this.loadCoinToHave();
  }

  renderChargeCoinInput() {
    const inputFormArea = makeInputNumberFormToPrint({
      TEXT: COIN_MANAGE.TEXT,
      INPUT: COIN_MANAGE.INPUT,
      BUTTON: COIN_MANAGE.CHARGE_BUTTON,
    });
    this.container.append(inputFormArea);
    this.input = document.getElementById(COIN_MANAGE.INPUT.ID);
  }

  loadTotalCoin() {
    this.coinToHave = document.getElementById(COIN_MANAGE.TEXT.PRINT_AMOUNT_ID);
    const totalCoin = this.coinStore.getTotalCoin() || 0;
    this.coinToHave.innerText = totalCoin;
  }

  renderHaveCoinTable() {
    const tableTitle = makeElement({ tag: "h3", innerText: COIN_MANAGE.CURRENT_COIN_AMOUNT });
    this.container.appendChild(tableTitle);
    renderCoinTable(this.container, "coin-table-body", COIN_MANAGE.COIN_TO_USE);
  }

  bindChargeButtonEvent() {
    const chargeButton = document.getElementById(COIN_MANAGE.CHARGE_BUTTON.ID);
    chargeButton.addEventListener("click", () => this.handleClickEvent());
  }

  handleClickEvent() {
    this.coinStore.charge(this.input.value);
    this.loadTotalCoin();
    this.loadCoinToHave();
  }

  loadCoinToHave() {
    const currentCoinToHave = this.coinStore.getCurrentCoinToHave();
    COIN_MANAGE.COIN_TO_USE.forEach(coin => {
      const coinKey = coin.QUANTITY_ID.match(/\d+/g).pop();
      const coinAmountArea = document.getElementById(coin.QUANTITY_ID);
      coinAmountArea.innerText = `${currentCoinToHave[coinKey]}개`;
    });
  }
}
