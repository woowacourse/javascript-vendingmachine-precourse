import { getItem, setItem } from './utils/index.js';
import { KEY_MENU_ADD } from '../../components/menu/const.js';

const KEY_CURRENT_MENU = 'current-menu';

export function getCurrentMenu() {
  return getItem(KEY_CURRENT_MENU) || KEY_MENU_ADD;
}

export function setCurrentMenu(newMenu) {
  setItem(KEY_CURRENT_MENU, newMenu);
}
