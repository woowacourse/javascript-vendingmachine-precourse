import { PRODUCT_PURCHASE, ZERO } from '../constants.js';
import * as func from './elementfunc.js';

function setTableBody10(tbody) {
  let table10Row = document.createElement('tr');
  func.createTh(table10Row, PRODUCT_PURCHASE.COIN_10);
  let heading_2 = document.createElement('th');
  func.appendId(heading_2, 'coin-10-quantity');
  heading_2.innerHTML = ZERO + '개';

  table10Row.appendChild(heading_2);
  tbody.appendChild(table10Row);
}

function setTableBody50(tbody) {
  let table50Row = document.createElement('tr');
  func.createTh(table50Row, PRODUCT_PURCHASE.COIN_50);
  let heading_2 = document.createElement('th');
  func.appendId(heading_2, 'coin-50-quantity');
  heading_2.innerHTML = ZERO + '개';

  table50Row.appendChild(heading_2);
  tbody.appendChild(table50Row);
}

function setTableBody100(tbody) {
  let table100Row = document.createElement('tr');
  func.createTh(table100Row, PRODUCT_PURCHASE.COIN_100);
  let heading_2 = document.createElement('th');
  func.appendId(heading_2, 'coin-100-quantity');
  heading_2.innerHTML = ZERO + '개';

  table100Row.appendChild(heading_2);
  tbody.appendChild(table100Row);
}

function setTableBody500(tbody) {
  let table500Row = document.createElement('tr');

  func.createTh(table500Row, PRODUCT_PURCHASE.COIN_500);
  let heading_2 = document.createElement('th');
  func.appendId(heading_2, 'coin-500-quantity');
  heading_2.innerHTML = ZERO + '개';
  table500Row.appendChild(heading_2);

  tbody.appendChild(table500Row);
}

// function setTableRow()

function setTableBody(tbody) {
  setTableBody500(tbody);
  setTableBody100(tbody);
  setTableBody50(tbody);
  setTableBody10(tbody);
}

// set thead
function setTableHead(thead) {
  let tableRow = document.createElement('tr');
  func.createTh(tableRow, PRODUCT_PURCHASE.COIN);
  func.createTh(tableRow, PRODUCT_PURCHASE.NUMBER_OF_COIN);

  thead.appendChild(tableRow);
}

function setTableStyle(table, thead, tbody) {
  func.appendTableStyle(table);
  func.appendTheadStyle(thead);
  func.appendTheadStyle(tbody);
}

// 잔돈 표 요소 추가
function setCoinTable(productPurchaseDiv) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  table.appendChild(thead);
  table.appendChild(tbody);

  setTableHead(thead);
  setTableBody(tbody);

  setTableStyle(table, thead, tbody);
  productPurchaseDiv.appendChild(table);
}

function setCoinBtn(productPurchaseDiv) {
  func.createBtn(productPurchaseDiv, PRODUCT_PURCHASE.RETURN_BTN, 'coin-return-button');
}

// 상품 표 첫번째 행
function setProductManageTable(thead) {
  let tableRow = document.createElement('tr');
  func.createTh(tableRow, PRODUCT_PURCHASE.NAME);
  func.createTh(tableRow, PRODUCT_PURCHASE.PRICE);
  func.createTh(tableRow, PRODUCT_PURCHASE.QUANTITY);
  func.createTh(tableRow, PRODUCT_PURCHASE.PURCHASE);
  thead.appendChild(tableRow);
}

// 상품 표 요소 추가
function setProductTable(productPurchaseDiv) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  tbody.setAttribute('id', 'product-purchase-table');
  table.appendChild(thead);
  table.appendChild(tbody);
  setProductManageTable(thead);

  func.appendTableStyle(table);
  func.appendTheadStyle(thead);

  productPurchaseDiv.appendChild(table);
}

function setChargeAmount(productPurchaseDiv) {
  const amount = func.createTag('p', 'pur-amount', PRODUCT_PURCHASE.COIN_STORAGE);
  func.appendSpanData(amount, 'charge-amount', 'data-amount', ZERO);

  productPurchaseDiv.appendChild(amount);
}

function setReturnBtn(productPurchaseDiv) {
  func.createBtn(productPurchaseDiv, PRODUCT_PURCHASE.ADD_BTN, 'charge-button');
}

function setChargeInput(productPurchaseDiv) {
  func.createInput(productPurchaseDiv, PRODUCT_PURCHASE.INPUT, 'number', 'charge-input');
}

// 전체 감싸주는 Div 생성
function createProductPurchaseDiv() {
  const productPurchaseDiv = document.createElement('div');
  func.appendId(productPurchaseDiv, 'product-purchase-div');

  func.appendTitle(productPurchaseDiv, PRODUCT_PURCHASE.ADD_TITLE);
  setChargeInput(productPurchaseDiv);
  setReturnBtn(productPurchaseDiv);
  setChargeAmount(productPurchaseDiv);

  func.appendTitle(productPurchaseDiv, PRODUCT_PURCHASE.PRODUCT_TITLE);
  setProductTable(productPurchaseDiv);

  func.appendTitle(productPurchaseDiv, PRODUCT_PURCHASE.COIN_TITLE);
  setCoinBtn(productPurchaseDiv);
  setCoinTable(productPurchaseDiv);
  document.querySelector('#app').appendChild(productPurchaseDiv);
}

export default function productPurchaseInit() {
  createProductPurchaseDiv();
}
