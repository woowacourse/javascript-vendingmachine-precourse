import { $ } from '../dom.js';

function addTable() {
  const table = document.createElement('table');
  table.id = "coin-table";
  return table;
}
function addTableHead() {
  const thead = document.createElement('thead');
  const th = document.createElement('th');
  th.style = "border:1px solid #000; border-collapse:collapse";
  const unitTh = th.cloneNode(true);
  unitTh.textContent = "동전";
  const countTh = th.cloneNode(true);
  countTh.textContent = "개수";
  thead.append(unitTh, countTh);
  return thead;
}
function drawItemInTable(coinList) {
  const coinUnit = [500, 100, 50, 10];
  for (let i = 0; i < Object.keys(coinUnit).length; i++){
    const tr = document.createElement("tr");
    tr.className = "product-manage-item";
    const td = document.createElement("td");
    let unitTd = td.cloneNode(true);
    unitTd.innerText = `${coinUnit[i]}원`;
    let countTd = td.cloneNode(true);
    countTd.innerText = `${coinList[i].count}개`;
    countTd.id = `vending-machine-coin-${coinUnit[i]}-quantity`;
    tr.append(unitTd, countTd);
    $("#coin-table").appendChild(tr);
  }
}
export default function ManageModeDrawTable() {
  $('#content').append(addTable());
  const table = $("#coin-table");
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  table.appendChild(addTableHead());
  const coinList = JSON.parse(localStorage.getItem('coinList'));
  drawItemInTable(coinList);
} 