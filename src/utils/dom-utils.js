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

export function createTr(classes, ...items) {
  const $tr = createElement('tr');
  items.forEach((item, index) => {
    const $td = createElement('td', item);
    if (classes) {
      $td.classList.add(classes[index]);
    }
    $tr.appendChild(styleTd($td));
  });
  return $tr;
}
