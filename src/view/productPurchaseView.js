import { PRODUCT_MANAGE, PRODUCT_PURCHASE_MANAGE } from "../constant/vendingMachine.js";
import { clearArea } from "../utils.js";
import {
  makeElement,
  makeInputNumberFormToPrint,
  makeTableForm,
  renderCoinTable,
} from "./template.js";

const handleClickEvent = () => {
  const insertInputValue = document.getElementById(PRODUCT_PURCHASE_MANAGE.INPUT.ID).value;
  const InsertArea = document.getElementById("print-text");
  InsertArea.innerText = insertInputValue;
};

const textData = {
  title: PRODUCT_PURCHASE_MANAGE.COIN_INSERT_TEXT,
  printTitle: PRODUCT_PURCHASE_MANAGE.INSERT_AMOUNT.TEXT,
  printTitleId: PRODUCT_PURCHASE_MANAGE.INSERT_AMOUNT.ID,
};

const inputData = {
  placeholder: PRODUCT_PURCHASE_MANAGE.INPUT.PLACE_HOLDER,
  id: PRODUCT_PURCHASE_MANAGE.INPUT.ID,
};

const buttonData = {
  innerText: PRODUCT_PURCHASE_MANAGE.INSERT_BUTTON.TEXT,
  id: PRODUCT_PURCHASE_MANAGE.INSERT_BUTTON.ID,
  handleClickEvent,
};

const renderInsertCoinInput = container => {
  const inputFormArea = makeInputNumberFormToPrint({ textData, inputData, buttonData });
  container.append(inputFormArea);
};

const renderProductTableToBuy = container => {
  const productTableTitle = makeElement({
    tag: "h3",
    innerText: PRODUCT_PURCHASE_MANAGE.CURRENT_PRODUCT_TO_BUY,
  });
  const tableHead = [
    PRODUCT_MANAGE.PRODUCT_NAME.TEXT,
    PRODUCT_MANAGE.PRICE.TEXT,
    PRODUCT_MANAGE.QUANTITY.TEXT,
    PRODUCT_PURCHASE_MANAGE.PURCHASE,
  ];
  const productTableArea = makeTableForm(tableHead, "product-menu-table-body");
  container.append(productTableTitle, productTableArea);
};

const renderCoinReturnTable = container => {
  const coinReturnTableTitle = makeElement({
    tag: "h3",
    innerText: PRODUCT_PURCHASE_MANAGE.CHARGE,
  });
  const returnButton = makeElement({
    tag: "button",
    innerText: PRODUCT_PURCHASE_MANAGE.CHARGE_BUTTON.TEXT,
    id: PRODUCT_PURCHASE_MANAGE.CHARGE_BUTTON.ID,
  });
  container.append(coinReturnTableTitle, returnButton);
  const coinToUse = [
    PRODUCT_PURCHASE_MANAGE.COIN_500,
    PRODUCT_PURCHASE_MANAGE.COIN_100,
    PRODUCT_PURCHASE_MANAGE.COIN_50,
    PRODUCT_PURCHASE_MANAGE.COIN_10,
  ];
  renderCoinTable(container, "coin-return-table-body", coinToUse);
};

const producuctPurchaseView = container => {
  clearArea(container);
  renderInsertCoinInput(container);
  renderProductTableToBuy(container);
  renderCoinReturnTable(container);
};

export default producuctPurchaseView;
