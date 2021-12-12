import { PRODUCT_ADD } from '../constants.js';
import * as func from './elementfunc.js';

// 표 첫번째 행
function setProductManageTable(thead) {
  let tableRow = document.createElement('tr');
  func.createTh(tableRow, PRODUCT_ADD.NAME);
  func.createTh(tableRow, PRODUCT_ADD.PRICE);
  func.createTh(tableRow, PRODUCT_ADD.QUANTITY);

  thead.appendChild(tableRow);
}

// 표 요소 추가
function setTable(productAddDiv) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  tbody.setAttribute('class', 'product-manage-item');

  table.appendChild(thead);
  table.appendChild(tbody);
  setProductManageTable(thead);
  func.appendTableStyle(table, thead);

  productAddDiv.appendChild(table);
}

// input 요소 추가
function setProductAddinput(productAddDiv) {
  func.createInput(
    productAddDiv,
    PRODUCT_ADD.NAME,
    'text',
    'product-name-input',
  );
  func.createInput(
    productAddDiv,
    PRODUCT_ADD.PRICE,
    'text',
    'product-price-input',
  );
  func.createInput(
    productAddDiv,
    PRODUCT_ADD.QUANTITY,
    'text',
    'product-quantity-input',
  );
}

// 전체 감싸주는 Div 생성
function createproducAddDiv() {
  const productAddDiv = document.createElement('div');
  func.appendId(productAddDiv, 'product-add-div');

  func.appendTitle(productAddDiv, PRODUCT_ADD.ADD_TITLE);
  setProductAddinput(productAddDiv);
  func.createBtn(productAddDiv, PRODUCT_ADD.ADD_BTN, 'product-add-button');

  func.appendTitle(productAddDiv, PRODUCT_ADD.PRODUCT_TITLE);
  setTable(productAddDiv);

  document.querySelector('#app').appendChild(productAddDiv);
}

export default function productAddInit() {
  createproducAddDiv();
}
