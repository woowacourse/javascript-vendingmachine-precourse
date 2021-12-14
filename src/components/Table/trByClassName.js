import Tr from './tr.js';

const TrByClassName = (tds, className) => {
  const trByClassName = Tr(tds);
  trByClassName.setAttribute('class', className);
  return trByClassName;
};

export default TrByClassName;