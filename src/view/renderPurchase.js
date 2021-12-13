import {
  APP_ID,
  PURCHASE_CONTAINER_ID,
  PURCHASE_INPUT_TITLE,
  PURCHASE_INPUT_PLACEHOLDER_TITLE,
  PURCHASE_INPUT_BUTTON_TITLE,
  PURCHASE_INPUT_SPAN_TITLE,
  PURCHASE_INPUT_ID,
  PURCHASE_BUTTON_ID,
  PURCHASE_AMOUNT_ID,
  PURCHASE_PRODUCTS_LIST_TITLE,
  PRODUCT_NAME_TITLE,
  PRODUCT_PRICE_TITLE,
  PRODUCT_QUANTITY_TITLE,
  PURCHASE_PRODUCT_BUY_TITLE,
  PURCHASE_CHANGE_TITLE,
  PURCHASE_RETURN_TITLE,
  PURCHASE_COIN_TABLE_ID,
  PURCHASE_500_QUANTITY_ID,
  PURCHASE_100_QUANTITY_ID,
  PURCHASE_50_QUANTITY_ID,
  PURCHASE_10_QUANTITY_ID,
  PURCHASE_PRODUCT_BUTTON_TITLE,
  PURCHASE_ITEM_CLASS,
  PURCHASE_BUY_BUTTON_CLASS,
  PURCHASE_ITEM_NAME_CLASS,
  PURCHASE_ITEM_PRICE_CLASS,
  PURCHASE_ITEM_QUANTITY_CLASS,
  PURCHASE_PRODUCTS_TABLE_ID,
  TITLE_500,
  TITLE_100,
  TITLE_50,
  TITLE_10,
  PURCHASE_RETURN_BUTTON_ID,
} from '../constant/constant.js';
import { coinListHeaderTemplate } from './renderCharge.js';
import $ from '../util/$.js';
import removePreviousView from './removePreviousView.js';

function renderPurchaseInput($purchase, money) {
  const $inputContainer = document.createElement('div');

  $inputContainer.innerHTML = `
    <h3>${PURCHASE_INPUT_TITLE}</h3>
    <form>
      <input id="${PURCHASE_INPUT_ID}" type="number" placeholder="${PURCHASE_INPUT_PLACEHOLDER_TITLE}"></input>
      <button id="${PURCHASE_BUTTON_ID}">${PURCHASE_INPUT_BUTTON_TITLE}</button>
    </form>
    <br>
    <span>${PURCHASE_INPUT_SPAN_TITLE}:</span>
    <span id="${PURCHASE_AMOUNT_ID}">${money || ''}</span>
  `;
  $purchase.append($inputContainer);
}

function purchaseProductTemplate({ name, price, quantity }) {
  return `
    <tr class="${PURCHASE_ITEM_CLASS}" align="center" bgcolor="white" height="40">
      <td class="${PURCHASE_ITEM_NAME_CLASS}" data-product-name="${name}" align="center" width="160">${name}</td>
      <td class="${PURCHASE_ITEM_PRICE_CLASS}" data-product-price="${price}" align="center" width="100">${price}</td>
      <td class="${PURCHASE_ITEM_QUANTITY_CLASS}" data-product-quantity="${quantity}" align="center" width="100">${quantity}</td>
      <td align="center" width="100">
        <button class="${PURCHASE_BUY_BUTTON_CLASS}">${PURCHASE_PRODUCT_BUTTON_TITLE}</button>
      </td>
    </tr>
  `;
}

function purchaseProductHeaderTemplate() {
  return `
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="160">${PRODUCT_NAME_TITLE}</td>
      <td align="center" width="100">${PRODUCT_PRICE_TITLE}</td>
      <td align="center" width="100">${PRODUCT_QUANTITY_TITLE}</td>
      <td align="center" width="100">${PURCHASE_PRODUCT_BUY_TITLE}</td>
    </tr>
  `;
}

function renderPurchaseProducts($purchase, products) {
  const $products = document.createElement('div');

  $products.innerHTML = `
    <br>
    <h3>${PURCHASE_PRODUCTS_LIST_TITLE}</h3>
    <table id="${PURCHASE_PRODUCTS_TABLE_ID}" bgcolor="black" border="1" style="border-collapse:collapse;">
      ${purchaseProductHeaderTemplate()}
      ${products.map((product) => purchaseProductTemplate(product)).join('') || ''}
    </table>
  `;
  $purchase.append($products);
}

function changeHeaderTemplate() {
  return `
    <br>
    <h3>${PURCHASE_CHANGE_TITLE}</h3>
    <form>
      <button id="${PURCHASE_RETURN_BUTTON_ID}">${PURCHASE_RETURN_TITLE}</button>
    </form>
  `;
}

function changeTemplate() {
  const titles = [TITLE_500, TITLE_100, TITLE_50, TITLE_10];
  const ids = [
    PURCHASE_500_QUANTITY_ID,
    PURCHASE_100_QUANTITY_ID,
    PURCHASE_50_QUANTITY_ID,
    PURCHASE_10_QUANTITY_ID,
  ];
  const template = ids.map((id, index) => `
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="62">${titles[index]}</td> 
      <td id="${id}" align="center" width="62"></td>
    </tr>
  `).join('');

  return template;
}

function renderChange($purchase) {
  const $change = document.createElement('div');

  $change.innerHTML = `
    ${changeHeaderTemplate()}
    <table id="${PURCHASE_COIN_TABLE_ID}" bgcolor="black" border="1" style="border-collapse:collapse;">
      ${coinListHeaderTemplate()}
      ${changeTemplate()}
    </table>
  `;
  $purchase.append($change);
}

export default function renderPurchase(vendingMachine) {
  const $app = $(`#${APP_ID}`);
  removePreviousView($app);

  const $purchase = document.createElement('div');
  $purchase.id = PURCHASE_CONTAINER_ID;

  renderPurchaseInput($purchase, vendingMachine.money);
  renderPurchaseProducts($purchase, vendingMachine.products);
  renderChange($purchase);
  $app.append($purchase);
}
