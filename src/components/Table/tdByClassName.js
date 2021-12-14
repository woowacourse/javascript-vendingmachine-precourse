import Td from './td.js';

const TdByClassName = (text, className) => {
  const tdByClassName = Td(text);
  tdByClassName.setAttribute('class', className);
  return tdByClassName;
};

export default TdByClassName;