import createElement from "./createElement.js";

export default function createInput(id, placeHolder, type) {
  const input = createElement("input", id);
  if (placeHolder) input.placeholder = placeHolder;
  if (type) input.type = type;
  else input.type = "number";
  return input;
}
