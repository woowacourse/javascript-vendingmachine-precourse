import {
  ID,
  IS_RENDERED_INSERTED_MONEY,
  IS_RENDERED_RETURN_CHANGES,
  PRODUCT_TABLE,
  VIEW_CONTAINER,
} from "../assets/constants/public.js";
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
} from "../assets/utils/utils.js";
import { PURCHASE_TAP } from "../assets/constants/purchaseTap.js";
import {
  getQuantityTag,
  onClickInsertButton,
  onClickPurchaseButton,
  onClickReturnButton,
} from "../controllers/purchaseProductController.js";

// ----금액 투입하기 폼----
const makeInsertMoneyContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(PURCHASE_TAP.INSERT_MONEY_TITLE));
  div.appendChild(
    makeInputForm(
      PURCHASE_TAP.INSERT_MONEY_INPUT,
      PURCHASE_TAP.INSERT_MONEY_BUTTON,
      onClickInsertButton
    )
  );
  div.appendChild(
    makeResultContainer(
      PURCHASE_TAP.INSERT_MONEY_AMOUNT_TITLE,
      PURCHASE_TAP.INSERT_MONEY_AMOUNT_ID
    )
  );

  return div;
};

export const renderMoney = money => {
  const $charge_amount = document.getElementById(
    PURCHASE_TAP.INSERT_MONEY_AMOUNT_ID
  );
  $charge_amount.innerText = getMoneyText(money);
};

// ----상품 현황----
const makeproductStateTableButton = () => {
  const td = document.createElement("td");
  td.style.border = PRODUCT_TABLE.border;
  td.appendChild(
    makeButton(PURCHASE_TAP.PRODUCT_STATE_BUTTON, onClickPurchaseButton)
  );

  return td;
};

const makeproductStateTableRaw = product => {
  const information = product.getInformation();
  const tr = document.createElement("tr");
  information.forEach((tag, index) =>
    tr.appendChild(
      makeTdWithClass(tag, PURCHASE_TAP.PRODUCT_STATE_CLASSES[index])
    )
  );
  tr.appendChild(makeproductStateTableButton());

  return tr;
};

const makeproductStateTable = purchaseProduct => {
  const table = document.createElement("table");
  table.style.borderCollapse = PRODUCT_TABLE.collapse;
  table.style.textAlign = PRODUCT_TABLE.textAlign;
  table.appendChild(
    makeTableHeaders(PURCHASE_TAP.PRODUCT_STATE_TABLE_HEADERS, PRODUCT_TABLE)
  );
  purchaseProduct.products.forEach(product =>
    table.appendChild(makeproductStateTableRaw(product))
  );

  return table;
};

const makeproductStateContainer = purchaseProduct => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(PURCHASE_TAP.PRODUCT_STATE_TITLE));
  div.appendChild(makeproductStateTable(purchaseProduct));

  return div;
};

const updateQuantity = quantity => {
  quantity.innerText = parseInt(quantity.innerText) - 1;
};

export const renderPurchase = (pruchaseProduct, form) => {
  renderMoney(pruchaseProduct.getMoney());
  updateQuantity(getQuantityTag(form));
};

// ----잔돈 현황----
const makeChangeStateContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(PURCHASE_TAP.CHANGE_STATE_TITLE));
  div.appendChild(
    makeButton(PURCHASE_TAP.CHANGE_STATE_BUTTON, onClickReturnButton)
  );
  div.appendChild(
    makeCoinTable(
      PURCHASE_TAP.CHANGE_STATE_TABLE_HEADERS,
      PURCHASE_TAP.CHANGE_STATE_TABLE_RAWS
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
  PURCHASE_TAP.CHANGE_STATE_TABLE_RAWS.forEach((raw, index) => {
    document.getElementById(`${raw[ID]}`).innerText = getQuantityText(
      changes[index]
    );
  });
};

export const renderPurchaseProductMenuView = purchaseProduct => {
  const $view_container = document.getElementById(VIEW_CONTAINER);
  $view_container.appendChild(makeInsertMoneyContainer());
  $view_container.appendChild(makeproductStateContainer(purchaseProduct));
  $view_container.appendChild(makeChangeStateContainer());

  if (localStorage.getItem(IS_RENDERED_INSERTED_MONEY) === "TRUE") {
    renderMoney(purchaseProduct.getMoney());
  }
  const returnChanges = localStorage.getItem(IS_RENDERED_RETURN_CHANGES);
  if (returnChanges) {
    renderChanges(stringToIntegerArray(returnChanges));
  }
};
