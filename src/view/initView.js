import initProductAdd from './initProductAdd.js';
import initCharge from './initCharge.js';
import { renderCurrentTab } from '../eventHandler/addTabHandler.js';
import $ from '../util/$.js';
import {
  TAB_PRODUCT_ADD_ID,
  PRODUCT_ADD_TAB_TITLE,
  TAB_CHARGE_ID,
  MANAGE_MENU_TAB_TITLE,
  TAB_PURCHASE_ID,
  PRODUCT_PURCHASE_TAB_TITLE,
  CURRENT_TAB_KEY,
  APP_ID,
  PRODUCT_ADD_CONTAINER_ID,
} from '../constant/constant.js';

function renderAppHeader($appDiv) {
  const $header = document.createElement('div');

  $header.innerHTML = `
    <h1>🥤자판기🥤</h1>
    <button id="${TAB_PRODUCT_ADD_ID}">${PRODUCT_ADD_TAB_TITLE}</button>
    <button id="${TAB_CHARGE_ID}">${MANAGE_MENU_TAB_TITLE}</button>
    <button id="${TAB_PURCHASE_ID}">${PRODUCT_PURCHASE_TAB_TITLE}</button>
  `;
  $appDiv.append($header);
}

export default function initView() {
  const $appDiv = $(APP_ID);
  renderAppHeader($appDiv);
  initProductAdd($appDiv);
  initCharge($appDiv);
  if (!localStorage.getItem(CURRENT_TAB_KEY)) {
    renderCurrentTab(PRODUCT_ADD_CONTAINER_ID);
  }
}
