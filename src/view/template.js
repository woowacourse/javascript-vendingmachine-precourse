export const makeElement = ({ tag, id, innerText, type, placeholder }) => {
  const element = document.createElement(tag);
  if (id) {
    element.id = id;
  }
  if (innerText) {
    element.innerText = innerText;
  }
  if (type) {
    element.type = type;
  }
  if (placeholder) {
    element.placeholder = placeholder;
  }
  return element;
};

export const makeTableRow = (container, elements, tag) => {
  const tr = makeElement({ tag: "tr" });
  elements.forEach(text => {
    const element = makeElement({ tag, innerText: text });
    tr.append(element);
  });
  container.append(tr);
};
