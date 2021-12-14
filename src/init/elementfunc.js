import { ZERO, COIN_UNIT } from '../constants.js';

export function createTag(tag, id, text) {
  const element = document.createElement(`${tag}`);
  appendId(element, id);
  appendText(element, text);

  return element;
}

export function appendText(element, text) {
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
}

export function appendId(element, id) {
  element.setAttribute('id', id);
}

export function appendTitle(element, text) {
  const title = document.createElement('h3');
  title.innerHTML = text;
  element.appendChild(title);
}

export function appendSpanData(element, id, datasetKey, datasetVal) {
  const text = document.createElement('span');
  text.setAttribute(datasetKey, datasetVal);
  appendId(text, id);
  element.appendChild(text);
}

export function appendClass(element, className) {
  element.setAttribute('class', className);
}

export function createInput(element, text, type, id) {
  const input = document.createElement('input');
  input.placeholder = text;
  input.type = type;
  appendId(input, id);
  element.appendChild(input);
}

export function createBtn(element, text, id) {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  appendText(btn, text);

  element.appendChild(btn);
}

export function createBtnClass(element, text, className) {
  const btn = document.createElement('button');
  btn.setAttribute('class', className);
  appendText(btn, text);

  element.appendChild(btn);
}

export function createBtnClassDataset(element, text, className, datasetKey, datasetVal) {
  const btn = document.createElement('button');
  btn.setAttribute('class', className);
  btn.setAttribute(datasetKey, datasetVal);
  appendText(btn, text);

  element.appendChild(btn);
}

// create table func
export function createTable(bodyID, thArr) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  tbody.setAttribute('id', bodyID);

  table.appendChild(thead);
  table.appendChild(tbody);

  let tableRow = document.createElement('tr');
  for (let th of thArr) {
    createTh(tableRow, th);
  }
  thead.appendChild(tableRow);
  appendTableStyle(table);
  appendTheadStyle(thead);
  appendTheadStyle(tbody);

  return table;
}

export function createTableRow(textArr, idArr, tbody) {
  textArr.forEach((text, idx) => {
    let tableRow = document.createElement('tr');
    createTh(tableRow, text);

    let head_2 = document.createElement('th');
    appendId(head_2, idArr[idx]);
    head_2.innerHTML = ZERO + COIN_UNIT;

    tableRow.appendChild(head_2);
    tbody.appendChild(tableRow);
  });
}

export function appendTableStyle(table) {
  table.style.borderCollapse = 'collapse';
  table.style.borderSpacing = 0;
}

export function appendTheadStyle(thead) {
  const tr = thead.querySelectorAll('tr');
  for (let t of tr) {
    t.style.padding = '10px';
    t.style.border = '1px solid #000';
  }
  const th = thead.querySelectorAll('th');
  for (let t of th) {
    t.style.padding = '15px';
    t.style.border = '1px solid #000';
  }
}

export function createTh(tableRow, text) {
  let head = document.createElement('th');
  head.innerHTML = text;

  tableRow.appendChild(head);
}

export function createThClassDataset(tableRow, text, className, datasetKey, datasetVal) {
  let head = document.createElement('th');
  head.innerHTML = text;
  head.setAttribute(datasetKey, datasetVal);
  appendClass(head, className);

  tableRow.appendChild(head);
}
