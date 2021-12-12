import $ from '../util/$.js';
import {
  TAB_PRODUCT_ADD_ID,
  PRODUCT_ADD_TAB_TITLE,
  TAB_CHARGE_ID,
  MANAGE_MENU_TAB_TITLE,
  TAB_PURCHASE_ID,
  PRODUCT_PURCHASE_TAB_TITLE,
  APP_ID,
} from '../constant/constant.js';

export default function renderAppHeader() {
  const $appDiv = $(`#${APP_ID}`);
  const $header = document.createElement('div');

  $header.innerHTML = `
    <h1>🥤자판기🥤</h1>
    <button id="${TAB_PRODUCT_ADD_ID}">${PRODUCT_ADD_TAB_TITLE}</button>
    <button id="${TAB_CHARGE_ID}">${MANAGE_MENU_TAB_TITLE}</button>
    <button id="${TAB_PURCHASE_ID}">${PRODUCT_PURCHASE_TAB_TITLE}</button>
  `;
  $appDiv.append($header);
}
