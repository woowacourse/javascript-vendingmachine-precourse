import { KEY_TABS } from '../const.js';

function isValidTabKey(tabKey) {
  return KEY_TABS.includes(tabKey);
}

export default isValidTabKey;
