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

export function appendPDataset(element, innerText, id, datasetKey, datasetVal) {
  const text = document.createElement('p');
  text.innerHTML = innerText;
  text.setAttribute(datasetKey, datasetVal);
  appendId(text, id);
  element.appendChild(text);
}

export function appendClass(element, className) {
  element.setAttribute('class', className);
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

export function createTh(tableRow, text) {
  let head = document.createElement('th');
  head.innerHTML = text;

  tableRow.appendChild(head);
}

export function createBtnClassDataset(element, text, className, datasetKey, datasetVal) {
  const btn = document.createElement('button');
  btn.setAttribute('class', className);
  btn.setAttribute(datasetKey, datasetVal);
  appendText(btn, text);

  element.appendChild(btn);
}

export function createThClassDataset(tableRow, text, className, datasetKey, datasetVal) {
  let head = document.createElement('th');
  head.innerHTML = text;
  head.setAttribute(datasetKey, datasetVal);
  appendClass(head, className);

  tableRow.appendChild(head);
}