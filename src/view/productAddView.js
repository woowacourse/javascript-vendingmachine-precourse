import { clearArea, clearInputValue } from "../utils.js";
import { makeElement, makeTableRow } from "./template.js";
import { PRODUCT_MANAGE } from "../constant/vendingMachine.js";

const getNewProductData = () => {
  const productNameInput = document.getElementById("product-name-input");
  const productPriceInput = document.getElementById("product-price-input");
  const productQuantityInput = document.getElementById("product-quantity-input");
  const newProductData = [productNameInput, productPriceInput, productQuantityInput].map(
    input => input.value
  );
  clearInputValue(productNameInput, productPriceInput, productQuantityInput);
  return newProductData;
};

const updateTable = () => {
  const tableBodyArea = document.getElementById("product-table-body");
  makeTableRow(tableBodyArea, getNewProductData(), "td");
};

const renderInputForm = container => {
  const inputFormArea = makeElement({ tag: "form" });
  const inputFormTitle = makeElement({
    tag: "h2",
    innerText: PRODUCT_MANAGE.ADD_PRODUCT_TEXT,
  });
  const productNameInput = makeElement({
    tag: "input",
    id: "product-name-input",
    type: "text",
    placeholder: PRODUCT_MANAGE.PRODUCT_NAME,
  });
  const productPriceInput = makeElement({
    tag: "input",
    id: "product-price-input",
    type: "number",
    placeholder: PRODUCT_MANAGE.PRICE,
  });
  const productQuantityInput = makeElement({
    tag: "input",
    id: "product-quantity-input",
    type: "number",
    placeholder: PRODUCT_MANAGE.QUANTITY,
  });
  const productAddButton = makeElement({
    tag: "button",
    id: "product-add-button",
    innerText: PRODUCT_MANAGE.ADD_BUTTON,
    type: "button",
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
  const productTableTitle = makeElement({ tag: "h2", innerText: PRODUCT_MANAGE.TABLE_TEXT });
  const tableArea = makeElement({ tag: "table" });
  makeTableRow(
    tableArea,
    [PRODUCT_MANAGE.PRODUCT_NAME, PRODUCT_MANAGE.PRICE, PRODUCT_MANAGE.QUANTITY],
    "th"
  );
  const tbody = makeElement({ tag: "tbody", id: "product-table-body" });

  tableArea.append(tbody);
  container.append(productTableTitle, tableArea);
};

const productAddView = container => {
  clearArea(container);
  renderInputForm(container);
  renderProductTable(container);
};

export default productAddView;
