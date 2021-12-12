/* eslint-disable */
function setProperties(element, props) {
  Object.keys(props).forEach((prop) => {
    element[prop] = props[prop];
  });
}

export default setProperties;
