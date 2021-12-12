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

export function createInput(element, text, type, id) {
  const input = document.createElement('input');
  input.value = text;
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

export function createTh(tableRow, text) {
  let head = document.createElement('th');
  head.innerHTML = text;

  tableRow.appendChild(head);
}

export function appendTableStyle(table, thead) {
  table.style.borderCollapse = 'collapse';
  table.style.borderSpacing = 0;

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
