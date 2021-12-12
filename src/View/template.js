import { COIN_MANAGE } from "../constant/vendingMachine.js";

export const makeElement = ({ tag, id, innerText, type, placeholder }) => {
  const element = document.createElement(tag);
  if (id) {
    element.id = id;
  }
  if (innerText) {
    element.innerText = innerText;
  }
  if (type) {
    element.type = type;
  }
  if (placeholder) {
    element.placeholder = placeholder;
  }
  return element;
};

export const makeTableForm = (theadText, tableBodyId) => {
  const tableArea = makeElement({ tag: "table" });
  theadText.forEach(tableHeadText => {
    const th = makeElement({ tag: "th", innerText: tableHeadText });
    tableArea.appendChild(th);
  });
  const tableBody = makeElement({ tag: "tbody", id: tableBodyId });
  tableArea.appendChild(tableBody);
  return tableArea;
};

export const makeTableRow = (container, elements, rowId, button = "") => {
  const tr = makeElement({ tag: "tr", id: rowId });
  elements.forEach(rowData => {
    const element = makeElement({ tag: "td", innerText: rowData.text, id: rowData.id });
    tr.appendChild(element);
  });
  if (button) tr.appendChild(button);
  container.appendChild(tr);
};

export const makeInputNumberFormToPrint = ({ TEXT, INPUT, BUTTON }) => {
  const container = makeElement({ tag: "div" });
  const inputFormTitle = makeElement({ tag: "h3", innerText: TEXT.INPUT_FORM_TITLE });
  const input = makeElement({
    tag: "input",
    type: "number",
    placeholder: INPUT.PLACE_HOLDER,
    id: INPUT.ID,
  });
  const button = makeElement({
    tag: "button",
    type: "button",
    innerText: BUTTON.INNER_TEXT,
    id: BUTTON.ID,
  });
  const printTextArea = makeElement({ tag: "p" });
  const printLabel = makeElement({
    tag: "span",
    innerText: TEXT.PRINT_LABEL,
  });
  const printText = makeElement({ tag: "span", id: TEXT.PRINT_AMOUNT_ID });

  button.addEventListener("click", () => BUTTON.handleClickEvent());
  printTextArea.append(printLabel, printText);
  container.append(inputFormTitle, input, button, printTextArea);
  return container;
};

export const renderCoinTable = (container, tableBodyId, coinToUse) => {
  const tableHead = makeTableForm(COIN_MANAGE.COLUMNS, tableBodyId);
  container.appendChild(tableHead);
  const tableBodyArea = document.getElementById(tableBodyId);
  coinToUse.forEach(coinData => {
    const coin = [{ text: coinData.TEXT }, { id: coinData.QUANTITY_ID }];
    makeTableRow(tableBodyArea, coin);
  });
};
