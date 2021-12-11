import createElement from '../utils/createElement.js';
import setStyleProperties from '../utils/setStyleProperties.js';
import { STYLE_CELL } from './const.js';

const createDataCell = (data, props) => {
  const td = createElement('td', { ...props, innerText: data });
  setStyleProperties(td, STYLE_CELL);

  return td;
};

export default createDataCell;
