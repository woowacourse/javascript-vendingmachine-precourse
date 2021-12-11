import { $ } from '../view/initView.js';
import {
  TAB_PRODUCT_ADD_ID,
  TAB_CHARGE_ID,
  CURRENT_TAB_KEY,
  PRODUCT_ADD_CONTAINER_ID,
  CHARGE_CONTAINER_ID,
} from '../constant/constant.js';

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
  // const $tabPurchase = $(`#${TAB_PURCHASE_ID}`);

  renderCurrentTab(localStorage.getItem(CURRENT_TAB_KEY));
  $tabProductAdd.addEventListener('click', () => renderCurrentTab(PRODUCT_ADD_CONTAINER_ID));
  $tabCharge.addEventListener('click', () => renderCurrentTab(CHARGE_CONTAINER_ID));
  // $tabPurchase.addEventListener('click', () => renderCurrentTab(TAB_PURCHASE_ID));
}
