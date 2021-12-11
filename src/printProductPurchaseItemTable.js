import { DOM_ID_SELECTOR, DOM_CLASS_SELECTOR, PRODUCT_PURCHASE_MESSAGE } from './constants.js';
import makeButton from './makeButton.js';

const makeTd = (className, text) => {
  const $td = document.createElement('td');
  $td.className = className;
  $td.appendChild(document.createTextNode(text));

  return $td;
};

const makeButtonTd = (className, text, name, price, quantity) => {
  const $td = document.createElement('td');

  const $button = makeButton(text);
  $button.className = className;

  $button.dataset.productName = name;
  $button.dataset.productPrice = price;
  $button.dataset.productQuantity = quantity;

  $td.appendChild($button);

  return $td;
};

const makeTr = (className) => {
  const $tr = document.createElement('tr');
  $tr.className = className;

  return $tr;
};

const makeProductPurchaseItem = (name, price, quantity) => {
  const $purchaseItem = makeTr(DOM_CLASS_SELECTOR.purchaseItem);

  const $productPurchaseName = makeTd(DOM_CLASS_SELECTOR.productPurchaseName, name);
  const $productPurchasePrice = makeTd(DOM_CLASS_SELECTOR.productPurchasePrice, price);
  const $productPurchaseQuantity = makeTd(DOM_CLASS_SELECTOR.productPurchaseQuantity, quantity);
  const $purchaseButton = makeButtonTd(DOM_CLASS_SELECTOR.purchaseButton, PRODUCT_PURCHASE_MESSAGE.purchase, name, price, quantity);

  $purchaseItem.appendChild($productPurchaseName);
  $purchaseItem.appendChild($productPurchasePrice);
  $purchaseItem.appendChild($productPurchaseQuantity);
  $purchaseItem.appendChild($purchaseButton);

  return $purchaseItem;
};

const printProductPurchaseItemTable = (product) => {
  const $productPurchaseTable = document.getElementById(DOM_ID_SELECTOR.productPurchaseTable);

  const productItems = product.getProductItems();
  for (let name in productItems) {
    const $productPurchaseItem = makeProductPurchaseItem(name, productItems[name].price, productItems[name].quantity);
    $productPurchaseTable.appendChild($productPurchaseItem);
  }
};

export default printProductPurchaseItemTable;
