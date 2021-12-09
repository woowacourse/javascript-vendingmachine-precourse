export const $ = selector => document.querySelector(selector);

const DOMUtils = {
  initElement: selector => {
    $(selector).innerHTML = '';
  },

  getProduct: () => {
    return {
      name: $('#product-name-input').value,
      price: $('#product-price-input').value,
      quantity: $('#product-quantity-input').value,
    };
  },
};

export default DOMUtils;
