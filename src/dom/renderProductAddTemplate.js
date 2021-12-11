import { DOM_ID_SELECTOR, PRODUCT_MANAGE_MESSAGE } from '../constants.js';
import makeButton from './common/makeButton.js';
import makeInput from './common/makeInput.js';
import makeForm from './common/makeForm.js';
import makeTitle from './common/makeTitle.js';
import makeTable from './common/makeTable.js';

const makeProductAddForm = () => {
  const $productNameInput = makeInput(DOM_ID_SELECTOR.productNameInput, 'text', PRODUCT_MANAGE_MESSAGE.productName);
  const $productPriceInput = makeInput(DOM_ID_SELECTOR.productPriceInput, 'number', PRODUCT_MANAGE_MESSAGE.productPrice);
  const $productQuantityInput = makeInput(DOM_ID_SELECTOR.productQuantityInput, 'number', PRODUCT_MANAGE_MESSAGE.productQuantity);
  const $productAddButton = makeButton(PRODUCT_MANAGE_MESSAGE.productAddButton, DOM_ID_SELECTOR.productAddButton, 'submit');

  const productInputs = [$productNameInput, $productPriceInput, $productQuantityInput];

  return makeForm(productInputs, $productAddButton);
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
