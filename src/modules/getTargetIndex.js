import { DRINK_STORAGE_NAME } from '../constants/constants.js';
import { DRINK_MENU_KEY } from '../constants/drinkConstants.js';
import store from '../storage/store.js';

export default function getTargetIndex(productName) {
  const drinkStorage = store.getLocalStorage(DRINK_STORAGE_NAME);
  let targetIndex = 0;
  drinkStorage.forEach((item, index) => {
    if (item[DRINK_MENU_KEY] === productName) {
      targetIndex = index;
    }
  });
  return targetIndex;
}
