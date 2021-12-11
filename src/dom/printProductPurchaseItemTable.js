import { DOM_ID_SELECTOR, DOM_CLASS_SELECTOR, PRODUCT_PURCHASE_MESSAGE } from '../constants.js';
import attachPurchaseEvent from '../event/attachPurchaseEvent.js';
import makeButton from './common/makeButton.js';

const makeTd = (className, key, value) => {
  const $td = document.createElement('td');
  $td.className = className;
  $td.appendChild(document.createTextNode(value));
  $td.dataset[key] = value;

  return $td;
};

const makeButtonTd = (className, text, productName, vendingMachine) => {
  const $td = document.createElement('td');

  const $button = makeButton(text);
  $button.setAttribute('value', productName);
  $button.className = className;

  attachPurchaseEvent($button, vendingMachine);

  $td.appendChild($button);

  return $td;
};

const makeTr = (className) => {
  const $tr = document.createElement('tr');
  $tr.className = className;

  return $tr;
};

const removeProductPurchaseItems = () => {
  const $productPurchaseItems = document.getElementsByClassName(DOM_CLASS_SELECTOR.purchaseItem);

  while ($productPurchaseItems.length > 0) {
    $productPurchaseItems[0].remove();
  }
};

const makeProductPurchaseItem = (name, price, quantity, vendingMachine) => {
  const $purchaseItem = makeTr(DOM_CLASS_SELECTOR.purchaseItem);

  const $productPurchaseName = makeTd(DOM_CLASS_SELECTOR.productPurchaseName, 'productName', name);
  const $productPurchasePrice = makeTd(DOM_CLASS_SELECTOR.productPurchasePrice, 'productPrice', price);
  const $productPurchaseQuantity = makeTd(DOM_CLASS_SELECTOR.productPurchaseQuantity, 'productQuantity', quantity);
  const $purchaseButton = makeButtonTd(DOM_CLASS_SELECTOR.purchaseButton, PRODUCT_PURCHASE_MESSAGE.purchase, name, vendingMachine);

  $purchaseItem.appendChild($productPurchaseName);
  $purchaseItem.appendChild($productPurchasePrice);
  $purchaseItem.appendChild($productPurchaseQuantity);
  $purchaseItem.appendChild($purchaseButton);

  return $purchaseItem;
};

const printProductPurchaseItemTable = (vendingMachine) => {
  const $productPurchaseTable = document.getElementById(DOM_ID_SELECTOR.productPurchaseTable);
  removeProductPurchaseItems();

  const productItems = vendingMachine.product.getProductItems();
  for (let name in productItems) {
    const $productPurchaseItem = makeProductPurchaseItem(name, productItems[name].price, productItems[name].quantity, vendingMachine);
    $productPurchaseTable.appendChild($productPurchaseItem);
  }
};

export default printProductPurchaseItemTable;
