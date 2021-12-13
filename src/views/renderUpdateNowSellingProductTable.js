import { DRINK_STORAGE_NAME } from '../constants/constants.js';
import { DRINK_QUANTITY_KEY } from '../constants/drinkConstants.js';
import getTargetIndex from '../modules/getTargetIndex.js';
import store from '../storage/store.js';

export default function renderUpdateNowSellingProductTable(
  productName,
  clickedParentNode
) {
  const quantityNode = clickedParentNode.children[2];
  const targetIndex = getTargetIndex(productName);
  const drinkStorage = store.getLocalStorage(DRINK_STORAGE_NAME);
  quantityNode.innerText = drinkStorage[targetIndex][DRINK_QUANTITY_KEY];
}
