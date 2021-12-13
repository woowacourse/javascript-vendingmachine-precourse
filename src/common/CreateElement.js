import { setDisplayNone, setTableStyle } from './elements.js';

export function createDiv() {
  return document.createElement('div');
}

export function createMenuDiv(id) {
  const menuDiv = createDiv();
  menuDiv.setAttribute('id', id);

  if (localStorage.getItem(id)) {
    menuDiv.style.display = localStorage.getItem(id);
  } else {
    setDisplayNone(menuDiv);
  }

  return menuDiv;
}

export function createHeader(innerText) {
  const header = document.createElement('h3');
  header.innerText = innerText;

  return header;
}

export function createForm() {
  const form = document.createElement('form');
  form.style.display = 'flex';
  form.style.marginBottom = '10px';

  return form;
}

export function createNumberInput(id, placeholder) {
  const numberInput = document.createElement('input');
  numberInput.setAttribute('id', id);
  numberInput.setAttribute('type', 'number');
  numberInput.setAttribute('placeholder', placeholder);

  return numberInput;
}

export function createButton(id, innerText) {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.innerText = innerText;

  return button;
}

export function createTable() {
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  table.append(thead, tbody);

  return table;
}

export function createTableRow() {
  return document.createElement('tr');
}

export function createTableHeader(innerText) {
  const th = document.createElement('th');
  th.innerText = innerText;
  setTableStyle(th);

  return th;
}

export function createTableData(innerText) {
  const td = document.createElement('td');
  td.innerText = innerText;
  setTableStyle(td);

  return td;
}
