import { customCreateElement } from '../utils/createElementUtils.js';
import {
  STYLE_TABLE,
  STYLE_TABLE_BORDER,
  VAL_COLUMN_SIZE,
  VAL_ROW_SIZE,
} from '../globalConstants.js';
import {
  CLASS_PRODUCT_ITEM,
  CLASS_PRODUCT_NAME,
  CLASS_PRODUCT_PRICE,
  CLASS_PRODUCT_QUANTITY,
  ID_PRODUCT_ADD_STATUS,
  ID_PRODUCT_ADD_SUBMIT,
  ID_PRODUCT_NAME_INPUT,
  ID_PRODUCT_PRICE_INPUT,
  ID_PRODUCT_QUANTITY_INPUT,
  STRING_PRODUCT_NAME,
  STRING_PRODUCT_PRICE,
  STRING_PRODUCT_QUANTITY,
  TITLE_CURRENT_STATUS,
  TITLE_FORM,
  VAL_PRODUCT_ADD_SUBMIT,
} from './constants.js';

// --------------- form components --------------
const createInput = function createInputElement(id, type, placeholder) {
  return customCreateElement({
    tag: 'input',
    attributes: { id, type, placeholder },
  });
};

export const ProductFormSection = function createNewSection() {
  return document.createElement('div');
};

export const ProductFormTitle = customCreateElement({
  tag: 'h2',
  value: TITLE_FORM,
});

export const ProductNameInput = createInput(
  ID_PRODUCT_NAME_INPUT,
  'text',
  STRING_PRODUCT_NAME,
);

export const ProductPriceInput = createInput(
  ID_PRODUCT_PRICE_INPUT,
  'number',
  STRING_PRODUCT_PRICE,
);

export const ProductQuantityInput = createInput(
  ID_PRODUCT_QUANTITY_INPUT,
  'number',
  STRING_PRODUCT_QUANTITY,
);

export const ProductFormSubmit = function createProductSubmit() {
  return customCreateElement({
    tag: 'button',
    attributes: { id: ID_PRODUCT_ADD_SUBMIT },
    value: VAL_PRODUCT_ADD_SUBMIT,
  });
};

// -------------- table components --------------
const createProperty = function createProductPropertyObject(
  className,
  value,
  width,
) {
  return { class: className, value, width };
};

export const createProductObjects = function createProductPropertyObjectSet(
  name,
  property,
) {
  return [
    createProperty(CLASS_PRODUCT_NAME, name, `${VAL_COLUMN_SIZE * 2}px`),
    createProperty(
      CLASS_PRODUCT_PRICE,
      `${property.price}원`,
      `${VAL_COLUMN_SIZE}px`,
    ),
    createProperty(
      CLASS_PRODUCT_QUANTITY,
      property.quantity,
      `${VAL_COLUMN_SIZE}px`,
    ),
  ];
};

const createTD = function createSingleTableDataElement(data) {
  return customCreateElement({
    tag: 'td',
    attributes: {
      class: data.class,
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
    attributes: { class: CLASS_PRODUCT_ITEM, height: `${VAL_ROW_SIZE}px` },
  });

  const rowWithData = fillTR(row, data);

  return rowWithData;
};

export const ProductTableSection = function createNewSection() {
  return document.createElement('div');
};

export const ProductTableTitle = customCreateElement({
  tag: 'h2',
  value: TITLE_CURRENT_STATUS,
});

const tableHeadData = [
  { value: STRING_PRODUCT_NAME, width: `${VAL_COLUMN_SIZE * 2}px` },
  { value: STRING_PRODUCT_PRICE, width: `${VAL_COLUMN_SIZE}px` },
  { value: STRING_PRODUCT_QUANTITY, width: `${VAL_COLUMN_SIZE}px` },
];

export const TableHead = createTH(tableHeadData);

export const ProductTable = function createNewTable() {
  const table = customCreateElement({
    tag: 'table',
    attributes: {
      id: ID_PRODUCT_ADD_STATUS,
      style: STYLE_TABLE,
    },
  });
  table.appendChild(TableHead);
  return table;
};
