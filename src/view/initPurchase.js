import {
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
  PRODUCTS_STORAGE_KEY,
  PURCHASE_PRODUCT_BUTTON_TITLE,
  PURCHASE_ITEM_CLASS,
  PURCHASE_BUY_BUTTON_CLASS,
  PURCHASE_ITEM_NAME_CLASS,
  PURCHASE_ITEM_PRICE_CLASS,
  PURCHASE_ITEM_QUANTITY_CLASS,
} from '../constant/constant.js';
import { coinListHeaderTemplate, coinListTemplate } from './initCharge.js';

function renderPurchaseInput($purchase) {
  const $inputContainer = document.createElement('div');

  $inputContainer.innerHTML = `
    <h3>${PURCHASE_INPUT_TITLE}</h3>
    <form>
      <input id="${PURCHASE_INPUT_ID} "type="number" placeholder="${PURCHASE_INPUT_PLACEHOLDER_TITLE}"></input>
      <button id="${PURCHASE_BUTTON_ID}">${PURCHASE_INPUT_BUTTON_TITLE}</button>
    </form>
    <br>
    <span>${PURCHASE_INPUT_SPAN_TITLE}:</span>
    <span id="${PURCHASE_AMOUNT_ID}"></span>
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

function renderPurchaseProducts($purchase) {
  const $products = document.createElement('div');
  const products = JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY))
    ?.map((product) => purchaseProductTemplate(product))
    .join('');

  $products.innerHTML = `
    <br>
    <h3>${PURCHASE_PRODUCTS_LIST_TITLE}</h3>
    <table bgcolor="black" border="1" style="border-collapse:collapse;">
      ${purchaseProductHeaderTemplate()}
      ${products || ''}
    </table>
  `;
  $purchase.append($products);
}

function changeHeaderTemplate() {
  return `
    <br>
    <h3>${PURCHASE_CHANGE_TITLE}</h3>
    <form>
      <button>${PURCHASE_RETURN_TITLE}</button>
    </form>
  `;
}

function renderChange($purchase) {
  const $change = document.createElement('div');
  const ids = [
    PURCHASE_500_QUANTITY_ID,
    PURCHASE_100_QUANTITY_ID,
    PURCHASE_50_QUANTITY_ID,
    PURCHASE_10_QUANTITY_ID,
  ];
  $change.innerHTML = `
    ${changeHeaderTemplate()}
    <table id="${PURCHASE_COIN_TABLE_ID}" bgcolor="black" border="1" style="border-collapse:collapse;">
      ${coinListHeaderTemplate()}
      ${coinListTemplate(ids)}
    </table>
  `;
  $purchase.append($change);
}

export default function initPurchase($appDiv) {
  const $purchase = document.createElement('div');
  $purchase.id = PURCHASE_CONTAINER_ID;

  renderPurchaseInput($purchase);
  renderPurchaseProducts($purchase);
  renderChange($purchase);
  $appDiv.append($purchase);
}
