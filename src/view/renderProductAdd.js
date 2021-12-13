import {
  APP_ID,
  PRODUCT_ADD_TITLE,
  PRODUCT_NAME_INPUT_ID,
  PRODUCT_PRICE_INPUT_ID,
  PRODUCT_QUANTITY_INPUT_ID,
  PRODUCT_ADD_BUTTON_ID,
  PRODUCT_NAME_TITLE,
  PRODUCT_PRICE_TITLE,
  PRODUCT_QUANTITY_TITLE,
  PRODUCT_LIST_TITLE,
  PRODUCT_LIST_TABLE_ID,
  PRODUCT_ADD_CONTAINER_ID,
  ADDED_PRODUCT_CLASS,
  PRODUCT_MANAGE_NAME_CLASS,
  PRODUCT_MANAGE_PRICE_CLASS,
  PRODUCT_MANAGE_QUANTITY_CLASS,
} from '../constant/constant.js';
import $ from '../util/$.js';
import removePreviousView from './removePreviousView.js';

function renderProductAddInput($productAdd) {
  const $inputContainer = document.createElement('div');

  $inputContainer.innerHTML = `
    <h3>${PRODUCT_ADD_TITLE}</h3>
    <input id="${PRODUCT_NAME_INPUT_ID}" type="text" placeholder="상품명"></input>
    <input id="${PRODUCT_PRICE_INPUT_ID}" type="number" placeholder="가격"></input>
    <input id="${PRODUCT_QUANTITY_INPUT_ID}" type="number" placeholder="수량"></input>
    <button id="${PRODUCT_ADD_BUTTON_ID}">추가하기</button>
  `;
  $productAdd.append($inputContainer);
}

function productListTemplate({ name, price, quantity }) {
  return `
    <tr class="${ADDED_PRODUCT_CLASS}" align="center" bgcolor="white" height="40">
      <td class="${PRODUCT_MANAGE_NAME_CLASS}" align="center" width="160">${name}</td>
      <td class="${PRODUCT_MANAGE_PRICE_CLASS}" align="center" width="100">${price}</td>
      <td class="${PRODUCT_MANAGE_QUANTITY_CLASS}" align="center" width="100">${quantity}</td>
    </tr>
  `;
}

function productListHeaderTemplate() {
  return `
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="160">${PRODUCT_NAME_TITLE}</td>
      <td align="center" width="100">${PRODUCT_PRICE_TITLE}</td>
      <td align="center" width="100">${PRODUCT_QUANTITY_TITLE}</td>
    </tr>
  `;
}

function renderProductAddList($productAdd, products) {
  const $listContainer = document.createElement('div');

  $listContainer.innerHTML = `
    <br>
    <h3>${PRODUCT_LIST_TITLE}</h3>
    <table id="${PRODUCT_LIST_TABLE_ID}" bgcolor="black" border="1" style="border-collapse:collapse;">
      ${productListHeaderTemplate()}
      ${products.map((product) => productListTemplate(product)).join('')}
    </table>
  `;
  $productAdd.append($listContainer);
}

export default function renderProductAdd(vendingMachine) {
  const $app = $(`#${APP_ID}`);
  removePreviousView($app);

  const $productAdd = document.createElement('div');
  $productAdd.id = PRODUCT_ADD_CONTAINER_ID;

  renderProductAddInput($productAdd);
  renderProductAddList($productAdd, vendingMachine.products);
  $app.append($productAdd);
}
