import { $ } from '../dom.js';

function addTable() {
  const table = document.createElement('table');
  table.id = "coin-return-table";
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
function drawItemInTable(coin) {
  const coinUnit = [500, 100, 50, 10];
  for (let i = 0; i < coinUnit.length; i++){
  }
}
export default function CoinTable() {
  $('#content').append(addTable());
  const table = $("#coin-return-table");
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  table.appendChild(addTableHead());
  const coin = JSON.parse(localStorage.getItem('pushCoin'));
  drawItemInTable(coin);
} 