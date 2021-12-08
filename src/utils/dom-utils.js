export default function createElement(tag, text, id) {
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
