import { customCreateElement } from '../utils/createElementUtils.js';
import {
  STRING_COIN_10,
  STRING_COIN_100,
  STRING_COIN_50,
  STRING_COIN_500,
  STYLE_TABLE,
  STYLE_TABLE_BORDER,
  VAL_COLUMN_SIZE,
  VAL_ROW_SIZE,
} from '../globalConstants.js';
import {
  ID_MACHINE_CHARGE_AMOUNT,
  ID_MACHINE_CHARGE_INPUT,
  ID_MACHINE_CHARGE_SUBMIT,
  ID_MACHINE_COIN_100_QUANTITY,
  ID_MACHINE_COIN_10_QUANTITY,
  ID_MACHINE_COIN_500_QUANTITY,
  ID_MACHINE_COIN_50_QUANTITY,
  ID_MACHINE_COIN_STATUS,
  PLACEHOLDER_INSERT_COIN,
  STRING_CHARGE_SUM_LABEL,
  STRING_COIN_NAMES_HEADER,
  STRING_COIN_QUANTITY_HEADER,
  TITLE_COIN_IN_MACHINE,
  TITLE_FORM,
  VAL_INSERT_BUTTON,
} from './constants.js';

// ------------- form components --------------
const createData = function createDataArrayForTable(value, id) {
  return [
    { value, width: `${VAL_COLUMN_SIZE}px` },
    { id, width: `${VAL_COLUMN_SIZE}px` },
  ];
};

export const ChargeFormSection = function createNewSection() {
  return document.createElement('div');
};

export const ChargeFormTitle = customCreateElement({
  tag: 'h2',
  value: TITLE_FORM,
});

export const ChargeInput = customCreateElement({
  tag: 'input',
  attributes: {
    id: ID_MACHINE_CHARGE_INPUT,
    type: 'text',
    placeholder: PLACEHOLDER_INSERT_COIN,
  },
});

export const ChargeFormSubmit = function createChargeSubmit() {
  return customCreateElement({
    tag: 'button',
    attributes: {
      id: ID_MACHINE_CHARGE_SUBMIT,
    },
    value: VAL_INSERT_BUTTON,
  });
};

export const ChargeSumLabel = customCreateElement({
  tag: 'p',
  value: STRING_CHARGE_SUM_LABEL,
});

export const ChargeSumSpan = customCreateElement({
  tag: 'span',
  attributes: { id: ID_MACHINE_CHARGE_AMOUNT },
});

// -------------- table components --------------
const createTD = function createSingleTableDataElement(data) {
  return customCreateElement({
    tag: 'td',
    attributes: {
      id: data.id,
      width: data.width,
      style: STYLE_TABLE_BORDER,
    },
    value: data.value,
  });
};

const fillTR = function fillDataInTableRow(tr, data) {
  const tdArray = data.map((d) => createTD(d));

  const newTr = tdArray.reduce((container, element) => {
    container.appendChild(element);
    return container;
  }, tr);

  return newTr;
};

// data: [{class, value, width}]
const createTR = function createTableRow(data) {
  const row = customCreateElement({
    tag: 'tr',
    attributes: { height: `${VAL_ROW_SIZE}px` },
  });

  const rowWithData = fillTR(row, data);

  return rowWithData;
};

const createTRs = function createTableRows(dataArray) {
  return dataArray.map((data) => createTR(data));
};

export const CoinTableSection = document.createElement('div');

export const CoinTableTitle = customCreateElement({
  tag: 'h2',
  value: TITLE_COIN_IN_MACHINE,
});

const tableHeaderData = [
  { value: STRING_COIN_NAMES_HEADER, width: `${VAL_COLUMN_SIZE}px` },
  { value: STRING_COIN_QUANTITY_HEADER, width: `${VAL_COLUMN_SIZE}px` },
];

const tableData = [
  createData(`${STRING_COIN_500}원`, ID_MACHINE_COIN_500_QUANTITY),
  createData(`${STRING_COIN_100}원`, ID_MACHINE_COIN_100_QUANTITY),
  createData(`${STRING_COIN_50}원`, ID_MACHINE_COIN_50_QUANTITY),
  createData(`${STRING_COIN_10}원`, ID_MACHINE_COIN_10_QUANTITY),
];

export const TableRows = createTRs([tableHeaderData, ...tableData]);

const CoinTable = customCreateElement({
  tag: 'table',
  attributes: {
    id: ID_MACHINE_COIN_STATUS,
    style: STYLE_TABLE,
  },
});

export const CoinTableWithRows = TableRows.reduce((table, row) => {
  table.appendChild(row);
  return table;
}, CoinTable);
