import { $ } from '../dom.js';
import DrawTable from '../drawTable.js';
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
function addTable() {
  const table = document.createElement('table');
  table.id = "product-table";
  const thead = addTableHead();
  table.appendChild(thead);
  return table;
}
function addTableHead() {
  const thead = document.createElement('thead');
  const th = document.createElement('th');
  th.style = "border:1px solid #000; border-collapse:collapse";
  const nameth = th.cloneNode(true);
  nameth.textContent = "상품명";
  const priceth = th.cloneNode(true);
  priceth.textContent = "가격";
  const countth = th.cloneNode(true);
  countth.textContent = "수량";
  const purchaseth = th.cloneNode(true);
  purchaseth.textContent = "구매";
  thead.append(nameth, priceth, countth, purchaseth);
  return thead;
}
export default function AddMode() {
  const addModeTitle = document.createElement('h2');
  addModeTitle.innerText = "상품 추가하기"
  $('#content').append(addModeTitle, itemNameInput(), itemPriceInput(), itemCountInput(), itemAddButton());
  const addTableTitle = document.createElement('h2');
  addTableTitle.innerText = "상품 현황";
  $('#content').append(addTableTitle, addTable());
  DrawTable();
}