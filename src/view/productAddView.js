import { clearArea, clearInputValue } from "../utils.js";
import { makeElement, makeTableForm, makeTableRow } from "./template.js";
import { PRODUCT_MANAGE } from "../constant/vendingMachine.js";

const getNewProductData = () => {
  const productNameInput = document.getElementById(PRODUCT_MANAGE.PRODUCT_NAME.ID);
  const productPriceInput = document.getElementById(PRODUCT_MANAGE.PRICE.ID);
  const productQuantityInput = document.getElementById(PRODUCT_MANAGE.QUANTITY.ID);
  const newProductId = [
    PRODUCT_MANAGE.NEW_PRODUCT_NAME_ID,
    PRODUCT_MANAGE.NEW_PRODUCT_PRICE_ID,
    PRODUCT_MANAGE.NEW_PRODUCT_QUANTITY_ID,
  ];
  const newProductData = [productNameInput, productPriceInput, productQuantityInput].map(
    (input, key) => ({ text: input.value, id: newProductId[key] })
  );
  clearInputValue(productNameInput, productPriceInput, productQuantityInput);
  return newProductData;
};

const updateTable = () => {
  const tableBodyArea = document.getElementById("product-table-body");
  makeTableRow(tableBodyArea, PRODUCT_MANAGE.NEW_PRODUCT_ID, getNewProductData());
};

const renderInputForm = container => {
  const inputFormArea = makeElement({ tag: "form" });
  const inputFormTitle = makeElement({
    tag: "h3",
    innerText: PRODUCT_MANAGE.ADD_PRODUCT_TEXT,
  });
  const productNameInput = makeElement({
    tag: "input",
    type: "text",
    id: PRODUCT_MANAGE.PRODUCT_NAME.ID,
    placeholder: PRODUCT_MANAGE.PRODUCT_NAME.TEXT,
  });
  const productPriceInput = makeElement({
    tag: "input",
    type: "number",
    id: PRODUCT_MANAGE.PRICE.ID,
    placeholder: PRODUCT_MANAGE.PRICE.TEXT,
  });
  const productQuantityInput = makeElement({
    tag: "input",
    type: "number",
    id: PRODUCT_MANAGE.QUANTITY.ID,
    placeholder: PRODUCT_MANAGE.QUANTITY.TEXT,
  });
  const productAddButton = makeElement({
    tag: "button",
    type: "button",
    id: PRODUCT_MANAGE.ADD_BUTTON.ID,
    innerText: PRODUCT_MANAGE.ADD_BUTTON.TEXT,
  });
  productAddButton.addEventListener("click", () => updateTable());

  inputFormArea.append(
    inputFormTitle,
    productNameInput,
    productPriceInput,
    productQuantityInput,
    productAddButton
  );
  container.append(inputFormArea);
};

const renderProductTable = container => {
  const productTableTitle = makeElement({ tag: "h3", innerText: PRODUCT_MANAGE.TABLE_TEXT });
  const tableHeadText = [
    PRODUCT_MANAGE.PRODUCT_NAME.TEXT,
    PRODUCT_MANAGE.PRICE.TEXT,
    PRODUCT_MANAGE.QUANTITY.TEXT,
  ];
  const tableBodyId = "product-table-body";
  const tableArea = makeTableForm(tableHeadText, tableBodyId);
  container.append(productTableTitle, tableArea);
};

const productAddView = container => {
  clearArea(container);
  renderInputForm(container);
  renderProductTable(container);
};

export default productAddView;
