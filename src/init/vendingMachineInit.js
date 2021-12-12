import { COIN_ARR, MACHINE_MANAGE, ZERO } from '../constants.js';
import * as func from './elementfunc.js';

function setTableBody10(tbody) {
  let table10Row = document.createElement('tr');
  func.createTh(table10Row, MACHINE_MANAGE.COIN_10);
  let heading_2 = document.createElement('th');
  func.appendId(heading_2, 'vending-machine-coin-10-quantity');
  heading_2.innerHTML = ZERO + '개';

  table10Row.appendChild(heading_2);
  tbody.appendChild(table10Row);
}

function setTableBody50(tbody) {
  let table50Row = document.createElement('tr');
  func.createTh(table50Row, MACHINE_MANAGE.COIN_50);
  let heading_2 = document.createElement('th');
  func.appendId(heading_2, 'vending-machine-coin-50-quantity');
  heading_2.innerHTML = ZERO + '개';

  table50Row.appendChild(heading_2);
  tbody.appendChild(table50Row);
}

function setTableBody100(tbody) {
  let table100Row = document.createElement('tr');
  func.createTh(table100Row, MACHINE_MANAGE.COIN_100);
  let heading_2 = document.createElement('th');
  func.appendId(heading_2, 'vending-machine-coin-100-quantity');
  heading_2.innerHTML = ZERO + '개';

  table100Row.appendChild(heading_2);
  tbody.appendChild(table100Row);
}

function setTableBody500(tbody) {
  let table500Row = document.createElement('tr');

  func.createTh(table500Row, MACHINE_MANAGE.COIN_500);
  let heading_2 = document.createElement('th');
  func.appendId(heading_2, 'vending-machine-coin-500-quantity');
  heading_2.innerHTML = ZERO + '개';
  table500Row.appendChild(heading_2);

  tbody.appendChild(table500Row);
}

// function setTableBody(tbody) {
//   let tableRow = document.createElement('tr');
//   console.log(COIN_ARR);
//   for (let c of COIN_ARR) {
//     console.log(c);
//     func.createTh(tableRow, MACHINE_MANAGE.${COIN_c});
//     let heading_2 = document.createElement('th');
//     func.appendId(heading_2, `vending-machine-coin-${c}-quantity`);
//     heading_2.innerHTML = ZERO + '개';
//     tableRow.appendChild(heading_2);

//     tbody.appendChild(tableRow);
//   }
// }

function setTableBody(tbody) {
  setTableBody500(tbody);
  setTableBody100(tbody);
  setTableBody50(tbody);
  setTableBody10(tbody);
}

function setTableStyle(table, thead, tbody) {
  func.appendTableStyle(table);
  func.appendTheadStyle(thead);
  func.appendTheadStyle(tbody);
}

// set thead
function setTableHead(thead) {
  let tableRow = document.createElement('tr');
  func.createTh(tableRow, MACHINE_MANAGE.COIN);
  func.createTh(tableRow, MACHINE_MANAGE.NUMBER_OF_COIN);

  thead.appendChild(tableRow);
}

// 표 요소 추가
function setTable(vendingMachineDiv) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  func.appendId(table, 'vending-machine-charge-amount');
  table.appendChild(thead);
  table.appendChild(tbody);

  setTableHead(thead);
  setTableBody(tbody);

  setTableStyle(table, thead, tbody);
  vendingMachineDiv.appendChild(table);
}

function setVendingChargeAmount(vendingMachineDiv) {
  func.appendP(
    vendingMachineDiv,
    MACHINE_MANAGE.COIN_STORAGE,
    'vending-machine-charge-amount',
  );
}

function setVendingChargeBtn(vendingMachineDiv) {
  func.createBtn(
    vendingMachineDiv,
    MACHINE_MANAGE.ADD_BTN,
    'vending-machine-charge-button',
  );
}

function setVendingChargeInput(vendingMachineDiv) {
  func.createInput(
    vendingMachineDiv,
    MACHINE_MANAGE.INPUT,
    'number',
    'vending-machine-charge-input',
  );
}

function createVendingMachineDiv() {
  const vendingMachineDiv = document.createElement('div');
  func.appendId(vendingMachineDiv, 'vending-machine-charge');

  func.appendTitle(vendingMachineDiv, MACHINE_MANAGE.ADD_TITLE);
  setVendingChargeInput(vendingMachineDiv);
  setVendingChargeBtn(vendingMachineDiv);
  setVendingChargeAmount(vendingMachineDiv);

  func.appendTitle(vendingMachineDiv, MACHINE_MANAGE.COIN_TITLE);
  setTable(vendingMachineDiv);

  document.querySelector('#app').appendChild(vendingMachineDiv);
}

export default function vendingMachineInit() {
  createVendingMachineDiv();
}
