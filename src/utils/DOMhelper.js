export const $ = (selector, element = document) => element.querySelector(selector);

export const $$ = (selectors, element = document) => element.querySelectorAll(selectors);
