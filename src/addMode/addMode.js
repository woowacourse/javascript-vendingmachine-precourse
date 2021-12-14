import { $ } from '../dom.js';
import AddInputValidity from './addInputValidity.js';

function itemNameInput() {
  const addModeItemName = document.createElement('input');
  addModeItemName.placeholder = "상품명";
  addModeItemName.id = "product-name-input";
  addModeItemName.style = "margin-right:10px";
  return addModeItemName;
}
function itemPriceInput() {
  const addModeItemPrice = document.createElement('input');
  addModeItemPrice.placeholder = "가격";
  addModeItemPrice.type = "number";
  addModeItemPrice.id = "product-price-input";
  addModeItemPrice.style = "margin-right:10px";
  return addModeItemPrice;
}
function itemCountInput() {
  const addModeItemCount = document.createElement('input');
  addModeItemCount.placeholder = "수량";
  addModeItemCount.type = "number";
  addModeItemCount.id = "product-quantity-input";
  addModeItemCount.style = "margin-right:10px";
  return addModeItemCount;
}
function itemAddButton() {
  const addModeAddButton = document.createElement('button');
  addModeAddButton.innerText = "추가하기";
  addModeAddButton.addEventListener("click", AddInputValidity);
  return addModeAddButton;
}
export default function AddMode() {
  const addModeTitle = document.createElement('h2');
  addModeTitle.innerText = "상품 추가하기"
  
  $('#content').append(addModeTitle, itemNameInput(), itemPriceInput(), itemCountInput(), itemAddButton());
}