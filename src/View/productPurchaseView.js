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
  const InsertArea = document.getElementById(PRODUCT_PURCHASE_MANAGE.TEXT.PRINT_AMOUNT_ID);
  InsertArea.innerText = insertInputValue;
};

const renderInsertCoinInput = container => {
  PRODUCT_PURCHASE_MANAGE.INSERT_BUTTON.handleClickEvent = handleClickEvent;
  const inputFormArea = makeInputNumberFormToPrint({
    TEXT: PRODUCT_PURCHASE_MANAGE.TEXT,
    INPUT: PRODUCT_PURCHASE_MANAGE.INPUT,
    BUTTON: PRODUCT_PURCHASE_MANAGE.INSERT_BUTTON,
  });
  container.append(inputFormArea);
};

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
    const rowData = Product.changeTableRowFormat(PRODUCT_PURCHASE_MANAGE.PRODUCT_COLUMNS_ID, {
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
  renderCoinTable(container, "coin-return-table-body", PRODUCT_PURCHASE_MANAGE.COIN_TO_USE);
};

const producuctPurchaseView = container => {
  clearArea(container);
  renderInsertCoinInput(container);
  renderProductTableToBuy(container);
  renderCoinReturnTable(container);
};

export default producuctPurchaseView;
