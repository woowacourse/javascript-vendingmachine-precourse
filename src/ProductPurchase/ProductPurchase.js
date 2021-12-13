import { createMenuDiv } from '../common/CreateElement.js';
import { $app } from '../common/elements.js';

import createMoneyInput from './MoneyInput.js';
import createPurchasableList from './PurchasableList.js';
import createChange from './Change.js';

function createProductPurchaseDiv() {
  const id = 'product-purchase-div';
  const productPurchaseDiv = createMenuDiv(id);

  return productPurchaseDiv;
}

export default function createProductPurchase() {
  const productPurchaseDiv = createProductPurchaseDiv();
  const moneyInput = createMoneyInput();
  const purchasableList = createPurchasableList();
  const change = createChange();
  productPurchaseDiv.append(moneyInput, purchasableList, change);
  $app.append(productPurchaseDiv);
}
