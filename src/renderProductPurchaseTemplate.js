import { DOM_ID_SELECTOR, PRODUCT_PURCHASE_MESSAGE } from './constants.js';
import makeButton from './makeButton.js';
import makeForm from './makeForm.js';
import makeInput from './makeInput.js';
import makeTitle from './makeTitle.js';
import makeTable from './makeTable.js';

const makeChargeForm = () => {
  const $chargeInput = makeInput(DOM_ID_SELECTOR.chargeInput, 'number', PRODUCT_PURCHASE_MESSAGE.willChargeAmount);
  const $chargeButton = makeButton(PRODUCT_PURCHASE_MESSAGE.charge, DOM_ID_SELECTOR.chargeButton, 'submit');

  return makeForm([$chargeInput], $chargeButton);
};

const makeChargeAmount = () => {
  const $div = document.createElement('div');
  const $explain = document.createElement('span');
  $explain.appendChild(document.createTextNode(PRODUCT_PURCHASE_MESSAGE.amount));

  const $chargeAmount = document.createElement('span');
  $chargeAmount.setAttribute('id', DOM_ID_SELECTOR.chargeAmount);

  $div.appendChild($explain);
  $div.appendChild($chargeAmount);

  return $div;
};

const makeProductPurchaseTable = () => {
  const headerElements = [
    PRODUCT_PURCHASE_MESSAGE.productName,
    PRODUCT_PURCHASE_MESSAGE.productPrice,
    PRODUCT_PURCHASE_MESSAGE.productQuantity,
    PRODUCT_PURCHASE_MESSAGE.productPurchase,
  ];
  const $productPurchaseTable = makeTable(headerElements, DOM_ID_SELECTOR.productPurchaseTable);

  return $productPurchaseTable;
};

const makeCoinTableRow = (text, id) => {
  const $tr = document.createElement('tr');

  const $left = document.createElement('td');
  $left.appendChild(document.createTextNode(text));

  const $right = document.createElement('td');
  $right.setAttribute('id', id);

  $tr.appendChild($left);
  $tr.appendChild($right);

  return $tr;
};

const makeCoinTable = () => {
  const headerElements = [PRODUCT_PURCHASE_MESSAGE.coin, PRODUCT_PURCHASE_MESSAGE.quantity];
  const $coinTable = makeTable(headerElements);

  $coinTable.appendChild(makeCoinTableRow(PRODUCT_PURCHASE_MESSAGE[500], DOM_ID_SELECTOR.coin500Quantity));
  $coinTable.appendChild(makeCoinTableRow(PRODUCT_PURCHASE_MESSAGE[100], DOM_ID_SELECTOR.coin100Quantity));
  $coinTable.appendChild(makeCoinTableRow(PRODUCT_PURCHASE_MESSAGE[50], DOM_ID_SELECTOR.coin50Quantity));
  $coinTable.appendChild(makeCoinTableRow(PRODUCT_PURCHASE_MESSAGE[10], DOM_ID_SELECTOR.coin10Quantity));

  return $coinTable;
};

const renderProductPurchaseTemplate = () => {
  const $content = document.getElementById(DOM_ID_SELECTOR.content);
  $content.innerHTML = '';

  $content.appendChild(makeTitle(PRODUCT_PURCHASE_MESSAGE.chargeAmount));
  $content.appendChild(makeChargeForm());
  $content.appendChild(makeChargeAmount());

  $content.appendChild(makeTitle(PRODUCT_PURCHASE_MESSAGE.productStatus));
  $content.appendChild(makeProductPurchaseTable());

  $content.appendChild(makeTitle(PRODUCT_PURCHASE_MESSAGE.change));
  $content.appendChild(makeButton(PRODUCT_PURCHASE_MESSAGE.return, DOM_ID_SELECTOR.coinReturnButton));
  $content.appendChild(makeCoinTable());
};

export default renderProductPurchaseTemplate;
