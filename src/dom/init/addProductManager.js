import { app } from '../domElement.js';
import {
  BUTTON,
  TABLE,
  TABLE_HEAD,
  TABLE_ROW,
  TABLE_HEADER,
  TABLE_BODY,
  ONE,
  ADD_PRODUCT_TEXT,
  PRODUCT_NAME_TEXT,
  PRICE_TEXT,
  QUANTITY_TEXT,
  ADD_TEXT,
  PRODUCT_LIST_TITLE,
  DIV,
  NONE,
  ID,
  H2,
  INPUT,
  TYPE,
  NUMBER,
  COLLAPSE,
  TEXT,
} from '../../constants.js';

export const addProductManager = () => {
  const productManager = document.createElement(DIV);

  productManager.style.display = NONE;
  productManager.setAttribute(ID, 'product-manager');
  productManager.dataset.num = ONE;

  productManager.append(createAddProductForm(), createProductList());
  app.appendChild(productManager);
};

// add form

const createAddProductForm = () => {
  const productForm = document.createElement(DIV);

  productForm.append(
    createProductTitle(),
    createProductNameInput(),
    createProductPriceInput(),
    createProductQuantityInput(),
    createProductAddButton()
  );

  return productForm;
};

const createProductTitle = () => {
  const title = document.createElement(H2);
  title.innerHTML = ADD_PRODUCT_TEXT;

  return title;
};

const createProductNameInput = () => {
  const productNameInput = document.createElement(INPUT);

  productNameInput.placeholder = PRODUCT_NAME_TEXT;
  productNameInput.setAttribute(TYPE, TEXT);
  productNameInput.setAttribute(ID, 'product-name-input');

  return productNameInput;
};

const createProductPriceInput = () => {
  const productPriceInput = document.createElement(INPUT);

  productPriceInput.placeholder = PRICE_TEXT;
  productPriceInput.setAttribute(TYPE, NUMBER);
  productPriceInput.setAttribute(ID, 'product-price-input');

  return productPriceInput;
};

const createProductQuantityInput = () => {
  const productQuantityInput = document.createElement(INPUT);

  productQuantityInput.placeholder = QUANTITY_TEXT;
  productQuantityInput.setAttribute(TYPE, NUMBER);
  productQuantityInput.setAttribute(ID, 'product-quantity-input');

  return productQuantityInput;
};

const createProductAddButton = () => {
  const productAddButton = document.createElement(BUTTON);

  productAddButton.innerHTML = ADD_TEXT;
  productAddButton.setAttribute(ID, 'product-add-button');

  return productAddButton;
};

// product list

const createProductList = () => {
  const productList = document.createElement(DIV);

  productList.append(createProductListTitle(), createProductTable());

  return productList;
};

const createProductListTitle = () => {
  const title = document.createElement(H2);

  title.innerHTML = PRODUCT_LIST_TITLE;

  return title;
};

const createProductTable = () => {
  const productTable = document.createElement(TABLE);

  productTable.border = ONE;
  productTable.style.borderCollapse = COLLAPSE;
  productTable.append(createProductTableHead(), createProductTableBody());

  return productTable;
};

const createProductTableHead = () => {
  const tableHead = document.createElement(TABLE_HEAD);

  tableHead.appendChild(createProductTableHeadRow());

  return tableHead;
};

const createProductTableHeadRow = () => {
  const tableHeadRow = document.createElement(TABLE_ROW);
  const productNameCell = document.createElement(TABLE_HEADER);
  const productPriceCell = document.createElement(TABLE_HEADER);
  const productQuantityCell = document.createElement(TABLE_HEADER);

  productNameCell.innerHTML = PRODUCT_NAME_TEXT;
  productPriceCell.innerHTML = PRICE_TEXT;
  productQuantityCell.innerHTML = QUANTITY_TEXT;

  tableHeadRow.append(productNameCell, productPriceCell, productQuantityCell);

  return tableHeadRow;
};

const createProductTableBody = () => {
  const tableBody = document.createElement(TABLE_BODY);

  tableBody.setAttribute(ID, 'product-manager-product-table-body');

  return tableBody;
};
