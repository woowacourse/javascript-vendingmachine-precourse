export const mapObject = (obj, f) =>
  Object.fromEntries(Object.entries(obj).map(f));

export const $tag = (tagName) => document.createElement(tagName);
