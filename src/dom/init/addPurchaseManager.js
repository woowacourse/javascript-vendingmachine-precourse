import { app } from '../domElement.js';
import {
  BUTTON,
  TABLE,
  TABLE_HEAD,
  TABLE_ROW,
  TABLE_HEADER,
  TABLE_BODY,
  ONE,
  THREE,
  PRODUCT_NAME_TEXT,
  PRICE_TEXT,
  QUANTITY_TEXT,
  DIV,
  NONE,
  ID,
  H2,
  INPUT,
  TYPE,
  NUMBER,
  COLLAPSE,
  INPUT_COIN_TEXT,
  COIN_TO_INPUT_TEXT,
  INPUT_TEXT,
  SPAN,
  COIN_AFTER_INPUT_TEXT,
  PRODUCT_LIST_CAN_PURCHASE_TEXT,
  CHANGES_TEXT,
  COIN_TEXT,
  COUNT_TEXT,
  TABLE_DATA,
  RETURN_TEXT,
  PURCHASE_TEXT,
  COIN_LIST,
  COIN_ID_LIST,
} from '../../constants.js';

export const addPurchaseManager = () => {
  const purchaseManager = document.createElement(DIV);

  purchaseManager.style.display = NONE;
  purchaseManager.dataset.num = THREE;
  purchaseManager.setAttribute(ID, 'purchase-manager');
  purchaseManager.append(
    createChargeForm(),
    createPurchaseList(),
    createCoinList()
  );

  app.appendChild(purchaseManager);
};

// charge form

const createChargeForm = () => {
  const chargeForm = document.createElement(DIV);

  chargeForm.append(
    createChargeFormTitle(),
    createChargeInput(),
    createChargeButton(),
    createAmountText()
  );

  return chargeForm;
};

const createChargeFormTitle = () => {
  const chargeFormTitle = document.createElement(H2);
  chargeFormTitle.innerHTML = INPUT_COIN_TEXT;

  return chargeFormTitle;
};

const createChargeInput = () => {
  const chargeInput = document.createElement(INPUT);
  chargeInput.setAttribute(TYPE, NUMBER);
  chargeInput.placeholder = COIN_TO_INPUT_TEXT;
  chargeInput.setAttribute(ID, 'charge-input');

  return chargeInput;
};

const createChargeButton = () => {
  const chargeButton = document.createElement(BUTTON);
  chargeButton.setAttribute(ID, 'charge-button');
  chargeButton.innerHTML = INPUT_TEXT;

  return chargeButton;
};

const createAmountText = () => {
  const Amount = document.createElement(DIV);
  const AmountTitle = document.createElement(SPAN);
  const AmountText = document.createElement(SPAN);

  AmountTitle.innerHTML = COIN_AFTER_INPUT_TEXT;
  AmountText.setAttribute(ID, 'charge-amount');
  Amount.append(AmountTitle, AmountText);

  return Amount;
};

// purchase list

const createPurchaseList = () => {
  const purChaseList = document.createElement(DIV);

  purChaseList.append(createPurchaseListTitle(), createPurchaseTable());

  return purChaseList;
};

const createPurchaseListTitle = () => {
  const title = document.createElement(H2);
  title.innerHTML = PRODUCT_LIST_CAN_PURCHASE_TEXT;

  return title;
};

const createPurchaseTable = () => {
  const table = document.createElement(TABLE);

  table.border = ONE;
  table.style.borderCollapse = COLLAPSE;
  table.append(createPurchaseListTableHead(), createPurchaseListTableBody());

  return table;
};

const createPurchaseListTableHead = () => {
  const tableHead = document.createElement(TABLE_HEAD);

  tableHead.append(createPurchaseListTableHeadRow());

  return tableHead;
};

const createPurchaseListTableHeadRow = () => {
  const tableRow = document.createElement(TABLE_ROW);

  createPurchaseListTableHeader().forEach((header) => {
    tableRow.appendChild(header);
  });

  return tableRow;
};

const createPurchaseListTableHeader = () => {
  const purchaseNameCell = document.createElement(TABLE_HEADER);
  const priceCell = document.createElement(TABLE_HEADER);
  const QuantityCell = document.createElement(TABLE_HEADER);
  const purchaseButtonCell = document.createElement(TABLE_HEADER);

  purchaseNameCell.innerHTML = PRODUCT_NAME_TEXT;
  priceCell.innerHTML = PRICE_TEXT;
  QuantityCell.innerHTML = QUANTITY_TEXT;
  purchaseButtonCell.innerHTML = PURCHASE_TEXT;

  return [purchaseNameCell, priceCell, QuantityCell, purchaseButtonCell];
};

const createPurchaseListTableBody = () => {
  const tableBody = document.createElement(TABLE_BODY);

  tableBody.setAttribute(ID, 'purchase-manager-purchase-table-body');

  return tableBody;
};

// coin list

const createCoinList = () => {
  const coinList = document.createElement(DIV);

  coinList.append(
    createCoinListTitle(),
    createCoinReturnButton(),
    createCoinTable()
  );

  return coinList;
};

const createCoinListTitle = () => {
  const title = document.createElement(H2);
  title.innerHTML = CHANGES_TEXT;

  return title;
};

const createCoinReturnButton = () => {
  const returnButton = document.createElement(BUTTON);

  returnButton.innerHTML = RETURN_TEXT;
  returnButton.setAttribute(ID, 'coin-return-button');

  return returnButton;
};

const createCoinTable = () => {
  const table = document.createElement(TABLE);

  table.border = ONE;
  table.style.borderCollapse = COLLAPSE;
  table.append(createCoinListTableHead(), createCoinListTableBody());

  return table;
};

const createCoinListTableHead = () => {
  const tableHead = document.createElement(TABLE_HEAD);

  tableHead.append(createCoinListTableHeadRow());

  return tableHead;
};

const createCoinListTableHeadRow = () => {
  const tableRow = document.createElement(TABLE_ROW);
  const coinNameCell = document.createElement(TABLE_HEADER);
  const countCell = document.createElement(TABLE_HEADER);

  coinNameCell.innerHTML = COIN_TEXT;
  countCell.innerHTML = COUNT_TEXT;

  tableRow.append(coinNameCell, countCell);

  return tableRow;
};

const createCoinListTableBody = () => {
  const tableBody = document.createElement(TABLE_BODY);
  tableBody.setAttribute(ID, 'coin-return-table-body');

  let index = 0;
  for (index = 0; index < COIN_LIST.length; index++) {
    tableBody.appendChild(
      createCoinListTableBodyRow(COIN_LIST[index], COIN_ID_LIST[index])
    );
  }

  return tableBody;
};

const createCoinListTableBodyRow = (coinName, id) => {
  const tableRow = document.createElement(TABLE_ROW);
  const coinCell = document.createElement(TABLE_DATA);
  const countCell = document.createElement(TABLE_DATA);
  const countValue = document.createElement(SPAN);

  countValue.setAttribute(ID, id);
  coinCell.innerHTML = coinName;
  countCell.appendChild(countValue);
  tableRow.append(coinCell, countCell);

  return tableRow;
};
