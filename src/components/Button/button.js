import { MARGIN } from '../../utils/constant.js';

const Button = text => {
  const button = document.createElement('button');
  button.innerText = text;
  button.style.margin = MARGIN;
  return button;
};

export default Button;
