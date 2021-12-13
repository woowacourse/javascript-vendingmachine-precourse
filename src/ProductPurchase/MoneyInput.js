import { AMOUNT, HEADER } from '../common/constants.js';
import { createDiv, createHeader } from '../common/CreateElement.js';

import createMoneyInputForm from './CreateForm.js';

function createAmountInput() {
  const amountInput = createDiv();
  amountInput.setAttribute('id', 'charge-amount');
  amountInput.innerText = '';

  return amountInput;
}

function createAmountInputDiv() {
  const amountInputDiv = createDiv();
  amountInputDiv.innerHTML = AMOUNT.INPUT;
  const amountInput = createAmountInput();
  amountInputDiv.innerHTML += amountInput.innerText;

  return amountInputDiv;
}

export default function createMoneyInput() {
  const moneyInputDiv = createDiv();
  const moneyInputHeader = createHeader(HEADER.MONEY_INPUT);
  const moneyInputForm = createMoneyInputForm();
  const amountInputDiv = createAmountInputDiv();
  moneyInputDiv.append(moneyInputHeader, moneyInputForm, amountInputDiv);

  return moneyInputDiv;
}
