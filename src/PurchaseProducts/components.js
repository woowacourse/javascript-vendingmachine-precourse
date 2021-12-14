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
  CLASS_PURCHASE_BUTTON,
  CLASS_PURCHASE_ITEM,
  CLASS_PURCHASE_PREFIX,
  DATA_PRODUCT_PREFIX,
  ID_PURCHASE_CHARGE_AMOUNT,
  ID_PURCHASE_CHARGE_INPUT,
  ID_PURCHASE_CHARGE_SUBMIT,
  ID_PURCHASE_PRODUCT_STATUS,
  ID_RETURN_COIN_100_QUANTITY,
  ID_RETURN_COIN_10_QUANTITY,
  ID_RETURN_COIN_500_QUANTITY,
  ID_RETURN_COIN_50_QUANTITY,
  ID_RETURN_COIN_BUTTON,
  ID_RETURN_COIN_STATUS,
  PLACEHOLDER_CHARGE_INPUT,
  STRING_CHARGE_AMOUNT_LABEL,
  STRING_COIN_NAMES_HEADER,
  STRING_COIN_QUANTITY_HEADER,
  STRING_PRODUCT_NAME,
  STRING_PRODUCT_PRICE,
  STRING_PRODUCT_QUANTITY,
  STRING_PURCHASE_BUTTON,
  STRING_PURCHASE_BUTTON_HEADER,
  STRING_RETURN_BUTTON,
  TITLE_FORM,
  TITLE_PURCHASE_PRODUCT,
  TITLE_RETURN_COIN_STATUS,
  VAL_CHARGE_SUBMIT,
} from './constants.js';

// --------------- form component ---------------
export const InsertFormSection = function createNewInsertFormSection() {
  return document.createElement('div');
};

export const FormTitle = customCreateElement({
  tag: 'h2',
  value: TITLE_FORM,
});

export const PurchaseChargeInput = customCreateElement({
  tag: 'input',
  attributes: {
    id: ID_PURCHASE_CHARGE_INPUT,
    type: 'text',
    placeholder: PLACEHOLDER_CHARGE_INPUT,
  },
});

export const PurchaseChargeSubmit = function createPurchaseSubmit() {
  return customCreateElement({
    tag: 'button',
    attributes: {
      id: ID_PURCHASE_CHARGE_SUBMIT,
    },
    value: VAL_CHARGE_SUBMIT,
  });
};

export const PurchaseChargeSumLabel = customCreateElement({
  tag: 'p',
  value: STRING_CHARGE_AMOUNT_LABEL,
});

export const PurchaseChargeSumSpan = customCreateElement({
  tag: 'span',
  attributes: { id: ID_PURCHASE_CHARGE_AMOUNT },
});

// --------------- table component ---------------
const createProperty = function createProductPropertyObject(
  type,
  value,
  width,
) {
  const attributes = Object.fromEntries([
    ['class', `${CLASS_PURCHASE_PREFIX}${type}`],
    [`${DATA_PRODUCT_PREFIX}${type}`, value],
  ]);

  if (type === 'price') return { attributes, value: `${value}원`, width };
  return { attributes, value, width };
};

export const createProductObjects = function createProductPropertyObjectSet(
  name,
  property,
) {
  return [
    createProperty('name', name, `${VAL_COLUMN_SIZE * 2}px`),
    createProperty('price', property.price, `${VAL_COLUMN_SIZE}px`),
    createProperty('quantity', property.quantity, `${VAL_COLUMN_SIZE}px`),
  ];
};

// products table components
const createTD = function createSingleTableDataElement(data) {
  return customCreateElement({
    tag: 'td',
    attributes: {
      ...data.attributes,
      id: data.id,
      width: data.width,
      style: STYLE_TABLE_BORDER,
    },
    value: data.value,
  });
};

