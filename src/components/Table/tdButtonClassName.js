import Button from '../Button/button.js';

const TdButtonClassName = (className, productName, controller) => {
  const tdButtonClassName = document.createElement('td');
  tdButtonClassName.setAttribute = className;
  const button = Button('구매하기');//상수화할것
  button.addEventListener('click', e=>{
    e.preventDefault();
    controller.purchase(productName);
  });
  tdButtonClassName.appendChild(button);
  return tdButtonClassName;
}

export default TdButtonClassName;