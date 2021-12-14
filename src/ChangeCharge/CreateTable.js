import { COIN } from '../common/constants.js';
import {
  createDiv,
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

export function createCoin(id) {
  const coin = createDiv();
  coin.setAttribute('id', id);
  coin.innerText = 0;

  return coin;
}

function createCoins() {
  const won500 = createCoin('vending-machine-coin-500-quantity');
  const won100 = createCoin('vending-machine-coin-100-quantity');
  const won50 = createCoin('vending-machine-coin-50-quantity');
  const won10 = createCoin('vending-machine-coin-10-quantity');

  return [won500, won100, won50, won10];
}

function getRandomNumber() {
  return window.MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
}

function addCount(random, coin, element) {
  if (random === coin) {
    element.innerText = element.innerText * 1 + 1;
  }

  return element;
}

function createCoinCounts() {
  let amountHave = localStorage.getItem('보유 금액') * 1;
  const coins = createCoins();

  while (amountHave) {
    const random = getRandomNumber();

    if (amountHave >= random) {
      coins[0] = addCount(random, COIN.FIVE_HUN, coins[0]);
      coins[1] = addCount(random, COIN.HUN, coins[1]);
      coins[2] = addCount(random, COIN.FIVE_TEN, coins[2]);
      coins[3] = addCount(random, COIN.TEN, coins[3]);
      amountHave -= random;
    }
  }

  return coins;
}

export function setCoinToLocalStorage() {
  const coins = createCoinCounts();
  const counts = [];

  coins.forEach((coin) => {
    counts.push(`${coin.innerText}개`);
  });
  localStorage.setItem('자판기가 보유한 동전', JSON.stringify(counts));
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

export function createCoinListTable() {
  const coinListTable = createTable('coin-list-table');
  const coinTableHeaderRow = createCoinTableHeaderRow();
  coinListTable.append(coinTableHeaderRow);
  const coinTableDataRows = createCoinTableDataRows();
  coinTableDataRows.forEach((row) => coinListTable.append(row));

  return coinListTable;
}

export function createCoinTable() {
  const coinTable = createCoinListTable();

  if (localStorage.getItem('자판기가 보유한 동전')) {
    const counts = JSON.parse(localStorage.getItem('자판기가 보유한 동전'));

    for (let i = 0; i < 4; i += 1) {
      const countCell = coinTable.rows[i + 1].cells[1];
      countCell.innerText = counts[i];
    }
  }

  setCoinToLocalStorage();

  return coinTable;
}
