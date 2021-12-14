import { $ } from '../dom.js';

function addTable() {
  const table = document.createElement('table');
  table.id = "product-table";
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
  thead.append(nameth, priceth, countth);
  return thead;
}
function drawItemInTable(itemList) {
  for (let i = 0; i < Object.keys(itemList).length; i++){
    const tr = document.createElement("tr");
    tr.className = "product-manage-item";
    const td = document.createElement("td");
    let nameTd = td.cloneNode(true);
    nameTd.innerText = itemList[i].name;
    nameTd.className = "product-manage-name";
    let priceTd = td.cloneNode(true);
    priceTd.innerText = itemList[i].price;
    priceTd.className = "product-manage-price";
    let countTd = td.cloneNode(true);
    countTd.innerText = itemList[i].count;
    tr.append(nameTd, priceTd, countTd);
    $("#product-table").appendChild(tr);
  }
}
export default function AddModeDrawTable() {
  
  $('#content').append(addTable());
  const table = $("#product-table");
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  table.appendChild(addTableHead());
  const itemList = JSON.parse(localStorage.getItem('itemList'));
  drawItemInTable(itemList);
} 