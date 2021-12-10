import createElement from "./createElement.js";

function createH1(text) {
  const h1 = createElement("h1", "", text);
  return h1;
}

function createH3(text) {
  const h3 = createElement("h3", "", text);
  return h3;
}

export { createH1, createH3 };
