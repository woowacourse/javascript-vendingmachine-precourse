export const $ = (selector, target = document) =>
  target.querySelector(selector);

export const $$ = (selector, target = document) =>
  target.querySelectorAll(selector);

export const newElement = element => {
  const template = document.createElement('template');
  template.innerHTML = element;
  return template.content.children[0];
};

const removeFirstChild = parent => {
  if (!parent.hasChildNodes()) return;
  parent.removeChild(parent.firstChild);
};

export const replaceFirstChild = (parent, newChild) => {
  removeFirstChild(parent);
  parent.appendChild(newChild);
};

export const resetForm = formElement => {
  $$('input', formElement).forEach((input, index) => {
    input.value = '';
    if (index === 0) input.focus();
  });
};

export const getProductInformations = target => {
  const parentNode = target.closest('.product-purchase-item');
  const { productName } = $('.product-purchase-name', parentNode).dataset;
  const { productPrice } = $('.product-purchase-price', parentNode).dataset;
  return { productName, productPrice: Number(productPrice) };
};
