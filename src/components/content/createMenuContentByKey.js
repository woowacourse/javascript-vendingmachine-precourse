import isValidMenuKey from '../menu/isValidMenuKey.js';
import createDivision from '../utils/createDivision.js';
import { DICT_ID_MENU_CONTENT } from './const.js';

const createMenuContentByKey = (menuKey) => {
  if (!isValidMenuKey(menuKey)) return undefined;

  const content = createDivision(DICT_ID_MENU_CONTENT[menuKey]);
  content.dataset.menuKey = menuKey;

  return content;
};

export default createMenuContentByKey;
