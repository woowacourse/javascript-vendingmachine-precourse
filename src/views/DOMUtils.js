export const $ = selector => document.querySelector(selector);

const DOMUtils = {
  initElement: selector => {
    $(selector).innerHTML = '';
  },
};

export default DOMUtils;
