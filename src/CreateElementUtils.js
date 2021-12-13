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

  if ('value' in item && item.value !== undefined) {
    element.innerText = item.value;
  }

  return element;
};

// argument array element format: {tag, attributes, value}
export const createElements = function createMultipleElements(array) {
  const elements = array.map((item) => customCreateElement(item));
  return elements;
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
