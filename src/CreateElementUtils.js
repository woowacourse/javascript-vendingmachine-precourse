// ============== CREATE ELEMENTS FUNCTIONS ==============
const createAttribute = function createCustomAttributes(name, value) {
  const attribute = document.createAttribute(name);
  attribute.value = value;
  return attribute;
};

function createElementWithAttribute(item) {
  const attributes = Object.keys(item.attributes)
    .filter((name) => item.attributes[name])
    .map((name) => {
      const value = item.attributes[name];
      return createAttribute(name, value);
    });
  const element = attributes.reduce((e, attribute) => {
    e.setAttributeNode(attribute);
    return e;
  }, document.createElement(item.tag));

  return element;
}

export const customCreateElement = function createSingleElement(item) {
  const element = item.attributes
    ? createElementWithAttribute(item)
    : document.createElement(item.tag);

  if ('value' in item) element.innerText = item.value;
  return element;
};

// argument array element format: {tag, attributes, value}
export const createElements = function createMultipleElements(array) {
  const elements = array.map((item) => customCreateElement(item));
  return elements;
};

export const createObjForElement = function createObjectForElement(
  tag,
  attributes,
  value,
) {
  return { tag, attributes, value };
};

// ============== CREATE CONTAINER FUNCTION ==============
export function createContainer(container, elements, id) {
  const containerElement = elements.reduce((c, element) => {
    c.appendChild(element);
    return c;
  }, container);

  if (id) containerElement.id = id;
  return containerElement;
}

// ============== CREATE GRID ITEMS FUNCTIONS ==============
export default function addBorders(elements) {
  const newElements = elements.map((e) => {
    const newElement = e;
    newElement.style.border = '1px solid #000';
    return newElement;
  });

  return newElements;
}

// add single row to grid
export function addGridElements(grid, items) {
  const gridRow = createElements(items);
  const borderedGridRows = addBorders(gridRow);

  borderedGridRows.forEach((row) => grid.appendChild(row));
}

// create grid template with headers
export function createGridDiv(size, items, id, className) {
  const grid = customCreateElement({
    tag: 'div',
    attributes: { id, class: className },
  });
  grid.style.display = 'grid';
  grid.style.textAlign = 'center';
  grid.style.gridTemplateColumns = size;

  addGridElements(grid, items);

  return grid;
}

// ============== CREATE AMOUNT SHOWING FUNCTION ==============
export function createAmountP(label, id) {
  const chargeAmountP = customCreateElement({
    tag: 'p',
    value: label,
  });

  const chargeAmountSpan = customCreateElement({
    tag: 'span',
    attributes: { id },
  });

  chargeAmountP.appendChild(chargeAmountSpan);

  return chargeAmountP;
}
