import { DOM_ID_SELECTOR, DOM_CLASS_SELECTOR } from './constants.js';

const makeProductManageTableTd = (className, text) => {
  const $td = document.createElement('td');
  $td.className = className;
  $td.appendChild(document.createTextNode(text));

  return $td;
};

const makeProductManageItem = (name, price, quantity) => {
  const $productManageItem = document.createElement('tr');
  $productManageItem.className = DOM_CLASS_SELECTOR.productManageItem;

  const $productManageName = makeProductManageTableTd(DOM_CLASS_SELECTOR.productManageName, name);
  const $productManagePrice = makeProductManageTableTd(DOM_CLASS_SELECTOR.productManagePrice, price);
  const $productManageQuantity = makeProductManageTableTd(DOM_CLASS_SELECTOR.productManageQuantity, quantity);

  $productManageItem.appendChild($productManageName);
  $productManageItem.appendChild($productManagePrice);
  $productManageItem.appendChild($productManageQuantity);

  return $productManageItem;
};

const removeProductManageItems = () => {
  const $productManageItems = document.getElementsByClassName(DOM_CLASS_SELECTOR.productManageItem);

  while ($productManageItems.length > 0) {
    $productManageItems[0].remove();
  }
};

const printProductManageTable = (productItems) => {
  const $productManageTable = document.getElementById(DOM_ID_SELECTOR.productManageTable);
  removeProductManageItems();

  for (let name in productItems) {
    const $productManageItem = makeProductManageItem(name, productItems[name].price, productItems[name].quantity);
    $productManageTable.appendChild($productManageItem);
  }
};

export default printProductManageTable;
