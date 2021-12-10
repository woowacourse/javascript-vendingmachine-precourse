import { DOM_ID_SELECTOR, PRODUCT_MANAGE_MESSAGE } from './constants.js';
import makeButton from './makeButton.js';
import makeInput from './makeInput.js';
import makeTitle from './makeTitle.js';
import makeTable from './makeTable.js';

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

const renderProductAddTemplate = () => {
  const $content = document.getElementById(DOM_ID_SELECTOR.content);
  $content.innerHTML = '';

  $content.appendChild(makeTitle(PRODUCT_MANAGE_MESSAGE.productAdd));
  $content.appendChild(makeProductAddForm());

  const headerElements = [PRODUCT_MANAGE_MESSAGE.productName, PRODUCT_MANAGE_MESSAGE.productPrice, PRODUCT_MANAGE_MESSAGE.productQuantity];
  $content.appendChild(makeTitle(PRODUCT_MANAGE_MESSAGE.productStatus));
  $content.appendChild(makeTable(headerElements, DOM_ID_SELECTOR.productManageTable));
};

export default renderProductAddTemplate;
