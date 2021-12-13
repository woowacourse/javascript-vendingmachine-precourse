// html element 중 input의 value getter & setter
const getInputValueById = elementId => {
  const $element = document.getElementById(elementId);

  return $element.value;
};

const setInputValueById = (elementId, value) => {
  const $element = document.getElementById(elementId);

  $element.value = value;
};

export { getInputValueById, setInputValueById };
