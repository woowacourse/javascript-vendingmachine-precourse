import { KEY_MENUS } from './const.js';

function isValidMenuKey(menuKey) {
  return KEY_MENUS.includes(menuKey);
}

export default isValidMenuKey;
