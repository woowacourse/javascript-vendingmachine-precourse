export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const createElement = (tagName, tagText = '', options = {}) => {
  const $create = document.createElement(tagName);
  $create.innerText = tagText;

  const { id, className, dataset } = options;
  if (id) $create.id = id;
  if (className) $create.className = className;
  if (dataset) {
    const { datasetName, datasetValue } = dataset;
    $create.setAttribute(datasetName, datasetValue);
  }

  return $create;
};

export const combineElement = (elements) => {
  const $fragment = document.createDocumentFragment();
  $fragment.append(...elements);

  return $fragment;
};

export const removeTags = (value) => value.replace(/(<([^>]+)>)/gi, '');
