import { getItem, setItem } from './utils/index.js';

const KEY_CURRENT_MENU = 'current-menu';

export function getCurrentMenu() {
  return getItem(KEY_CURRENT_MENU);
}

export function setCurrentMenu(newMenu) {
  setItem(KEY_CURRENT_MENU, newMenu);
}
