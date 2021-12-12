import {
  ID,
  IS_RENDERED_INSERTED_MONEY,
  IS_RENDERED_RETURN_CHANGES,
  PRODUCT_TABLE,
  PURCHASE_TAP,
  VIEW_CONTAINER,
} from "../utils/constants.js";
import { vendingMachine } from "../components/vendingMachine.js";
import {
  getMoneyText,
  getQuantityText,
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
  div.appendChild(makeTitle(PURCHASE_TAP.insertMoneyTitle));
  div.appendChild(
    makeInputForm(
      PURCHASE_TAP.insertMoneyInput,
      PURCHASE_TAP.insertMoneyButton,
      onClickInsertButton
    )
  );
  div.appendChild(
    makeResultContainer(
      PURCHASE_TAP.insertMoneyAmountTitle,
      PURCHASE_TAP.insertMoneyAmountId
    )
  );

  return div;
};

export const renderMoney = money => {
  const $charge_amount = document.getElementById(
    PURCHASE_TAP.insertMoneyAmountId
  );
  $charge_amount.innerText = getMoneyText(money);
};

// ----상품 현황----
const makeproductStateTableButton = () => {
  const td = document.createElement("td");
  td.style.border = PRODUCT_TABLE.border;
  td.appendChild(
    makeButton(PURCHASE_TAP.productStateButton, onClickPurchaseButton)
  );

  return td;
};

const makeproductStateTableRaw = product => {
  const information = product.getInformation();
  const tr = document.createElement("tr");
  information.forEach((tag, index) =>
    tr.appendChild(makeTdWithClass(tag, PURCHASE_TAP.productStateIds[index]))
  );
  tr.appendChild(makeproductStateTableButton());

  return tr;
};

const makeproductStateTable = () => {
  const table = document.createElement("table");
  table.style.borderCollapse = PRODUCT_TABLE.collapse;
  table.style.textAlign = PRODUCT_TABLE.textAlign;
  table.appendChild(
    makeTableHeaders(PURCHASE_TAP.productStateTableHeaders, PRODUCT_TABLE)
  );
  vendingMachine.products.forEach(product =>
    table.appendChild(makeproductStateTableRaw(product))
  );

  return table;
};

const makeproductStateContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(PURCHASE_TAP.productStateTitle));
  div.appendChild(makeproductStateTable());

  return div;
};

// ----잔돈 현황----
const makeChangeStateContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(PURCHASE_TAP.changeStateTitle));
  div.appendChild(
    makeButton(PURCHASE_TAP.changeStateButton, onClickReturnButton)
  );
  div.appendChild(
    makeCoinTable(
      PURCHASE_TAP.changeStateTableHeaders,
      PURCHASE_TAP.changeStateTableRaws
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
  PURCHASE_TAP.changeStateTableRaws.forEach((raw, index) => {
    document.getElementById(`${raw[ID]}`).innerText = getQuantityText(
      changes[index]
    );
  });
};

export const renderPurchaseProductMenuView = () => {
  const $view_container = document.getElementById(VIEW_CONTAINER);
  $view_container.appendChild(makeInsertMoneyContainer());
  $view_container.appendChild(makeproductStateContainer());
  $view_container.appendChild(makeChangeStateContainer());

  if (localStorage.getItem(IS_RENDERED_INSERTED_MONEY) === "TRUE") {
    renderMoney(vendingMachine.getMoney());
  }
  const returnChanges = localStorage.getItem(IS_RENDERED_RETURN_CHANGES);
  if (returnChanges) {
    renderChanges(stringToIntegerArray(returnChanges));
  }
};
