import { customCreateElement } from '../CreateElementUtils.js';
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
  STYLE_TABLE,
  STYLE_TABLE_BORDER,
  TITLE_CURRENT_STATUS,
  TITLE_FORM,
  VAL_COLUMN_SIZE,
  VAL_PRODUCT_ADD_SUBMIT,
  VAL_ROW_SIZE,
} from './constants.js';

// ------------- element generators -------------
const createInput = function createInputElement(id, type, placeholder) {
  return customCreateElement({
    tag: 'input',
    attributes: { id, type, placeholder },
  });
};

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
    createProperty(CLASS_PRODUCT_PRICE, property.price, `${VAL_COLUMN_SIZE}px`),
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

// ----------------- components -----------------
// form components
export const ProductFormSection = document.createElement('div');

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

export const ProductFormSubmit = customCreateElement({
  tag: 'button',
  attributes: { id: ID_PRODUCT_ADD_SUBMIT },
  value: VAL_PRODUCT_ADD_SUBMIT,
});

// table components
export const ProductTableSection = document.createElement('div');

export const ProductTable = customCreateElement({
  tag: 'table',
  attributes: {
    id: ID_PRODUCT_ADD_STATUS,
    style: STYLE_TABLE,
  },
});

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
