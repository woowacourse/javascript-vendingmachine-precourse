function setStyleProperties(element, props) {
  Object.keys(props).forEach((prop) =>
    element.style.setProperty(prop, props[prop])
  );
}

export default setStyleProperties;
