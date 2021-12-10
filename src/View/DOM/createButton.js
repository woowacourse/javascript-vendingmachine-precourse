import createElement from "./createElement.js";

export default function createButton(id, text) {
  const button = createElement("button", id, text);
  return button;
}
