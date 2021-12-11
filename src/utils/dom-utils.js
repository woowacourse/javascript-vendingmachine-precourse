import { TD } from '../constant/style.js';

export function createElement(tag, text, id) {
  const $container = document.createElement(tag);

  if (text) {
    const $textNode = document.createTextNode(text);
    $container.appendChild($textNode);
  }

  if (id) {
    $container.id = id;
  }

  return $container;
}

export function createInput(id, hint, type) {
  const $input = createElement('input', null, id);
  $input.placeholder = hint;
  $input.type = type;
  return $input;
}

function styleTd($td) {
  const $cloneTd = $td.cloneNode(true);
  $cloneTd.style.border = TD.BORDER;
  $cloneTd.style.width = TD.WIDTH;
  $cloneTd.style.textAlign = TD.TEXT_ALIGN;

  return $cloneTd;
}

export function createTr(...items) {
  const $tr = createElement('tr');
  items.forEach((item) => {
    const $td = createElement('td', item);

    $tr.appendChild(styleTd($td));
  });
  return $tr;
}

export function createTrByClass(classes, ...items) {
  const $tr = createTr(...items);
  $tr.childNodes.forEach((node, idx) => {
    node.classList.add(classes[idx]);
  });
  return $tr;
}

export function createTrById(ids, ...items) {
  const $tr = createTr(...items);
  $tr.childNodes.forEach((node, idx) => {
    node.id = ids[idx];
  });
  return $tr;
}
