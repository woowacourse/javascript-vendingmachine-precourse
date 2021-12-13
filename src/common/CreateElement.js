export function createDiv() {
  return document.createElement('div');
}

export function createHeader(innerText) {
  const header = document.createElement('h3');
  header.innerText = innerText;

  return header;
}

export function createForm() {
  return document.createElement('form');
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
  th.style.padding = '10px 50px';
  th.style.border = '1px solid';
  th.innerText = innerText;

  return th;
}
