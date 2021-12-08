import { app } from '../domElement.js';
import {
  BUTTON,
  TABLE,
  TABLE_HEAD,
  TABLE_ROW,
  TABLE_HEADER,
  TABLE_BODY,
  ONE,
  TWO,
  DIV,
  NONE,
  ID,
  H2,
  INPUT,
  TYPE,
  NUMBER,
  COLLAPSE,
  SPAN,
  COIN_TEXT,
  COUNT_TEXT,
  TABLE_DATA,
  COIN_LIST,
  CHARGE_FORM_TITLE,
  CHARGE_FORM_INPUT_TEXT,
  CHARGE_TEXT,
  COIN_IN_VENDING_MACHINE_TEXT,
  AMOUNT_TITLE,
  VENDING_MACHINE_COIN_ID_LIST,
} from '../../constants.js';

export const addVendingMachineChargeManager = () => {
  const vendingMachineChargeManager = document.createElement(DIV);

  vendingMachineChargeManager.style.display = NONE;
  vendingMachineChargeManager.setAttribute(ID, 'vending-machine-manager');
  vendingMachineChargeManager.dataset.num = TWO;
  vendingMachineChargeManager.append(createChargeForm(), createCoinList());

  app.appendChild(vendingMachineChargeManager);
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

  chargeFormTitle.innerHTML = CHARGE_FORM_TITLE;

  return chargeFormTitle;
};

const createChargeInput = () => {
  const chargeInput = document.createElement(INPUT);

  chargeInput.setAttribute(TYPE, NUMBER);
  chargeInput.placeholder = CHARGE_FORM_INPUT_TEXT;
  chargeInput.setAttribute(ID, 'vending-machine-charge-input');

  return chargeInput;
};

const createChargeButton = () => {
  const chargeButton = document.createElement(BUTTON);

  chargeButton.setAttribute(ID, 'vending-machine-charge-button');
  chargeButton.innerHTML = CHARGE_TEXT;

  return chargeButton;
};

const createAmountText = () => {
  const amount = document.createElement(DIV);
  const amountTitle = document.createElement(SPAN);
  const amountText = document.createElement(SPAN);

  amountTitle.innerHTML = AMOUNT_TITLE;
  amountText.setAttribute(ID, 'vending-machine-charge-amount');
  amount.append(amountTitle, amountText);

  return amount;
};

// coin list

const createCoinList = () => {
  const coinList = document.createElement(DIV);

  coinList.append(createCoinListTitle(), createCoinTable());

  return coinList;
};

const createCoinListTitle = () => {
  const title = document.createElement(H2);
  title.innerHTML = COIN_IN_VENDING_MACHINE_TEXT;

  return title;
};

const createCoinTable = () => {
  const coinTable = document.createElement(TABLE);

  coinTable.border = ONE;
  coinTable.style.borderCollapse = COLLAPSE;
  coinTable.append(createCoinTableHead(), createCoinTableBody());

  return coinTable;
};

const createCoinTableHead = () => {
  const tableHead = document.createElement(TABLE_HEAD);

  tableHead.append(createCoinTableHeadRow());

  return tableHead;
};

const createCoinTableHeadRow = () => {
  const tableRow = document.createElement(TABLE_ROW);
  const coinCell = document.createElement(TABLE_HEADER);
  const countCell = document.createElement(TABLE_HEADER);

  coinCell.innerHTML = COIN_TEXT;
  countCell.innerHTML = COUNT_TEXT;
  tableRow.append(coinCell, countCell);

  return tableRow;
};

const createCoinTableBody = () => {
  const tableBody = document.createElement(TABLE_BODY);
  tableBody.setAttribute(ID, 'vending-machine-coin-table-body');

  let index = 0;
  for (index = 0; index < COIN_LIST.length; index++) {
    tableBody.appendChild(
      createCoinTableBodyRow(
        COIN_LIST[index],
        VENDING_MACHINE_COIN_ID_LIST[index]
      )
    );
  }

  return tableBody;
};

const createCoinTableBodyRow = (coinName, id) => {
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
