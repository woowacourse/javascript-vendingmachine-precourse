import { COIN_MANAGE } from "../constant/vendingMachine.js";
import { clearArea } from "../utils.js";
import {
  makeElement,
  makeInputNumberFormToPrint,
  makeTableForm,
  makeTableRow,
} from "./template.js";

const handleClickEvent = () => {
  const chargeInputValue = document.getElementById(COIN_MANAGE.INPUT.ID).value;
  const chargeArea = document.getElementById("print-text");
  chargeArea.innerText = chargeInputValue;
};

const textData = {
  title: COIN_MANAGE.COIN_CHARGE_TEXT,
  printTitle: COIN_MANAGE.HOLDING_AMOUNT.TEXT,
  printTitleId: COIN_MANAGE.HOLDING_AMOUNT.ID,
};

const inputData = {
  placeholder: COIN_MANAGE.INPUT.PLACE_HOLDER,
  id: COIN_MANAGE.INPUT.ID,
};

const buttonData = {
  innerText: COIN_MANAGE.CHARGE_BUTTON.TEXT,
  id: COIN_MANAGE.CHARGE_BUTTON.ID,
  handleClickEvent,
};

const renderCoinTable = container => {
  const TABLE_BODY_ID = "coin-table-body";
  const tableHead = makeTableForm([COIN_MANAGE.COIN, COIN_MANAGE.AMOUNT], TABLE_BODY_ID);
  const coinToUse = [
    COIN_MANAGE.COIN_500,
    COIN_MANAGE.COIN_100,
    COIN_MANAGE.COIN_50,
    COIN_MANAGE.COIN_10,
  ];
  container.append(tableHead);
  const tableBodyArea = document.getElementById(TABLE_BODY_ID);
  coinToUse.forEach(coinData => {
    const coin = [{ text: coinData.TEXT }, { id: coinData.ID }];
    makeTableRow(tableBodyArea, coin);
  });
};

const coinManageView = container => {
  clearArea(container);
  const inputFormArea = makeInputNumberFormToPrint({ textData, inputData, buttonData });
  const tableTitle = makeElement({ tag: "h3", innerText: COIN_MANAGE.CURRENT_COIN_AMOUNT });
  container.append(inputFormArea, tableTitle);
  renderCoinTable(container);
};

export default coinManageView;
