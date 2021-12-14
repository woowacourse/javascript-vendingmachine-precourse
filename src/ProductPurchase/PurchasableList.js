import { HEADER } from '../common/constants.js';
import { createDiv, createHeader } from '../common/CreateElement.js';

import createPurchasableListTable from './CreatePurchasableTable.js';

export default function createPurchasableList() {
  const purchasableListDiv = createDiv();
  const purchasableListHeader = createHeader(HEADER.PURCHASABLE_LIST);
  const purchasableListTable = createPurchasableListTable();
  purchasableListDiv.append(purchasableListHeader, purchasableListTable);

  return purchasableListDiv;
}
