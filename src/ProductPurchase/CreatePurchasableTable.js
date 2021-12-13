/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */

import { PRODUCT } from '../common/constants.js';
import {
  createTable,
  createTableHeader,
  createTableRow,
} from '../common/CreateElement.js';

function createPurchasableTableHeaders() {
  const innerTexts = [
    PRODUCT.NAME,
    PRODUCT.PRICE,
    PRODUCT.QUANTITY,
    PRODUCT.PURCHASE,
  ];
  const purchasableTableHeaders = innerTexts.map((text) =>
    createTableHeader(text)
  );

  return purchasableTableHeaders;
}

function createPurchasableTableHeaderRow() {
  const purchasableTableHeaderRow = createTableRow();
  const purchasableTableHeaders = createPurchasableTableHeaders();
  purchasableTableHeaders.forEach((header) =>
    purchasableTableHeaderRow.append(header)
  );

  return purchasableTableHeaderRow;
}

export default function createPurchasableListTable() {
  const purchasableListTable = createTable('purchasable-list-table');
  const purchasableTableHeaderRow = createPurchasableTableHeaderRow();
  purchasableListTable.append(purchasableTableHeaderRow);

  return purchasableListTable;
}
