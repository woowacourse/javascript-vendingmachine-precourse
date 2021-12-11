import createElement from '../utils/createElement.js';
import setStyleProperties from '../utils/setStyleProperties.js';
import { STYLE_TABLE } from './const.js';

const createTable = (id) => {
  const table = createElement('table', { id });
  setStyleProperties(table, STYLE_TABLE);

  return table;
};

export default createTable;
