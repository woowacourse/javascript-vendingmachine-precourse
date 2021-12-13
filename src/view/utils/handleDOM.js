import { EMPTY } from "../../utils/constants.js";

const hideWithID = (id) => {
  document.getElementById(id).style.display = "none";
};

const showWithID = (id) => {
  document.getElementById(id).style.display = "";
};

const createElement = (tag, innerHTML, id, className) => {
  const $newElement = document.createElement(tag);

  if (innerHTML !== EMPTY) {
    $newElement.innerHTML = innerHTML;
  }
  if (id !== EMPTY) {
    $newElement.id = id;
  }
  if (className !== EMPTY) {
    $newElement.className = className;
  }

  return $newElement;
};

export { hideWithID, showWithID, createElement };
