import { COIN_UNIT, MACHINE_MANAGE, ZERO } from '../constants.js';
import * as func from './elementfunc.js';

function setTableBody(tbody) {
  const textArr = [
    MACHINE_MANAGE.COIN_500,
    MACHINE_MANAGE.COIN_100,
    MACHINE_MANAGE.COIN_50,
    MACHINE_MANAGE.COIN_10,
  ];

  const idArr = [
    'vending-machine-coin-500-quantity',
    'vending-machine-coin-100-quantity',
    'vending-machine-coin-50-quantity',
    'vending-machine-coin-10-quantity',
  ];
  func.createTableRow(textArr, idArr, tbody);
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

  table.appendChild(thead);
  table.appendChild(tbody);

  setTableHead(thead);
  setTableBody(tbody);

  setTableStyle(table, thead, tbody);
  vendingMachineDiv.appendChild(table);
}

function setVendingChargeAmount(vendingMachineDiv) {
  const amountText = func.createTag('p', 'amount', MACHINE_MANAGE.COIN_STORAGE);
  func.appendSpanData(amountText, 'vending-machine-charge-amount', 'data-machine-amount', 0);

  vendingMachineDiv.appendChild(amountText);
}

function setVendingChargeBtn(vendingMachineDiv) {
  func.createBtn(vendingMachineDiv, MACHINE_MANAGE.ADD_BTN, 'vending-machine-charge-button');
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
