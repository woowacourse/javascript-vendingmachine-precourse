import { PRODUCT } from '../common/constants.js';
import {
  createTable,
  createTableHeader,
  createTableRow,
} from '../common/CreateElement.js';

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

export default function createProductListTable() {
  const productListTable = createTable();
  const productTableHeaderRow = createProductTableHeaderRow();
  productListTable.append(productTableHeaderRow);

  return productListTable;
}
