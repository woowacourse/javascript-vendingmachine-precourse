import { $ } from '../utils/utils.js';

const DOMUtils = {
  initElement: selector => {
    $(selector).innerHTML = '';
  },
};

export default DOMUtils;
