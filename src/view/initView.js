import initProductAdd, { PRODUCT_ADD_CONTAINER_ID } from './initProductAdd.js';
import initCharge from './initCharge.js';
import { renderCurrentTab } from '../eventHandler/addTabHandler.js';

const APP_ID = '#app';

const PRODUCT_ADD_TAB_TITLE = '상품 관리';
const MANAGE_MENU_TAB_TITLE = '잔돈 충전';
const PRODUCT_PURCHASE_TAB_TITLE = '상품 구매';

export const TAB_PRODUCT_ADD_ID = 'product-add-menu';
export const TAB_CHARGE_ID = 'vending-machine-manage-menu';
export const TAB_PURCHASE_ID = 'product-purchase-menu';

export const CURRENT_TAB_KEY = 'current-tab';

export function $(domId) {
  return document.querySelector(domId);
}

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

export function setCurrentTab(id) {
  localStorage.setItem(CURRENT_TAB_KEY, id);
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
