import { DOM_ID_SELECTOR, PRODUCT_MANAGE_MESSAGE } from './constants.js';
import makeButton from './makeButton.js';
import makeInput from './makeInput.js';

const makeTitle = (text) => {
  const $title = document.createElement('h3');
  $title.appendChild(document.createTextNode(text));

  return $title;
};

const makeProductAddForm = () => {
  const $productAddForm = document.createElement('form');
  const $productNameInput = makeInput(DOM_ID_SELECTOR.productNameInput, 'text', PRODUCT_MANAGE_MESSAGE.productName);
  const $productPriceInput = makeInput(DOM_ID_SELECTOR.productPriceInput, 'number', PRODUCT_MANAGE_MESSAGE.productPrice);
  const $productQuantityInput = makeInput(DOM_ID_SELECTOR.productQuantityInput, 'number', PRODUCT_MANAGE_MESSAGE.productQuantity);
  const $productAddButton = makeButton(PRODUCT_MANAGE_MESSAGE.productAddButton, DOM_ID_SELECTOR.productAddButton, 'submit');

  $productAddForm.appendChild($productNameInput);
  $productAddForm.appendChild($productPriceInput);
  $productAddForm.appendChild($productQuantityInput);
  $productAddForm.appendChild($productAddButton);

  return $productAddForm;
};

const makeTableHeader = (headerElements) => {
  const $tableHeader = document.createElement('thead');

  const $tableRow = document.createElement('tr');
  headerElements.forEach((header) => {
    const $th = document.createElement('th');
    $th.appendChild(document.createTextNode(header));
    $tableRow.appendChild($th);
  });

  $tableHeader.appendChild($tableRow);
  return $tableHeader;
};

const makeTable = (headerElements) => {
  const $table = document.createElement('table');
  $table.setAttribute('id', DOM_ID_SELECTOR.productManageTable);

  const $tableHeader = makeTableHeader(headerElements);
  $table.appendChild($tableHeader);

  return $table;
};

const renderProductAddTemplate = () => {
  const $content = document.getElementById(DOM_ID_SELECTOR.content);
  $content.innerHTML = '';

  $content.appendChild(makeTitle(PRODUCT_MANAGE_MESSAGE.productAdd));
  $content.appendChild(makeProductAddForm());

  $content.appendChild(makeTitle(PRODUCT_MANAGE_MESSAGE.productStatus));
  $content.appendChild(makeTable([PRODUCT_MANAGE_MESSAGE.productName, PRODUCT_MANAGE_MESSAGE.productPrice, PRODUCT_MANAGE_MESSAGE.productQuantity]));
};

export default renderProductAddTemplate;
