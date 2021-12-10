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

export const makeInputNumberFormToPrint = ({ textData, inputData, buttonData }) => {
  const container = makeElement({ tag: "form" });
  const inputFormTitle = makeElement({ tag: "h3", innerText: textData.title });
  const input = makeElement({
    tag: "input",
    type: "number",
    placeholder: inputData.placeholder,
    id: inputData.id,
  });
  const button = makeElement({
    tag: "button",
    type: "button",
    innerText: buttonData.innerText,
    id: buttonData.id,
  });
  const printTextArea = makeElement({ tag: "p" });
  const printTitle = makeElement({
    tag: "span",
    innerText: textData.printTitle,
    id: textData.printTitleId,
  });
  const printText = makeElement({ tag: "span", id: "print-text" });

  button.addEventListener("click", () => buttonData.handleClickEvent());
  printTextArea.append(printTitle, printText);
  container.append(inputFormTitle, input, button, printTextArea);
  return container;
};
