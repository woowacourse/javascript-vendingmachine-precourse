import createElement from "./createElement.js";

export default function createDiv(id, text) {
  const div = createElement("div", id, text);
  return div;
}
