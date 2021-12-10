export const $ = (selector, target = document) =>
  target.querySelector(selector);

export const newElement = element => {
  const template = document.createElement('template');
  template.innerHTML = element;
  return template.content.children[0];
};
