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
    this.bindDom();
    this.bindChargeButtonEvent();
  }

  renderChargeCoinInput() {
    const inputFormArea = makeInputNumberFormToPrint({
      TEXT: COIN_MANAGE.TEXT,
      INPUT: COIN_MANAGE.INPUT,
      BUTTON: COIN_MANAGE.CHARGE_BUTTON,
    });
    this.container.append(inputFormArea);
  }

  renderHaveCoinTable() {
    const tableTitle = makeElement({ tag: "h3", innerText: COIN_MANAGE.CURRENT_COIN_AMOUNT });
    this.container.appendChild(tableTitle);
    renderCoinTable(this.container, "coin-table-body", COIN_MANAGE.COIN_TO_USE);
  }

  bindDom() {
    this.input = document.getElementById(COIN_MANAGE.INPUT.ID);
    this.chargeArea = document.getElementById(COIN_MANAGE.TEXT.PRINT_AMOUNT_ID);
    this.chargeButton = document.getElementById(COIN_MANAGE.CHARGE_BUTTON.ID);
  }

  bindChargeButtonEvent() {
    this.chargeButton.addEventListener("click", () => this.handleClickEvent());
  }

  handleClickEvent() {
    this.coinStore.charge(this.input.value);
    // 보유동전 총액 가져오기 <- 자판기동전객체한테 부탁
    this.chargeArea.innerText = this.input.value;
  }
}
