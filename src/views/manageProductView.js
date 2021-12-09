import {
  MANAGE_PRODUCT_TAP,
  INPUT_WITDH,
  MARGIN_SIZE,
  PRODUCT_TABLE,
} from "../utils/constants.js";
import { onClickAddButton } from "../menus/manageProductMenu.js";

const makeAddProductTitle = () => {
  const title = document.createElement("h3");
  title.innerText = MANAGE_PRODUCT_TAP.addProductTitle;

  return title;
};

const makeInput = inputInformation => {
  const [placeholder, id] = inputInformation;
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.id = id;
  input.style.width = INPUT_WITDH;
  input.style.margin = MARGIN_SIZE;

  return input;
};

const makeNameTd = name => {
  const td = document.createElement("td");
  td.innerText = name;
  td.class = MANAGE_PRODUCT_TAP.productNameClass;
  td.style.border = PRODUCT_TABLE.border;

  return td;
};

const makePriceTd = price => {
  const td = document.createElement("td");
  td.innerText = price;
  td.class = MANAGE_PRODUCT_TAP.productNameClass;
  td.style.border = PRODUCT_TABLE.border;

  return td;
};

const makeQuantityTd = quantity => {
  const td = document.createElement("td");
  td.innerText = quantity;
  td.class = MANAGE_PRODUCT_TAP.productNameClass;
  td.style.border = PRODUCT_TABLE.border;

  return td;
};

const makeProductRaw = product => {
  const tableRaw = document.createElement("tr");
  tableRaw.class = MANAGE_PRODUCT_TAP.productTableRawClass;
  tableRaw.appendChild(makeNameTd(product.name));
  tableRaw.appendChild(makePriceTd(product.price));
  tableRaw.appendChild(makeQuantityTd(product.quantity));

  return tableRaw;
};

const makeAddButton = () => {
  const [text, id] = MANAGE_PRODUCT_TAP.addProductButton;
  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = text;
  button.id = id;
  button.style.margin = MARGIN_SIZE;
  button.addEventListener("click", onClickAddButton);

  return button;
};

const makeInputForm = () => {
  const form = document.createElement("form");
  MANAGE_PRODUCT_TAP.addProductInputs.forEach(input =>
    form.appendChild(makeInput(input))
  );
  form.appendChild(makeAddButton());

  return form;
};

const makeAddProductContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeAddProductTitle());
  div.appendChild(makeInputForm());

  return div;
};

const makeProductStateTitle = () => {
  const title = document.createElement("h3");
  title.innerText = MANAGE_PRODUCT_TAP.productStateTitle;

  return title;
};

const makeTableHeader = name => {
  const header = document.createElement("th");
  header.innerText = name;
  header.style.border = PRODUCT_TABLE.border;
  header.style.padding = PRODUCT_TABLE.padding;
  header.style.paddingLeft = PRODUCT_TABLE.paddingWidth;
  header.style.paddingRight = PRODUCT_TABLE.paddingWidth;

  return header;
};

const makeTableHeaders = () => {
  const tableRaw = document.createElement("tr");
  MANAGE_PRODUCT_TAP.productStateTableHeader.forEach(header =>
    tableRaw.appendChild(makeTableHeader(header))
  );

  return tableRaw;
};

const makeProductStateGraph = () => {
  const table = document.createElement("table");
  table.appendChild(makeTableHeaders());
  table.style.borderCollapse = PRODUCT_TABLE.collapse;
  table.style.textAlign = PRODUCT_TABLE.textAlign;

  return table;
};

const makeProductStateContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeProductStateTitle());
  div.appendChild(makeProductStateGraph());

  return div;
};

export const renderProduct = product => {
  const $table = document.querySelector("table");
  $table.appendChild(makeProductRaw(product));
};

export const renderManageProductMenuView = () => {
  const $view_container = document.getElementById("view-container");
  $view_container.appendChild(makeAddProductContainer());
  $view_container.appendChild(makeProductStateContainer());
};
