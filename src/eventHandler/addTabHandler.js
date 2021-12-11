import {
  TAB_PRODUCT_ADD_ID,
  TAB_CHARGE_ID,
  TAB_PURCHASE_ID,
  $,
  CURRENT_TAB_KEY,
  setCurrentTab,
} from '../view/initView.js';
import { PRODUCT_ADD_CONTAINER_ID } from '../view/initProductAdd.js';
import { CHARGE_CONTAINER_ID } from '../view/initCharge.js';

function hideAllContainer() {
  const $addProduct = $(`#${PRODUCT_ADD_CONTAINER_ID}`);
  const $charge = $(`#${CHARGE_CONTAINER_ID}`);
  // const $purchase = $(`#${}`);

  $addProduct.setAttribute('hidden', true);
  $charge.setAttribute('hidden', true);
}

function removeHidden(id) {
  const $container = $(`#${id}`);

  $container.removeAttribute('hidden');
}

export function renderCurrentTab(id) {
  hideAllContainer();
  removeHidden(id);
  setCurrentTab(id);
}

export default function addTabHandler() {
  const $tabProductAdd = $(`#${TAB_PRODUCT_ADD_ID}`);
  const $tabCharge = $(`#${TAB_CHARGE_ID}`);
  // const $tabPurchase = $(`#${TAB_PURCHASE_ID}`);

  renderCurrentTab(localStorage.getItem(CURRENT_TAB_KEY));
  $tabProductAdd.addEventListener('click', () => renderCurrentTab(PRODUCT_ADD_CONTAINER_ID));
  $tabCharge.addEventListener('click', () => renderCurrentTab(CHARGE_CONTAINER_ID));
  // $tabPurchase.addEventListener('click', () => renderCurrentTab(TAB_PURCHASE_ID));
}
