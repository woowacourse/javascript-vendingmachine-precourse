import { AMOUNT, HEADER } from '../common/constants.js';
import {
  createDiv,
  createHeader,
  createMenuDiv,
} from '../common/CreateElement.js';
import { $app } from '../common/elements.js';

import createCoinChargeForm from './CreateForm.js';
import createCoinListTable from './CreateTable.js';

function createChangeChargeDiv() {
  const id = 'change-charge-div';
  const changeChargeDiv = createMenuDiv(id);

  return changeChargeDiv;
}

function createAmountHave() {
  const amountHave = createDiv();
  amountHave.setAttribute('id', 'vending-machine-charge-amount');
  amountHave.innerText = '';

  return amountHave;
}

function createAmountHaveDiv() {
  const amountHaveDiv = createDiv();
  amountHaveDiv.innerHTML = AMOUNT.HAVE;
  const amountHave = createAmountHave();
  amountHaveDiv.innerHTML += amountHave.innerText;

  return amountHaveDiv;
}

function createCoinCharge() {
  const coinChargeDiv = createDiv();
  const coinChargeHeader = createHeader(HEADER.COIN_CHARGE);
  const coinChargeForm = createCoinChargeForm();
  const amountHaveDiv = createAmountHaveDiv();
  coinChargeDiv.append(coinChargeHeader, coinChargeForm, amountHaveDiv);

  return coinChargeDiv;
}

function createCoinList() {
  const coinListDiv = createDiv();
  const coinListHeader = createHeader(HEADER.COIN_LIST);
  const coinListTable = createCoinListTable();
  coinListDiv.append(coinListHeader, coinListTable);

  return coinListDiv;
}

export default function createChangeCharge() {
  const changeChargeDiv = createChangeChargeDiv();
  const coinCharge = createCoinCharge();
  const coinList = createCoinList();
  changeChargeDiv.append(coinCharge, coinList);
  $app.append(changeChargeDiv);
}
