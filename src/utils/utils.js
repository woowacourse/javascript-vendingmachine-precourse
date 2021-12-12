import { makeHeader, makeView } from "../views/publicView.js";
import {
  COIN_TABLE,
  INPUT_WITDH,
  MARGIN_SIZE,
  PRODUCT_TABLE,
} from "./constants.js";

export const initializeHeader = () => {
  const $app = document.getElementById("app");
  $app.appendChild(makeHeader());
  $app.appendChild(makeView());
};

export const makeTitle = title => {
  const h3 = document.createElement("h3");
  h3.innerText = title;

  return h3;
};

export const makeInput = inputInformation => {
  const [placeholder, id, type] = inputInformation;
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.type = type;
  input.id = id;
  input.style.width = INPUT_WITDH;
  input.style.margin = MARGIN_SIZE;

  return input;
};

export const makeButton = (buttonInformation, event) => {
  const [type, text, id] = buttonInformation;
  const button = document.createElement("button");
  button.type = type;
  button.innerText = text;
  button.id = id;
  button.addEventListener("click", event);

  return button;
};

export const makeInputForm = (inputInformation, buttonInformation, event) => {
  const form = document.createElement("form");
  form.appendChild(makeInput(inputInformation));
  form.appendChild(makeButton(buttonInformation, event));

  return form;
};

const makeResultHeader = text => {
  const span = document.createElement("span");
  span.innerText = text;

  return span;
};

const makeResultValue = id => {
  const span = document.createElement("span");
  span.id = id;

  return span;
};

export const makeResultContainer = (text, id) => {
  const div = document.createElement("div");
  div.appendChild(makeResultHeader(text));
  div.appendChild(makeResultValue(id));

  return div;
};

const makeTableHeader = (header, table) => {
  const th = document.createElement("th");
  th.style.border = table.border;
  th.style.padding = table.padding;
  th.style.paddingLeft = table.paddingWidth;
  th.style.paddingRight = table.paddingWidth;
  th.innerText = header;

  return th;
};

export const makeTableHeaders = (headers, table) => {
  const tr = document.createElement("tr");
  headers.forEach(header => tr.appendChild(makeTableHeader(header, table)));

  return tr;
};

export const makeTdWithClass = (text, className) => {
  const td = document.createElement("td");
  td.innerText = text;
  td.className = className;
  td.style.border = PRODUCT_TABLE.border;

  return td;
};

const makeCoin = title => {
  const td = document.createElement("td");
  td.innerText = title;
  td.style.border = COIN_TABLE.border;
  td.style.padding = COIN_TABLE.padding;

  return td;
};

const makeQuantity = id => {
  const td = document.createElement("td");
  td.id = id;
  td.style.border = COIN_TABLE.border;

  return td;
};

const makeCoinRaw = raw => {
  const [title, id] = raw;
  const tr = document.createElement("tr");
  tr.append(makeCoin(title));
  tr.append(makeQuantity(id));

  return tr;
};

export const makeCoinTable = (headers, raws) => {
  const table = document.createElement("table");
  table.style.borderCollapse = COIN_TABLE.collapse;
  table.style.textAlign = COIN_TABLE.textAlign;
  table.appendChild(makeTableHeaders(headers, COIN_TABLE));
  raws.forEach(raw => table.appendChild(makeCoinRaw(raw)));

  return table;
};

export const makeChangeStateContainer = (title, headers, raws) => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(title));
  div.appendChild(makeCoinTable(headers, raws));

  return div;
};

export const saveToLocalStorage = vendingMachine => {
  const products = JSON.stringify(vendingMachine.getProducts());
  localStorage["products"] = products;
  localStorage["coins"] = vendingMachine.getCoins();
  localStorage["insertedMoney"] = vendingMachine.getMoney();
};
