export default function createElement(tag, id, textContent) {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (textContent) element.textContent = textContent;

  return element;
}
