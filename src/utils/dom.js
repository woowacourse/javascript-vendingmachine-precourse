export const $ = (selector) => document.querySelector(selector);

export const initInput = (...input) => {
  [...input].forEach((input) => {
    input.value = '';
  });
};
