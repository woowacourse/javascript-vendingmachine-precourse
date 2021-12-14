import { PRODUCT } from '../common/constants.js';
import {
  createTable,
  createTableHeader,
  createTableRow,
} from '../common/CreateElement.js';

import { createProductTableDataRow } from './Add.js';

function createProductTableHeaders() {
  const innerTexts = [PRODUCT.NAME, PRODUCT.PRICE, PRODUCT.QUANTITY];
  const productTableHeaders = innerTexts.map((text) => createTableHeader(text));

  return productTableHeaders;
}

function createProductTableHeaderRow() {
  const productTableHeaderRow = createTableRow();
  const productTableHeaders = createProductTableHeaders();
  productTableHeaders.forEach((header) => productTableHeaderRow.append(header));

  return productTableHeaderRow;
}

export function getProductsFromLocalStorage() {
  let products = [];

  if (localStorage.getItem('상품 현황')) {
    products = JSON.parse(localStorage.getItem('상품 현황'));
  }

  const productsFromLocalStorage = [];
  products.forEach((product) => productsFromLocalStorage.push(product));

  return productsFromLocalStorage;
}

function setProductTableBody(productListTable) {
  const productsFromLocalStorage = getProductsFromLocalStorage();
  productsFromLocalStorage.forEach((product) => {
    const values = [product.상품명, product.가격, product.수량];
    const productTableDataRow = createProductTableDataRow(values);
    productListTable.append(productTableDataRow);
  });
}

export function createProductListTable() {
  const productListTable = createTable('product-list-table');
  const productTableHeaderRow = createProductTableHeaderRow();
  productListTable.append(productTableHeaderRow);
  setProductTableBody(productListTable);

  return productListTable;
}
