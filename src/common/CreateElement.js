export function createDiv() {
  return document.createElement('div');
}

export function createButton(id, innerText) {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.innerText = innerText;

  return button;
}
