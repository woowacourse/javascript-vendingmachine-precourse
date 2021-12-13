import { DRINK_STORAGE_NAME } from '../constants/constants.js';
import { DRINK_QUANTITY_KEY } from '../constants/drinkConstants.js';
import getTargetIndex from '../modules/getTargetIndex.js';
import store from './store.js';

export default function updateDrinkStorage(productName) {
  let drinkStorageData = store.getLocalStorage(DRINK_STORAGE_NAME);
  let targetIndex = getTargetIndex(productName);
  drinkStorageData[targetIndex][DRINK_QUANTITY_KEY] =
    Number(drinkStorageData[targetIndex][DRINK_QUANTITY_KEY]) - 1;
  store.setLocalStoreage(DRINK_STORAGE_NAME, drinkStorageData);
}
