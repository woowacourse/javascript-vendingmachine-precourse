export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const createElement = (tagName, tagText = '', options = {}) => {
  const $create = document.createElement(tagName);
  $create.innerText = tagText;

  const { id, className } = options;
  if (id) $create.id = id;
  if (className) $create.className = className;

  return $create;
};

export const combineElement = (elements) => {
  const $fragment = document.createDocumentFragment();
  $fragment.append(...elements);

  return $fragment;
};

export const removeTags = (value) => value.replace(/(<([^>]+)>)/gi, '');
