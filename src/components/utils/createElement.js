import setProperties from './setProperties.js';

const createElement = (tagName, props) => {
  const element = document.createElement(tagName);

  if (props !== undefined) setProperties(element, props);

  return element;
};

export default createElement;
