import { COIN_MANAGE } from "../constant/vendingMachine.js";

export const makeElement = ({ tag, id, innerText, type, placeholder, className, hasDataset }) => {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (className) element.classList.add(className);
  if (innerText) element.innerText = innerText;
  if (type) element.type = type;
  if (placeholder) element.placeholder = placeholder;
  if (hasDataset) {
    element.setAttribute(hasDataset.key, hasDataset.value);
  }
  return element;
};

export const makeTableForm = (theadText, tableBodyId = "") => {
  const tableArea = makeElement({ tag: "table" });
  const tableHead = makeElement({ tag: "thead" });
  theadText.forEach(tableHeadText => {
    const th = makeElement({ tag: "th", innerText: tableHeadText });
    tableHead.appendChild(th);
  });
  const tableBody = makeElement({ tag: "tbody", id: tableBodyId });
  tableArea.append(tableHead, tableBody);
  return tableArea;
};

export const makeTableRow = (elements, rowClass = "", button = "", dataSet = "") => {
  const tr = makeElement({ tag: "tr", className: rowClass });
  elements.forEach((rowData, index) => {
    const element = makeElement({
      tag: "td",
      innerText: rowData.text,
      id: rowData.id,
      className: rowData.class,
      hasDataset: dataSet && { key: dataSet[index], value: rowData.text },
    });
    tr.appendChild(element);
  });
  if (button) tr.appendChild(button);
  return tr;
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
    const tableRow = makeTableRow(coin);
    tableBodyArea.appendChild(tableRow);
  });
  tableHead.appendChild(tableBodyArea);
};

export const renderCoinAmount = (renderPage, currentCoinToHave) => {
  renderPage.COIN_TO_USE.forEach(coin => {
    const coinKey = coin.QUANTITY_ID.match(/\d+/g).pop();
    const coinAmountArea = document.getElementById(coin.QUANTITY_ID);
    coinAmountArea.innerText = `${currentCoinToHave[coinKey]}개`;
  });
};
