import $ from '../util/$.js';
import {
  TAB_PRODUCT_ADD_ID,
  TAB_CHARGE_ID,
  CURRENT_TAB_KEY,
  PRODUCT_ADD_CONTAINER_ID,
  CHARGE_CONTAINER_ID,
  PURCHASE_CONTAINER_ID,
  TAB_PURCHASE_ID,
} from '../constant/constant.js';

function hideAllContainer() {
  const $addProduct = $(`#${PRODUCT_ADD_CONTAINER_ID}`);
  const $charge = $(`#${CHARGE_CONTAINER_ID}`);
  const $purchase = $(`#${PURCHASE_CONTAINER_ID}`);

  $addProduct.setAttribute('hidden', true);
  $charge.setAttribute('hidden', true);
  $purchase.setAttribute('hidden', true);
}

function removeHidden(id) {
  const $container = $(`#${id}`);

  $container.removeAttribute('hidden');
}

export function setCurrentTab(id) {
  localStorage.setItem(CURRENT_TAB_KEY, id);
}

export function renderCurrentTab(id) {
  hideAllContainer();
  removeHidden(id);
  setCurrentTab(id);
}

export default function addTabHandler() {
  const $tabProductAdd = $(`#${TAB_PRODUCT_ADD_ID}`);
  const $tabCharge = $(`#${TAB_CHARGE_ID}`);
  const $tabPurchase = $(`#${TAB_PURCHASE_ID}`);

  renderCurrentTab(localStorage.getItem(CURRENT_TAB_KEY));
  $tabProductAdd.addEventListener('click', () => renderCurrentTab(PRODUCT_ADD_CONTAINER_ID));
  $tabCharge.addEventListener('click', () => renderCurrentTab(CHARGE_CONTAINER_ID));
  $tabPurchase.addEventListener('click', () => renderCurrentTab(PURCHASE_CONTAINER_ID));
}
