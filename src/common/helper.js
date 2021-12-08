export const $ = selector => document.querySelector(selector);

export const $closest = (element, selector) => {
  if (element.nodeType === 9) return false;

  let $element = element;
  while ($element) {
    if (typeof $element.matches === 'function' && $element.matches(selector)) return $element;

    $element = $element.parentNode;
  }

  return false;
};
