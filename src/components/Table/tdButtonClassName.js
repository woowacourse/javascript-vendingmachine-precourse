import Button from '../Button/button.js';
import { TEXT } from '../../utils/constant.js';

const TdButtonClassName = (className, productName, controller) => {
  const tdButtonClassName = document.createElement('td');
  tdButtonClassName.setAttribute('class', className);
  const button = Button(TEXT.PURCHASE);
  button.addEventListener('click', e => {
    e.preventDefault();
    controller.purchase(productName);
  });
  tdButtonClassName.appendChild(button);
  return tdButtonClassName;
};

export default TdButtonClassName;