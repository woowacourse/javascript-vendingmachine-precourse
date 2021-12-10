import createElement from "./createElement.js";

export default function createSpan(id, text) {
  const span = createElement("span", id, text);
  return span;
}
