import { PRODUCT_ADD } from '../constants.js';
import * as func from './elementfunc.js';

// 표 요소 추가
function setTable(productAddDiv) {
  const table = func.createTable('product-add-table', [
    PRODUCT_ADD.NAME,
    PRODUCT_ADD.PRICE,
    PRODUCT_ADD.QUANTITY,
  ]);

  productAddDiv.appendChild(table);
}

// input 요소 추가
function setProductAddinput(productAddDiv) {
  func.createInput(productAddDiv, PRODUCT_ADD.NAME, 'text', 'product-name-input');
  func.createInput(productAddDiv, PRODUCT_ADD.PRICE, 'number', 'product-price-input');
  func.createInput(productAddDiv, PRODUCT_ADD.QUANTITY, 'number', 'product-quantity-input');
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
