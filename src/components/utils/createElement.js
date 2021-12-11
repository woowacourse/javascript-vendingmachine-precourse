const createElement = (tagName, props) => {
  const element = document.createElement(tagName);

  if (props !== undefined) {
    Object.keys(props).forEach((prop) => {
      element[prop] = props[prop];
    });
  }

  return element;
};

export default createElement;
