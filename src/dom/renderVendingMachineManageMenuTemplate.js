import { DOM_ID_SELECTOR, VENDING_MACHINE_CHARGE_MESSAGE } from '../constants.js';
import makeButton from './common/makeButton.js';
import makeInput from './common/makeInput.js';
import makeTable from './common/makeTable.js';
import makeForm from './common/makeForm.js';
import makeTitle from './common/makeTitle.js';

const makeVendingMachineChargeForm = () => {
  const $vendingMachineChargeInput = makeInput(DOM_ID_SELECTOR.vendingMachineChargeInput, 'text', VENDING_MACHINE_CHARGE_MESSAGE.willChargeAmount);
  const $vendingMachineChargeButton = makeButton(VENDING_MACHINE_CHARGE_MESSAGE.charge, DOM_ID_SELECTOR.vendingMachineChargeButton, 'submit');

  return makeForm([$vendingMachineChargeInput], $vendingMachineChargeButton);
};

const makeVendingMachineChargeAmount = () => {
  const $div = document.createElement('div');
  const $vendingMachineAmount = document.createElement('span');
  $vendingMachineAmount.appendChild(document.createTextNode(VENDING_MACHINE_CHARGE_MESSAGE.amount));

  const $vendingMachineChargeAmount = document.createElement('span');
  $vendingMachineChargeAmount.setAttribute('id', DOM_ID_SELECTOR.vendingMachineChargeAmount);

  $div.appendChild($vendingMachineAmount);
  $div.appendChild($vendingMachineChargeAmount);

  return $div;
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

const makeVendingMachineChargeTable = () => {
  const headerElements = [VENDING_MACHINE_CHARGE_MESSAGE.coin, VENDING_MACHINE_CHARGE_MESSAGE.quantity];
  const $vendingMachineChargeTable = makeTable(headerElements, DOM_ID_SELECTOR.vendingMachineChargeTable);

  $vendingMachineChargeTable.appendChild(makeCoinTableRow(VENDING_MACHINE_CHARGE_MESSAGE[500], DOM_ID_SELECTOR.vendingMachineCoin500Quantity));
  $vendingMachineChargeTable.appendChild(makeCoinTableRow(VENDING_MACHINE_CHARGE_MESSAGE[100], DOM_ID_SELECTOR.vendingMachineCoin100Quantity));
  $vendingMachineChargeTable.appendChild(makeCoinTableRow(VENDING_MACHINE_CHARGE_MESSAGE[50], DOM_ID_SELECTOR.vendingMachineCoin50Quantity));
  $vendingMachineChargeTable.appendChild(makeCoinTableRow(VENDING_MACHINE_CHARGE_MESSAGE[10], DOM_ID_SELECTOR.vendingMachineCoin10Quantity));

  return $vendingMachineChargeTable;
};

const renderVendingMachineManageMenuTemplate = () => {
  const $content = document.getElementById(DOM_ID_SELECTOR.content);
  $content.innerHTML = '';

  $content.appendChild(makeTitle(VENDING_MACHINE_CHARGE_MESSAGE.chargeVendingMachine));
  $content.appendChild(makeVendingMachineChargeForm());
  $content.appendChild(makeVendingMachineChargeAmount());

  $content.appendChild(makeTitle(VENDING_MACHINE_CHARGE_MESSAGE.vendingMachineAmount));
  $content.appendChild(makeVendingMachineChargeTable());
};

export default renderVendingMachineManageMenuTemplate;
