const getInputValueById = elementId => {
  const $element = document.getElementById(elementId);

  return $element.value;
};

export { getInputValueById };
