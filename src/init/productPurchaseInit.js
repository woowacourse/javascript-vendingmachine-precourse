import { PRODUCT_PURCHASE, ZERO } from '../constants.js';
import * as func from './elementfunc.js';

function setTableBody(tbody) {
  const textArr = [
    PRODUCT_PURCHASE.COIN_500,
    PRODUCT_PURCHASE.COIN_100,
    PRODUCT_PURCHASE.COIN_50,
    PRODUCT_PURCHASE.COIN_10,
  ];

  const idArr = ['coin-500-quantity', 'coin-100-quantity', 'coin-50-quantity', 'coin-10-quantity'];
  func.createTableRow(textArr, idArr, tbody);
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

function setPurchase(productPurchaseDiv) {
  setChargeInput(productPurchaseDiv);
  setReturnBtn(productPurchaseDiv);
  setChargeAmount(productPurchaseDiv);
}

// 전체 감싸주는 Div 생성
function createProductPurchaseDiv() {
  const productPurchaseDiv = document.createElement('div');
  func.appendId(productPurchaseDiv, 'product-purchase-div');

  func.appendTitle(productPurchaseDiv, PRODUCT_PURCHASE.ADD_TITLE);
  setPurchase(productPurchaseDiv);

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
