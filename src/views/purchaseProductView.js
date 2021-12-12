import { PRODUCT_TABLE, PURCHASE_PRODUCT_TAP } from "../utils/constants.js";
import { vendingMachine } from "../components/vendingMachine.js";
import {
  makeButton,
  makeCoinTable,
  makeInputForm,
  makeResultContainer,
  makeTableHeaders,
  makeTdWithClass,
  makeTitle,
} from "../utils/utils.js";
import {
  onClickInsertButton,
  onClickPurchaseButton,
  onClickReturnButton,
} from "../menus/purchaseProductMenu.js";

// ----금액 투입하기 폼----
const makeInsertMoneyContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(PURCHASE_PRODUCT_TAP.insertMoneyTitle));
  div.appendChild(
    makeInputForm(
      PURCHASE_PRODUCT_TAP.insertMoneyInputInformation,
      PURCHASE_PRODUCT_TAP.insertMoneyButtonInformation,
      onClickInsertButton
    )
  );
  div.appendChild(
    makeResultContainer(
      PURCHASE_PRODUCT_TAP.insertMoneyAmountTitle,
      PURCHASE_PRODUCT_TAP.insertMoneyAmountId
    )
  );

  return div;
};

export const renderMoney = money => {
  const $charge_amount = document.getElementById(
    PURCHASE_PRODUCT_TAP.insertMoneyAmountId
  );
  $charge_amount.innerText = money;
};

// ----상품 현황----
const makeproductStateTableButton = () => {
  const td = document.createElement("td");
  td.style.border = PRODUCT_TABLE.border;
  td.appendChild(
    makeButton(PURCHASE_PRODUCT_TAP.productStateButton, onClickPurchaseButton)
  );

  return td;
};

const makeproductStateTableRaw = product => {
  const [name, price, quantity] = product.getInformation();
  const tr = document.createElement("tr");
  tr.appendChild(makeTdWithClass(name, PURCHASE_PRODUCT_TAP.productStateName));
  tr.appendChild(
    makeTdWithClass(price, PURCHASE_PRODUCT_TAP.productStatePrice)
  );
  tr.appendChild(
    makeTdWithClass(quantity, PURCHASE_PRODUCT_TAP.productStateQuantity)
  );
  tr.appendChild(makeproductStateTableButton());

  return tr;
};

const makeproductStateTable = () => {
  const table = document.createElement("table");
  table.style.borderCollapse = PRODUCT_TABLE.collapse;
  table.style.textAlign = PRODUCT_TABLE.textAlign;
  table.appendChild(
    makeTableHeaders(
      PURCHASE_PRODUCT_TAP.productStateTableHeaders,
      PRODUCT_TABLE
    )
  );
  vendingMachine.products.forEach(product =>
    table.appendChild(makeproductStateTableRaw(product))
  );

  return table;
};

const makeproductStateContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(PURCHASE_PRODUCT_TAP.productStateTitle));
  div.appendChild(makeproductStateTable());

  return div;
};

// ----잔돈 현황----
const makeChangeStateContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(PURCHASE_PRODUCT_TAP.changeStateTitle));
  div.appendChild(
    makeButton(
      PURCHASE_PRODUCT_TAP.changeStateButtonInformation,
      onClickReturnButton
    )
  );
  div.appendChild(
    makeCoinTable(
      PURCHASE_PRODUCT_TAP.changeStateTableHeader,
      PURCHASE_PRODUCT_TAP.changeStateTableRaws
    )
  );

  return div;
};

const stringToIntegerArray = string => {
  const result = string
    .slice(0, string.length)
    .split(",")
    .map(num => parseInt(num));

  return result;
};

export const renderChanges = changes => {
  PURCHASE_PRODUCT_TAP.changeStateTableRaws.forEach((raw, index) => {
    document.getElementById(`${raw[1]}`).innerText = `${changes[index]}개`;
  });
};

export const renderPurchaseProductMenuView = () => {
  const $view_container = document.getElementById("view-container");
  $view_container.appendChild(makeInsertMoneyContainer());
  $view_container.appendChild(makeproductStateContainer());
  $view_container.appendChild(makeChangeStateContainer());

  if (localStorage.getItem("isRenderInsertedMoney") === "TRUE") {
    renderMoney(vendingMachine.getMoney());
  }
  const returnChanges = localStorage.getItem("returnChanges");
  if (returnChanges) {
    renderChanges(stringToIntegerArray(returnChanges));
  }
};