export const createButtonTD = function createTDWithButtonInside() {
  const TD = createTD({});
  const button = customCreateElement({
    tag: 'button',
    attributes: {
      class: CLASS_PURCHASE_BUTTON,
    },
    value: STRING_PURCHASE_BUTTON,
  });
  TD.appendChild(button);
  return TD;
};

const fillTR = function fillDataInTableRow(tr, data) {
  const tdArray = data.map((d) => createTD(d));

  const newTr = tdArray.reduce((container, element) => {
    container.appendChild(element);
    return container;
  }, tr);

  return newTr;
};

// data: [{value, width}]
const createTH = function createTableHead(data) {
  const row = customCreateElement({
    tag: 'tr',
    attributes: { height: `${VAL_ROW_SIZE}px` },
  });

  return fillTR(row, data);
};

// data: [{class, value, width}]
export const createTR = function createTableRow(data) {
  const row = customCreateElement({
    tag: 'tr',
    attributes: { class: CLASS_PURCHASE_ITEM, height: `${VAL_ROW_SIZE}px` },
  });

  const rowWithData = fillTR(row, data);

  return rowWithData;
};

// table components
export const PurchaseTableSection = function createNewSection() {
  return document.createElement('div');
};

export const PurchaseTableTitle = customCreateElement({
  tag: 'h2',
  value: TITLE_PURCHASE_PRODUCT,
});

const tableHeadData = [
  { value: STRING_PRODUCT_NAME, width: `${VAL_COLUMN_SIZE * 2}px` },
  { value: STRING_PRODUCT_PRICE, width: `${VAL_COLUMN_SIZE}px` },
  { value: STRING_PRODUCT_QUANTITY, width: `${VAL_COLUMN_SIZE}px` },
  { value: STRING_PURCHASE_BUTTON_HEADER, width: `${VAL_COLUMN_SIZE}px` },
];

export const TableHead = createTH(tableHeadData);

export const PurchaseTable = function createNewTable() {
  const table = customCreateElement({
    tag: 'table',
    attributes: {
      id: ID_PURCHASE_PRODUCT_STATUS,
      style: STYLE_TABLE,
    },
  });
  table.appendChild(TableHead);
  return table;
};

// coin table components
const createData = function createDataArrayForTable(value, id) {
  return [
    { value, width: `${VAL_COLUMN_SIZE}px` },
    { id, width: `${VAL_COLUMN_SIZE}px` },
  ];
};

const createTRs = function createTableRows(dataArray) {
  return dataArray.map((data) => createTR(data));
};

export const CoinTableSection = document.createElement('div');

export const CoinTableTitle = customCreateElement({
  tag: 'h2',
  value: TITLE_RETURN_COIN_STATUS,
});

export const CoinReturnButton = customCreateElement({
  tag: 'button',
  id: ID_RETURN_COIN_BUTTON,
  value: STRING_RETURN_BUTTON,
});

const tableHeaderData = [
  { value: STRING_COIN_NAMES_HEADER, width: `${VAL_COLUMN_SIZE}px` },
  { value: STRING_COIN_QUANTITY_HEADER, width: `${VAL_COLUMN_SIZE}px` },
];

const tableData = [
  createData(`${STRING_COIN_500}원`, ID_RETURN_COIN_500_QUANTITY),
  createData(`${STRING_COIN_100}원`, ID_RETURN_COIN_100_QUANTITY),
  createData(`${STRING_COIN_50}원`, ID_RETURN_COIN_50_QUANTITY),
  createData(`${STRING_COIN_10}원`, ID_RETURN_COIN_10_QUANTITY),
];

export const TableRows = createTRs([tableHeaderData, ...tableData]);

const CoinTable = customCreateElement({
  tag: 'table',
  attributes: {
    id: ID_RETURN_COIN_STATUS,
    style: STYLE_TABLE,
  },
});

export const CoinTableWithRows = TableRows.reduce((table, row) => {
  table.appendChild(row);
  return table;
}, CoinTable);
