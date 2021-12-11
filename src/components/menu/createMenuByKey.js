import createButton from '../utils/createButton.js';
import { DICT_ID_MENU, DICT_TEXT_MENU, ACTION_CLICK_MENU } from './const.js';
import isValidMenuKey from './isValidMenuKey.js';

const createMenuByKey = (menuKey) => {
  if (!isValidMenuKey(menuKey)) return undefined;

  const menu = createButton(
    DICT_ID_MENU[menuKey],
    DICT_TEXT_MENU[menuKey],
    ACTION_CLICK_MENU
  );
  menu.dataset.menuKey = menuKey;

  return menu;
};

export default createMenuByKey;