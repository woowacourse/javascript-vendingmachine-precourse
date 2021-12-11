import setStyleProperties from '../utils/setStyleProperties.js';
import createElement from '../utils/createElement.js';
import { STYLE_CELL } from './const.js';

const createTableHeadCell = (header) => {
  const th = createElement('th', { innerText: header });
  setStyleProperties(th, STYLE_CELL);

  return th;
};

export default createTableHeadCell;
