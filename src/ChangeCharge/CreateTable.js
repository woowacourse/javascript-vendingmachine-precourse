import { COIN } from '../common/constants.js';
import {
  createTable,
  createTableData,
  createTableHeader,
  createTableRow,
} from '../common/CreateElement.js';

function createCoinTableHeaders() {
  const innerTexts = [COIN.COIN, COIN.COUNT];
  const coinTableHeaders = innerTexts.map((text) => createTableHeader(text));

  return coinTableHeaders;
}

function createCoinTableHeaderRow() {
  const coinTableHeaderRow = createTableRow();
  const coinTableHeaders = createCoinTableHeaders();
  coinTableHeaders.forEach((header) => coinTableHeaderRow.append(header));

  return coinTableHeaderRow;
}

function createCoinTableDatas(innerTexts) {
  return innerTexts.map((won) => createTableData(won));
}

function createCoinTableDataRow(innerTexts) {
  const coinTableDataRow = createTableRow();
  const coinTableDatas = createCoinTableDatas(innerTexts);
  coinTableDatas.map((data) => coinTableDataRow.append(data));

  return coinTableDataRow;
}

function createCoinTableDataRows() {
  const coin = [
    [COIN.WON_500, ''],
    [COIN.WON_100, ''],
    [COIN.WON_50, ''],
    [COIN.WON_10, ''],
  ];
  const coinTableDataRows = coin.map((won) => createCoinTableDataRow(won));

  return coinTableDataRows;
}

export default function createCoinListTable() {
  const coinListTable = createTable('coin-list-table');
  const coinTableHeaderRow = createCoinTableHeaderRow();
  coinListTable.append(coinTableHeaderRow);
  const coinTableDataRows = createCoinTableDataRows();
  coinTableDataRows.forEach((row) => coinListTable.append(row));

  return coinListTable;
}
