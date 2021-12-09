import { onClickChargeButton } from "../menus/chargeChangeMenu.js";
import { CHARGE_CHANGE_TAP, COIN_TABLE } from "../utils/constants.js";

// ----자판기 동전 충전하기 폼 렌더링 함수----
const makeChargeChangeTitle = () => {
  const title = document.createElement("h3");
  title.innerText = CHARGE_CHANGE_TAP.chargeChangeTitle;

  return title;
};

const makeInput = () => {
  const input = document.createElement("input");
  input.placeholder = CHARGE_CHANGE_TAP.chargeInputPlaceHolder;
  input.type = CHARGE_CHANGE_TAP.chargeInputType;
  input.id = CHARGE_CHANGE_TAP.chargeInputId;

  return input;
};

const makeChargeButton = () => {
  const button = document.createElement("button");
  button.innerText = CHARGE_CHANGE_TAP.chargeButtonText;
  button.id = CHARGE_CHANGE_TAP.chargeButtonId;
  button.addEventListener("click", onClickChargeButton);

  return button;
};

const makeAmountHeader = () => {
  const span = document.createElement("span");
  span.innerText = CHARGE_CHANGE_TAP.changeAmoutHeader;

  return span;
};

const makeAmoutValue = () => {
  const span = document.createElement("span");
  span.id = CHARGE_CHANGE_TAP.changeAmoutId;

  return span;
};

const makeAmoutChange = () => {
  const div = document.createElement("div");
  div.appendChild(makeAmountHeader());
  div.appendChild(makeAmoutValue());

  return div;
};

const makeChargeChangeForm = () => {
  const form = document.createElement("form");
  form.appendChild(makeInput());
  form.appendChild(makeChargeButton());
  form.appendChild(makeAmoutChange());

  return form;
};

const makeChargeChangeContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeChargeChangeTitle());
  div.appendChild(makeChargeChangeForm());

  return div;
};

export const renderChangeAmount = money => {
  const $vending_machine_charge_amount = document.getElementById(
    CHARGE_CHANGE_TAP.changeAmoutId
  );
  $vending_machine_charge_amount.innerText = money;
};

// ----자판기가 보유한 동전 렌더링 함수----
const makeChangeStateTitle = () => {
  const h3 = document.createElement("h3");
  h3.innerText = CHARGE_CHANGE_TAP.changeStateTitle;

  return h3;
};

const makeTableHeader = name => {
  const th = document.createElement("th");
  th.innerText = name;
  th.style.border = COIN_TABLE.border;
  th.style.padding = COIN_TABLE.padding;
  th.style.paddingLeft = COIN_TABLE.paddingWidth;
  th.style.paddingRight = COIN_TABLE.paddingWidth;

  return th;
};

const makeTableHeaders = () => {
  const tr = document.createElement("tr");
  CHARGE_CHANGE_TAP.changeStateTableHeader.forEach(header =>
    tr.appendChild(makeTableHeader(header))
  );

  return tr;
};

const makeChangeStateCoin = title => {
  const td = document.createElement("td");
  td.innerText = title;
  td.style.border = COIN_TABLE.border;
  td.style.padding = COIN_TABLE.padding;

  return td;
};

const makeChangeStateQuantity = id => {
  const td = document.createElement("td");
  td.id = id;
  td.style.border = COIN_TABLE.border;

  return td;
};

const makeChangeStateRaw = rawInformation => {
  const [title, id] = rawInformation;
  const tr = document.createElement("tr");
  tr.append(makeChangeStateCoin(title));
  tr.append(makeChangeStateQuantity(id));

  return tr;
};

const makeChangeStateGraph = () => {
  const table = document.createElement("table");
  table.style.borderCollapse = COIN_TABLE.collapse;
  table.style.textAlign = COIN_TABLE.textAlign;
  table.appendChild(makeTableHeaders());
  CHARGE_CHANGE_TAP.changeStateTableRaws.forEach(rawInformation =>
    table.appendChild(makeChangeStateRaw(rawInformation))
  );

  return table;
};

const makeChangeStateContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeChangeStateTitle());
  div.appendChild(makeChangeStateGraph());

  return div;
};

export const renderCoins = vendingMachine => {
  const coins = vendingMachine.getCoins();
  CHARGE_CHANGE_TAP.changeStateTableRaws.forEach((rawInformation, index) => {
    document.getElementById(
      `${rawInformation[1]}`
    ).innerText = `${coins[index]}개`;
  });
};

export const renderChargeChangeMenuView = () => {
  const $view_container = document.getElementById("view-container");
  $view_container.appendChild(makeChargeChangeContainer());
  $view_container.appendChild(makeChangeStateContainer());
};
