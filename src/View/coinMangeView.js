import { COIN_MANAGE } from "../constant/vendingMachine.js";
import { clearArea } from "../Model/utils.js";
import { makeElement, makeInputNumberFormToPrint, renderCoinTable } from "./template.js";

const handleClickEvent = () => {
  const chargeInputValue = document.getElementById(COIN_MANAGE.INPUT.ID).value;
  const chargeArea = document.getElementById(COIN_MANAGE.TEXT.PRINT_AMOUNT_ID);
  chargeArea.innerText = chargeInputValue;
};

const renderChargeCoinInput = container => {
  COIN_MANAGE.CHARGE_BUTTON.handleClickEvent = handleClickEvent;
  const inputFormArea = makeInputNumberFormToPrint({
    TEXT: COIN_MANAGE.TEXT,
    INPUT: COIN_MANAGE.INPUT,
    BUTTON: COIN_MANAGE.CHARGE_BUTTON,
  });
  container.append(inputFormArea);
};

const renderHaveCoinTable = container => {
  const tableTitle = makeElement({ tag: "h3", innerText: COIN_MANAGE.CURRENT_COIN_AMOUNT });
  container.append(tableTitle);
  renderCoinTable(container, "coin-table-body", COIN_MANAGE.COIN_TO_USE);
};

const coinManageView = container => {
  clearArea(container);
  renderChargeCoinInput(container);
  renderHaveCoinTable(container);
};

export default coinManageView;
