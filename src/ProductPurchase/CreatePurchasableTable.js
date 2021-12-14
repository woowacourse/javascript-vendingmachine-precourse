/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */

import { BUTTON, PRODUCT } from '../common/constants.js';
import {
  createClassButton,
  createTable,
  createTableClassData,
  createTableClassRow,
  createTableData,
  createTableHeader,
  createTableRow,
} from '../common/CreateElement.js';
import { $ } from '../common/elements.js';

import { getPurchasableFromLocalStorage } from './Purchasable.js';

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

function createDatas(values) {
  const datas = [];
  datas.push(['product-purchase-name', values[0]]);
  datas.push(['product-purchase-price', values[1]]);
  datas.push(['product-purchase-quantity', values[2]]);

  return datas;
}

function createPurchasableTableData(data) {
  const [cla, innerText] = data;
  const purchasableTableData = createTableClassData(cla, innerText);

  return purchasableTableData;
}

function createPurchasableTableDatas(values) {
  const datas = createDatas(values);
  const purchasableTableDatas = datas.map((data) =>
    createPurchasableTableData(data)
  );

  return purchasableTableDatas;
}

function createProductPurchaseButton() {
  const [cla, innerText] = ['purchase-button', BUTTON.PURCHASE];
  const productPurchaseButton = createClassButton(cla, innerText);

  return productPurchaseButton;
}

function createPurchasableTableButtonData() {
  const purchasableTableButtonData = createTableData('');
  const productPurchaseButton = createProductPurchaseButton();
  purchasableTableButtonData.append(productPurchaseButton);

  return purchasableTableButtonData;
}

function createPurchasableTableDataRow(values) {
  const purchasableTableDataRow = createTableClassRow('product-purchase-item');
  const purchasableTableDatas = createPurchasableTableDatas(values);
  purchasableTableDatas.forEach((data) => purchasableTableDataRow.append(data));
  const purchasableButtonData = createPurchasableTableButtonData();
  purchasableTableDataRow.append(purchasableButtonData);

  return purchasableTableDataRow;
}

function createPurchasableTableBody(purchasableListTable) {
  const purchasableFromLocalStorage = getPurchasableFromLocalStorage();
  purchasableFromLocalStorage.forEach((product) => {
    const values = [product.상품명, product.가격, product.수량];
    const purchasableTableDataRow = createPurchasableTableDataRow(values);
    purchasableListTable.append(purchasableTableDataRow);
  });
}

function vacateExistPurchasableTableBody() {
  if ($('purchasable-purchase-item')) {
    $('purchasable-purchase-item').remove();
  }
}

export default function createPurchasableListTable() {
  vacateExistPurchasableTableBody();
  const purchasableListTable = createTable('purchasable-list-table');
  const purchasableTableHeaderRow = createPurchasableTableHeaderRow();
  purchasableListTable.append(purchasableTableHeaderRow);
  createPurchasableTableBody(purchasableListTable);

  return purchasableListTable;
}
