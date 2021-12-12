import createElement from "./createElement.js";

export default function createButton(id, text, className) {
  const button = createElement("button", id, text);
  if (className) {
    button.className = className;
  }
  return button;
}
