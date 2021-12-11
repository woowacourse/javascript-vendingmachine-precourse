import isValidMenuKey from '../menu/isValidMenuKey.js';
import createDivision from '../utils/createDivision.js';
import appendChildren from '../utils/appendChildren.js';
import { DICT_ID_MENU_CONTENT, DICT_MENU_CONTENT } from './const.js';

const createMenuContentByKey = (menuKey) => {
  if (!isValidMenuKey(menuKey)) return undefined;

  const content = createDivision({ id: DICT_ID_MENU_CONTENT[menuKey] });
  content.dataset.menuKey = menuKey;
  appendChildren(content, DICT_MENU_CONTENT[menuKey]);

  return content;
};

export default createMenuContentByKey;
