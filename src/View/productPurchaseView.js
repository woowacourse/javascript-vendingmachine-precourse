import { PRODUCT_PURCHASE_MANAGE } from "../constant/vendingMachine.js";
import Product from "../Model/Product.js";
import { clearArea } from "../Model/utils.js";
import {
  makeElement,
  makeInputNumberFormToPrint,
  makeTableForm,
  makeTableRow,
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

const productId = [
  PRODUCT_PURCHASE_MANAGE.PRODUCT_NAME_ID,
  PRODUCT_PURCHASE_MANAGE.PRODUCT_PRICE_ID,
  PRODUCT_PURCHASE_MANAGE.PRODUCT_QUANTITY_ID,
];

const renderProductList = tableBodyId => {
  const tableBody = document.getElementById(tableBodyId);
  const products = Product.getProductData();
  if (products === null) return;

  products.forEach(product => {
    const purchaseButton = makeElement({
      tag: "button",
      id: PRODUCT_PURCHASE_MANAGE.PURCHASE_BUTTON.ID,
      innerText: PRODUCT_PURCHASE_MANAGE.PURCHASE_BUTTON.TEXT,
      type: "button",
    });
    const rowData = Product.changeTableRowFormat(productId, {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    });
    makeTableRow(tableBody, rowData, PRODUCT_PURCHASE_MANAGE.PRODUCT_ITEM_ID, purchaseButton);
  });
};

const renderProductTableToBuy = container => {
  const productTableTitle = makeElement({
    tag: "h3",
    innerText: PRODUCT_PURCHASE_MANAGE.CURRENT_PRODUCT_TO_BUY,
  });
  const tableBodyId = "product-menu-table-body";
  const productTableArea = makeTableForm(PRODUCT_PURCHASE_MANAGE.COLUMNS, tableBodyId);
  container.append(productTableTitle, productTableArea);
  renderProductList(tableBodyId);
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
    type: "button",
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
