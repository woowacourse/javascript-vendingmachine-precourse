import { MARGIN } from '../../utils/constant.js';

const Input = placeholder => {
  const input = document.createElement('input');
  input.setAttribute('placeholder', placeholder);
  input.style.margin = MARGIN;
  return input;
};

export default Input;