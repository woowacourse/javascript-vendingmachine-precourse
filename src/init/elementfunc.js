export function appendText(element, text) {
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
}

export function appendId(element, id) {
  element.setAttribute('id', id);
}
